import PropTypes from 'prop-types';
import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    value: '',
  };

  reset() {
    this.setState({ value: '' });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  handleInput = e => {
      console.log(e.target.value);
      this.setState({ value: e.target.value });
  };

  render() {
    return (
      <header>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">
            <span>Search</span>
          </button>

          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleInput}
            value={this.state.value}
          />
        </form>
      </header>
    );
  }
}


Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};