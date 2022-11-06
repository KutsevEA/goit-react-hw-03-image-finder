import { Component } from 'react';
import { Searchbar } from '../Searchbar/Searchbar';

export class App extends Component {
  state = {
    inputValue: '',
  };

  addSearchValue = searchValue => {
    console.log(searchValue);
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.addSearchValue} />
      </div>
    );
  }
}
