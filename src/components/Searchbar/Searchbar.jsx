import PropTypes from 'prop-types';
import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    value: '',
  };

  handleChange = e => {
    e.preventDefault();
    console.log(e.target.value);
    console.log(e);

    this.setState({ value: e.value });
  };

  reset() {
    this.setState({ value: '' });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    // this.reset();onSubmit={this.handleChange}
  };

    handleInput = e => {
      console.log(e)
    e.preventDefault();
    this.props.onSubmit(this.state);
    // this.reset();onSubmit={this.handleChange}
  };

  render() {
    return (
      <header>
        <form>
          <button type="submit">
            <span>Search</span>
          </button>

          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onSubmit={this.handleInput}
          />
        </form>
      </header>
    );
  }
}


Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};