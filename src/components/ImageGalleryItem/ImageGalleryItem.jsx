import PropTypes from 'prop-types';
import { Component } from 'react';
import { Modal } from 'components/Modal/Modal';
import {
  ImageGalleryItemContainer,
  ImageGalleryImage,
  ModalImage,
} from '../ImageGallery/ImageGallery.styled';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { webformatURL, largeImageURL, tags } = this.props.image;

    return (
      <>
        <ImageGalleryItemContainer>
          <ImageGalleryImage
            src={webformatURL}
            alt={tags}
            onClick={this.toggleModal}
          />
        </ImageGalleryItemContainer>
        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <ModalImage src={largeImageURL} alt={tags} />
          </Modal>
        )}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
};
