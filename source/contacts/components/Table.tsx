import React from 'react';

type Props = React.PropsWithChildren<{
  contacts: Contact[];
}>;

export default function Table({ contacts }: Props) {
  return (
    <div className="contacts-table-container">
      <h1 className="contacts-table-title">Contacts Directory</h1>
      {contacts.length > 0 ? (
        <table className="contacts-table">
          <thead>
            <tr>
              <th>Email</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <TableBodyRow key={contact.email} contact={contact} />
            ))}
          </tbody>
        </table>
      ) : (
        <div className="contacts-empty-message">No contacts found.</div>
      )}
    </div>
  );
}

function TableBodyRow({ contact }: { contact: Contact }) {
  return (
    <tr key={contact.email}>
      <td className="email" data-label="Email">{contact.email}</td>
      <td className="name" data-label="Name">{contact.name}</td>
    </tr>
  );
}
