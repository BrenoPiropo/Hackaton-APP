import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faLaptop, faCoffee, faCapsules, faCar, faAppleAlt, faShoppingBag, faSearch } from '@fortawesome/free-solid-svg-icons';

const Principal = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const redirectToTechnologyScreen = () => {
    navigation.navigate('Technology');
  };

  const redirectToDrinksScreen = () => {
    navigation.navigate('Drinks');
  };
  const redirectToPharmacoScreen = () => {
    navigation.navigate('Pharmaco');
  };
  const redirectToAutomobileScreen = () => {
    navigation.navigate('Automobile');
  };
  const redirectToFoodScreen = () => {
    navigation.navigate('Food');
  };
  const redirectToFashionScreen = () => {
    navigation.navigate('Fashion');
  };
  const categories = [
    { icon: faLaptop, name: 'Technology', onPress: redirectToTechnologyScreen },
    { icon: faCoffee, name: 'Drinks', onPress: redirectToDrinksScreen },
    { icon: faCapsules, name: 'Pharmaco',onPress: redirectToPharmacoScreen },
    { icon: faCar, name: 'Automobile' ,onPress: redirectToAutomobileScreen},
    { icon: faAppleAlt, name: 'Food' ,onPress: redirectToFoodScreen },
    { icon: faShoppingBag, name: 'Fashion',onPress: redirectToFashionScreen }
  ];

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchField}>
        <Icon name="search1" size={20} color="#666" style={styles.searchIcon} />
        <TextInput
          style={styles.input}
          placeholder="search corporation for|"
          placeholderTextColor="#333"
          value={searchText}
          onChangeText={text => setSearchText(text)}
          onFocus={() => setIsSearchFocused(true)}
          onBlur={() => setIsSearchFocused(false)}
        />
      </View>
      <Text style={styles.categoriesText}>Categories:</Text>
      <View style={[styles.categoriesContainer, { marginTop: isSearchFocused ? 48 : 0 }]}>
        {filteredCategories.map((category, index) => (
          <TouchableOpacity style={styles.category} key={index} onPress={category.onPress}>
            <FontAwesomeIcon icon={category.icon} size={100} color="white" />
            <Text style={styles.categoryName}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6D5B40',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchField: {
    alignItems: 'center',
    flexDirection: 'row',
    width: 250,
    height: 48,
    backgroundColor: '#FFF',
    borderRadius: 8,
    paddingLeft: 35,
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
    left: 20,
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

export default Principal;
