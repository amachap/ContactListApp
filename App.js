import React, { useState } from 'react';
import { View, Text, TextInput, FlatList } from 'react-native';
import styles from './styles';

// Hardcoded contacts
const contacts = [
  { id: '1', name: 'Alice Johnson', phone: '555-0101' },
  { id: '2', name: 'Bob Martinez', phone: '555-0102' },
  { id: '3', name: 'Carol White', phone: '555-0103' },
  { id: '4', name: 'David Lee', phone: '555-0104' },
  { id: '5', name: 'Eva Brown', phone: '555-0105' },
  { id: '6', name: 'Frank Wilson', phone: '555-0106' },
  { id: '7', name: 'Grace Kim', phone: '555-0107' },
  { id: '8', name: 'Henry Davis', phone: '555-0108' },
];

export default function App() {
  // Search text state
  const [query, setQuery] = useState('');

  // Filter contacts
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(query.toLowerCase())
  );

  // Display each row
  const renderItem = ({ item, index }) => (
    <View
      style={[
        styles.row,
        index % 2 === 0 ? styles.evenRow : styles.oddRow
      ]}
    >
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.phone}>{item.phone}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Contacts</Text>

      <Text style={styles.count}>
        Showing {filteredContacts.length} of {contacts.length} contacts
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Search contacts..."
        value={query}
        onChangeText={text => setQuery(text)}
      />

      {filteredContacts.length === 0 ? (
        <Text style={styles.noResults}>No contacts found</Text>
      ) : (
        <FlatList
          data={filteredContacts}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      )}
    </View>
  );
}