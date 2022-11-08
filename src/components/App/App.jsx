import { Component } from 'react';
import { Wrapper, Section } from './App.styled';

import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    searchQuery: '',
  };

  formSubmit = query => {
    this.setState({ searchQuery: query.trim().toLowerCase() });
  };

  render() {
    return (
      <Wrapper>
        <Searchbar onSearch={this.formSubmit} />
        <Section>
          <ImageGallery searchQuery={this.state.searchQuery} />
        </Section>
      </Wrapper>
    );
  }
}
