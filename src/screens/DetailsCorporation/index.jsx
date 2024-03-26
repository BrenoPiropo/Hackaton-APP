import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faLaptopCode, faStar, faStarHalf ,IconDefinition} from '@fortawesome/free-solid-svg-icons';
import { styles } from './styles'; // Importa os estilos

const DetailsCompany = ({ route }) => {
  // Obtém os parâmetros passados durante a navegação
  const { company } = route.params;

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
      <View style={styles.content}>        
        <View style={styles.companyInfoContainer}>
          <View style={styles.content}>
            <FontAwesomeIcon icon={faLaptopCode} size={90} color="black" style={[styles.laptopIcon, {marginTop: 10}]} />
            <Text style={styles.companyName}>{company.name}</Text>
            <View style={[styles.ratingContainer, { marginTop: 50 }]}>{renderRatingStars(company.rating)}</View>
            <Text style={[styles.companyInfo, { marginTop: -120 }]}>{company.info}</Text>
            </View>
        </View>
        
      </View>
    </View>
  );
};

export default DetailsCompany;

