import PropTypes from 'prop-types';
import axios from 'axios';

import { Component } from 'react';
import { Puff } from 'react-loader-spinner';
import { toast, ToastContainer } from 'react-toastify';

import { ImageGalleryContainer } from './ImageGallery.styled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { LoadMoreButton } from 'components/LoadMoreButton/LoadMoreButton';

async function fetchImagesByQuery(query, page) {
  const config = {
    baseURL: 'https://pixabay.com/api/',
    params: {
      key: '29094517-4eecc7a73a7fbfad4707a18db',
      q: query,
      page: page,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    },
  };

  const response = await axios.get('/', config);
  return response.data;
}

const api = {
  fetchImagesByQuery,
};

export class ImageGallery extends Component {
  static propTypes = {
    searchQuery: PropTypes.string.isRequired,
  };

  state = {
    images: [],
    error: null,
    status: 'idle',
    page: 1,
    totalImages: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { searchQuery } = this.props;
    const { page } = this.state;

    if (
      prevProps.searchQuery !== searchQuery ||
      prevState.page !== this.state.page
    ) {
      this.setState({ status: 'pending', images: [], page: 1 });

      const images = await api.fetchImagesByQuery(searchQuery, page);

      if (images.hits.length > 0) {
        this.setState({
          images: this.state.images.concat(images.hits),
          status: 'resolved',
          totalImages: images.total,
        });
      } else {
        this.setState({
          error: 'No result by this query!',
          status: 'rejected',
        });
        toast.error('No result by this query!');
      }
    }
  }

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, status, totalImages } = this.state;

    if (status === 'idle') {
      return <p>No match result yet</p>;
    }

    if (status === 'pending') {
      return <Puff color="#3f51b5" />;
    }

    if (status === 'rejected') {
      return (
        <>
          <p>{this.state.error}</p>
          <ToastContainer
            theme="light"
            pauseOnHover={false}
            autoClose={2000}
            draggable={false}
          />
        </>
      );
    }

    if (status === 'resolved') {
      return (
        <>
          <ImageGalleryContainer>
            {images.map(image => (
              <ImageGalleryItem
                key={image.id}
                image={{
                  webformatURL: image.webformatURL,
                  tags: image.tags,
                  largeImageURL: image.largeImageURL,
                }}
              ></ImageGalleryItem>
            ))}
          </ImageGalleryContainer>
          {totalImages !== images.length && (
            <LoadMoreButton onClick={this.loadMore} />
          )}
        </>
      );
    }
  }
}

ImageGallery.propTypes = {
  searchQuery: PropTypes.string.isRequired,
};