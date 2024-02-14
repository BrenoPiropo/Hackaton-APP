import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faCoffee, faBuilding, faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';

const Drinks = () => {
  // Array de empresas com avaliações de estrelas
  const companies = [
    { name: 'Company Name 1', info: 'Info 1', rating: 4.5 },
    { name: 'Company Name 2', info: 'Info 2', rating: 3 },
    { name: 'Company Name 3', info: 'Info 3', rating: 2.5 },
    { name: 'Company Name 4', info: 'Info 4', rating: 4 },
    { name: 'Company Name 5', info: 'Info 5', rating: 5 },
  ];

  // Função para renderizar as estrelas de avaliação
  const renderRatingStars = (rating) => {
    const stars = [];
    // Adiciona estrelas inteiras
    for (let i = 0; i < Math.floor(rating); i++) {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} size={20} color="yellow" />);
    }
    // Adiciona meia estrela se houver
    if (rating % 1 !== 0) {
      stars.push(<FontAwesomeIcon key={stars.length} icon={faStarHalf} size={20} color="yellow" />);
    }
    // Preenche com estrelas vazias até totalizar 5 estrelas
    while (stars.length < 5) {
      stars.push(<FontAwesomeIcon key={stars.length} icon={faStar} size={20} color="gray" />);
    }
    return stars;
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <View style={styles.titleRectangle}>
          <Text style={styles.title}>Drinks</Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        {companies.map((company, index) => (
          <View key={index} style={styles.infoRectangle}>
            <FontAwesomeIcon icon={faCoffee} size={50} color="black" />
            <View style={styles.companyInfo}>
              <View style={styles.companyNameContainer}>
                <Text style={styles.companyName}>{company.name}</Text>
              </View>
              <View style={styles.additionalInfoContainer}>
                <Text style={styles.additionalInfo}>{company.info}</Text>
              </View>
              <View style={styles.ratingContainer}>{renderRatingStars(company.rating)}</View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E291B', // Fundo verde
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    marginBottom: 20, // Espaçamento abaixo do título
  },
  titleRectangle: {
    backgroundColor: '#6D5B40', // Cor de fundo do retângulo do título
    borderRadius: 30, // Borda arredondada
    paddingHorizontal: 20, // Espaçamento horizontal interno
    paddingVertical: 10, // Espaçamento vertical interno
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white', // Cor do texto do título
  },
  infoContainer: {
    marginTop: 20, // Espaçamento acima do retângulo de informações
  },
  infoRectangle: {
    right:30,
    flexDirection: 'row', // Organiza o ícone e as informações da empresa em linha
    alignItems: 'center', // Alinha os itens verticalmente
    width: 300,
    height: 100,
    backgroundColor: '#6D5B40', // Cor de fundo do retângulo de informações
    borderRadius: 30, // Borda arredondada
    paddingHorizontal: 20, // Espaçamento horizontal interno
    marginBottom: 10, // Espaçamento abaixo do retângulo
  },
  companyInfo: {
    marginLeft: 20, // Espaçamento à esquerda das informações da empresa
    alignItems: 'flex-start', // Alinha as informações da empresa à esquerda
  },
  companyNameContainer: {
    backgroundColor: 'green', // Cor de fundo do retângulo do nome da empresa
    width: 200, // Largura do retângulo
    height: 30, // Altura do retângulo
    borderRadius: 30, // Borda arredondada apenas nos cantos esquerdos
    justifyContent: 'center', // Alinha o texto verticalmente
    paddingLeft: 10, // Espaçamento interno à esquerda para o texto
  },
  companyName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white', // Cor do texto
  },
  additionalInfoContainer: {
    backgroundColor: 'pink', // Cor de fundo do retângulo do additional info
    width: 200, // Largura do retângulo
    height: 30, // Altura do retângulo
    borderRadius: 30, // Borda arredondada apenas nos cantos direitos
    justifyContent: 'center', // Alinha o texto verticalmente
    paddingLeft: 10, // Espaçamento interno à esquerda para o texto
    marginTop: 10, // Espaçamento acima do additional info
  },
  additionalInfo: {
    fontSize: 14,
    color: 'white', // Cor do texto adicional
  },
  ratingContainer: {
    flexDirection: 'row', // Organiza as estrelas em linha
    marginTop: 5, // Espaçamento acima das estrelas de avaliação
  },
});

export default Drinks;
