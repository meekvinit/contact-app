import React from "react";
import { Table } from "react-bootstrap";

const ContactCard = (props) => {
  const { Id, Name, Email } = props.contacts;
  return (
    <Table striped bordered hover>
      <tbody>
        <tr>
          <td>{Id}</td>
          <td>{Name}</td>
          <td>{Email}</td>
          <td>
          <>
          <ion-icon name="close-sharp" onClick={()=> props.clickHandler(Id)}></ion-icon>
          </>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default ContactCard;
