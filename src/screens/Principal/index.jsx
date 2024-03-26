import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faLaptop, faCoffee, faCapsules, faCar, faAppleAlt, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native'; // Importa o hook useNavigation
import { styles } from './styles'; // Importa os estilos

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
            <FontAwesomeIcon icon={category.icon} size={90} color="white" />
            <Text style={styles.categoryName}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Principal;
