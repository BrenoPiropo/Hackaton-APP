import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6D5B40',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchField: {
    alignItems: 'center',
    flexDirection: 'row',
    width: 320,
    height: 45,
    backgroundColor: '#FFF',
    borderRadius: 8,
    paddingLeft: 35,
    marginTop: -180,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  searchIcon: {
    position: 'absolute',
    left: 10,
    top: 14,
    zIndex: 1,
  },
  categoriesText: {
    top:40,
    left:-110,
    width: 106,
    height: 22,
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    top:45,
    left: 15,
    right: 15,
  },
  category: {
    alignItems: 'center',
    marginRight: 30,
    marginBottom: 50,
  },
  categoryName: {
    fontSize: 16,
    color: '#FFF',
    marginTop: 15,
  },
});
