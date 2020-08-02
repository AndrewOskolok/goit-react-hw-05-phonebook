import React, { useState } from "react";
import { v1 as uuidv1 } from "uuid";
import PropTypes from "prop-types";
import styles from "./AddContact.module.css";

const Phonebook = ({ setContacts, contacts, setShowAlert }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const inputName = ({ target }) => {
    setName(target.value);
  };

  const inputNumber = ({ target }) => {
    setNumber(target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (contacts.find((contact) => contact.name === name)) {
      setShowAlert({ status: true, text: "Contact already exist" });
      setTimeout(() => {
        setShowAlert({ status: false, text: "" });
      }, 2000);
      return;
    }
    if (name.length < 2) {
      setShowAlert({ status: true, text: "Name mast content 2 characters" });

      setTimeout(() => {
        setShowAlert({ status: false, text: "" });
      }, 2000);
      return;
    }

    localStorage.setItem(
      "localContacts",
      JSON.stringify([{ name, number, id: uuidv1() }, ...contacts])
    );

    setContacts([{ name, number, id: uuidv1() }, ...contacts]);
    setName("");
    setNumber("");
  };

  return (
    <form className={styles.form} autoComplete="off" onSubmit={submitHandler}>
      <input
        className={styles.inputName}
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={inputName}
      ></input>
      <input
        className={styles.inputnumber}
        type="text"
        name="number"
        placeholder="Nubmer"
        value={number}
        onChange={inputNumber}
      ></input>
      <button className={styles.button} type="submit">
        Add contacts
      </button>
    </form>
  );
};

Phonebook.propTypes = {
  setContacts: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
  setShowAlert: PropTypes.func.isRequired,
};

export default Phonebook;
