import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCoffee, faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native'; // Importa o hook useNavigation
import { styles } from './styles'; // Importa os estilos
const Drinks = () => {
  const navigation = useNavigation(); // Inicializa o hook useNavigation
  
  const info = 'Ut augue dui, vehicula ut tempor quis, ornare mattis arcu. Ut ultrices nisi at elementum vulputate. Curabitur quam neque, finibus ut sapien nec, efficitur molestie tellus. Phasellus nec cursus lorem, et dapibus massa. Phasellus vel cursus magna. ';
  // Array de empresas com avaliações de estrelas
  const companies = [
    { name: 'Company Name 1', info, rating: 4.5 },
    { name: 'Company Name 2', info, rating: 3 },
    { name: 'Company Name 3', info, rating: 2.5 },
    { name: 'Company Name 4', info, rating: 4 },
    { name: 'Company Name 5', info, rating: 5 },
  ];
      // Ordena as empresas pela quantidade de estrelas em ordem decrescente

  companies.sort((a, b) => b.rating - a.rating);

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
  
  const redirectToCompanyDetails = (company) => {
    navigation.navigate('DetailsCorporation', { company });
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
          <TouchableOpacity key={index} style={styles.infoRectangle} onPress={() => redirectToCompanyDetails(company)}>
            <FontAwesomeIcon icon={faCoffee} size={50} color="black" />
            <View style={styles.companyInfo}>
              <View style={styles.companyNameContainer}>
                <Text style={styles.companyName}>{company.name}</Text>
              </View>
              <View style={styles.ratingContainer}>{renderRatingStars(company.rating)}</View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};


export default Drinks;
