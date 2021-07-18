import React from "react";
import { Container } from "react-bootstrap";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  console.log(props);

  const DeleteContact = (Id) =>{
      props.getContactId(Id);
  }
  const renderContactList = props.ContactListHandler.map((contact) => {
    return <ContactCard contacts={contact} key={contact.Id} clickHandler={DeleteContact}></ContactCard>;
  });
  return (
    <div>
      <Container>contact List {renderContactList}</Container>
    </div>
  );
};

export default ContactList;
