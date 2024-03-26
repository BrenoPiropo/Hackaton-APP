import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#205C4E', // Fundo verde
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
      left: 2,
      flexDirection: 'row', // Organiza o ícone e as informações da empresa em linha
      alignItems: 'center', // Alinha os itens verticalmente
      width: 340,
      height: 100,
      backgroundColor: '#6D5B40', // Cor de fundo do retângulo de informações
      borderRadius: 20, // Borda arredondada
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
  