import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f2f2f2',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  count: {
    marginBottom: 10,
    color: '#555',
  },

  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 15,
  },

  row: {
    padding: 15,
    borderRadius: 8,
    marginBottom: 8,
  },

  evenRow: {
    backgroundColor: '#ffffff',
  },

  oddRow: {
    backgroundColor: '#dfe9ff',
  },

  name: {
    fontSize: 16,
    fontWeight: '600',
  },

  phone: {
    color: '#555',
    marginTop: 4,
  },

  noResults: {
    textAlign: 'center',
    fontSize: 16,
    color: 'red',
    marginTop: 20,
  },
});

export default styles;
