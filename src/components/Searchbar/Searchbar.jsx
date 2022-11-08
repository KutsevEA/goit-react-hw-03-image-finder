import PropTypes from 'prop-types';

import { FaSearch } from 'react-icons/fa';
import { Formik } from 'formik';
import { toast, ToastContainer } from 'react-toastify';

import {
  SearchContainer,
  SearchForm,
  SearchButton,
  SearchInput,
} from './Searchbar.styled';

export const Searchbar = ({ onSearch }) => {
  const handleSubmit = ({ search }) => {
    if (search === '') {
      toast.error('Please enter search query!');
      return;
    }

    onSearch(search);
  };

  return (
    <SearchContainer>
      <Formik initialValues={{ search: '' }} onSubmit={handleSubmit}>
        <SearchForm autoComplete="off">
          <SearchButton type="submit">
            <FaSearch />
          </SearchButton>

          <SearchInput
            type="text"
            autoFocus
            placeholder="Search images and photos"
            name="search"
          />
        </SearchForm>
      </Formik>

      <ToastContainer
        theme="light"
        pauseOnHover={false}
        autoClose={2000}
        draggable={false}
      />
    </SearchContainer>
  );
};

Searchbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
