import React from "react";
import PropTypes from "prop-types";
import styles from "./FilterContacts.module.css";

const FilterContacts = ({ inputFilter }) => {
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        type="text"
        placeholder="Find contacts by name"
        onChange={inputFilter}
      ></input>
    </div>
  );
};

FilterContacts.propTypes = {
  inputFilter: PropTypes.func.isRequired,
};

export default FilterContacts;
