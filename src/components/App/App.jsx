import { Component } from 'react';
import axios from 'axios';
import { Searchbar } from '../Searchbar/Searchbar';
import { XXX } from '../Loader/Loader';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '29584505-fef9e62872125eda21502d6ec';

const options = {
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
  per_page: 12,
};

const PicturesGallary = ({ pictures }) => (
  <ul>
    {console.log(pictures)}
    {pictures.map(({ id, webformatURL, largeImageURL, tags }) => (
      <li key={id}>
        <img src={webformatURL} alt={tags} />
      </li>
    ))}
  </ul>
);

export class App extends Component {
  state = {
    inputValue: '',
    picturesGallary: '',
  };

  async componentDidMount() {
    console.log(this.state.inputValue);
    const response = await axios.get(
      `?key=${API_KEY}&q=${this.state.inputValue}&image_type=${options.image_type}&per_page=${options.per_page}`
    );
    this.setState({ picturesGallary: response.data.hits });
    console.log(this.state.picturesGallary);
    console.log(response);
    // console.log(this.state.  picturesGallary.length);
  }

  addSearchValue = searchValue => {
    console.log(searchValue);
  };

  render() {
    const { picturesGallary } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.addSearchValue} />

        {/* {console.log(this.picturesGallary.length)} */}
        {/* {picturesGallary.length > 0 ? (
          <PicturesGallary picturesGallary={picturesGallary} />
        ) : null} */}

        <XXX></XXX>
      </div>
    );
  }
}
