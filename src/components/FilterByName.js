import '../styles/components/FilterByName.scss';
import PropTypes from 'prop-types';

function FilterByName({ searchName = '', handleNameChange }) {
  const handleChange = (event) => {
    handleNameChange(event.target.value);
  };

  return (
    <fieldset className="form__name">
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={handleChange}
        value={searchName}
        className="form__name__input"
      />
    </fieldset>
  );
}

FilterByName.propTypes = {
  searchName: PropTypes.string.isRequired,
  handleNameChange: PropTypes.func.isRequired,
};

export default FilterByName;
