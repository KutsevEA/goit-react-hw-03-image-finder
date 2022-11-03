import PropTypes from 'prop-types';
import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    value: '',
  };

  handleChange = e => {
    this.setState({ value: e.value });
  };

  reset() {
    this.setState({ value: '' });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  render() {
    return (
      <header >
        <form  onSubmit={this.handleSubmit}>
          <button type="submit" >
            <span>Search</span>
          </button>

          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}


Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};