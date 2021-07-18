import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const LOCAL_STORAGE_KEY = "DATA";
  const [contact, setContacts] = useState([]);
  const addcontact = (Addcontact) => {
    console.log(Addcontact);
    setContacts([...contact, { Id: uuidv4(), ...Addcontact }]);
  };

  const DeleteContact = (Id) => {
    const NewContactList = contact.filter((contact) => {
      return contact.Id !== Id;
    });
    setContacts(NewContactList);
  };
  useEffect(() => {
    const LocalBrowserData = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    if (LocalBrowserData) setContacts(LocalBrowserData);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contact));
  }, [contact]);

  return (
    <div>
      <Header></Header>
      <AddContact AddContactHandler={addcontact}></AddContact>
      <ContactList ContactListHandler={contact} getContactId={DeleteContact}></ContactList>
    </div>
  );
}
export default App;
