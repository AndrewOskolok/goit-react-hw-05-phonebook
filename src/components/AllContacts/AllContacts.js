import React from "react";
import SingleContact from "../SingleContact/SingleContact";
import PropTypes from "prop-types";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./AllContacts.css";

const AllContacts = ({ contacts, filter, deleteContact }) => {
  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <TransitionGroup component="ul">
      {filterContacts.map(({ name, number, id }) => (
        <CSSTransition key={id} timeout={250} classNames="listItem">
          <SingleContact
            name={name}
            number={number}
            id={id}
            deleteContact={deleteContact}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

AllContacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default AllContacts;
