const database: Contact[] = [
  { name: 'Jane Doe', email: 'jane.doe@example.com' },
  { name: 'Mary Jane', email: 'mary.jane@example.com' },
  { name: 'Diana Prince', email: 'diana.prince@example.com' },
  { name: 'Natasha Romanoff', email: 'natasha.romanoff@example.com' },
];

export async function listContacts(): Promise<Contact[]> {
  return database;
}
