import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1E291B',
      alignItems: 'center',
      justifyContent: 'center',
    },
    rectangle: {
      width: 350,
      height: 250,
      position: 'absolute',
      top: 200,
      left: 27,
      borderColor: '#FFF',
      borderWidth: 2,
      backgroundColor: '#6D5B40',
      padding: 20,
      borderRadius: 15,
    },
    inputContainer: {
      marginBottom: 20,
    },
    label: {
      color: '#FFF',
      marginBottom: 5,
    },
    input: {
      width: '100%',
      height: 40,
      backgroundColor: '#FFF',
      borderRadius: 15,
      paddingLeft: 10,
    },
    button: {
      width: 195,
      height: 45,
      position: 'absolute',
      top: 580,
      left: 106,
      backgroundColor: '#6D5B40',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      color: '#FFF',
      fontSize: 16,
    },
    textWrapper: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      top: -320,
      fontSize: 32,
      fontWeight: '400',
      lineHeight: 51,
      letterSpacing: 0,
      textAlign: 'center',
      color: '#FFF',
    },
  });