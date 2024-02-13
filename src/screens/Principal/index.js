import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faLaptop, faCoffee, faCapsules, faCar, faAppleAlt, faShoppingBag } from '@fortawesome/free-solid-svg-icons';

const Principal = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchField}>
        <TextInput
          style={styles.input}
          placeholder="search corporation for|"
          placeholderTextColor="#333" // Cor do texto de placeholder
        />
      </View>
      <Text style={styles.categoriesText}>Categories:</Text>
      <View style={styles.categoriesContainer}>
        <View style={styles.category}>
          <FontAwesomeIcon icon={faLaptop} size={100} color="black" />
          <Text style={styles.categoryName}>Technology</Text>
        </View>
        <View style={styles.category}>
          <FontAwesomeIcon icon={faCoffee} size={100} color="green" />
          <Text style={styles.categoryName}>Drinks</Text>
        </View>
        <View style={styles.category}>
          <FontAwesomeIcon icon={faCapsules} size={100} color="red" />
          <Text style={styles.categoryName}>Pharmaco</Text>
        </View>
        <View style={styles.category}>
          <FontAwesomeIcon icon={faCar} size={100} color="black" />
          <Text style={styles.categoryName}>Automobile</Text>
        </View>
        <View style={styles.category}>
          <FontAwesomeIcon icon={faAppleAlt} size={100} color="red" />
          <Text style={styles.categoryName}>Food</Text>
        </View>
        <View style={styles.category}>
          <FontAwesomeIcon icon={faShoppingBag} size={100} color="blue" />
          <Text style={styles.categoryName}>Fashion</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6D5B40', // Cor de fundo
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchField: {
    alignItems: 'center', // Centraliza os itens verticalmente
    flexDirection: 'row', // Organiza os itens em linha
    position: 'absolute',
    width: 250,
    height: 48,
    top: 57,
    radius: 35,
    left: 74,
    backgroundColor: '#FFF', // Cor de fundo do campo de busca
    borderRadius: 8, // Borda arredondada
    paddingLeft: 10, // Espaçamento interno à esquerda
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  categoriesText: {
    position: 'absolute',
    width: 106,
    height: 22,
    top: 147, // 30px abaixo do botão de busca
    left: 44,
    color: '#FFF', // Cor do texto
    fontSize: 16,
    fontWeight: 'bold',
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -70,
    left: 20,
  },
  category: {
    alignItems: 'center',
    marginRight: 30,
    marginBottom: 50, // Espaçamento inferior entre as categorias
  },
  categoryName: {
    fontSize: 16,
    color: '#FFF', // Cor do texto
    marginTop: 5, // Espaçamento superior entre o ícone e o nome da categoria
  },
});

export default Principal;
