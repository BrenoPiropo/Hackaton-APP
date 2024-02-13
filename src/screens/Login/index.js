import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();

  const handleSignUp = () => {
    navigation.navigate('Principal'); // Navega para a tela principal
  };
  return (
    <View style={styles.container}>
      <View style={styles.rectangle}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Login</Text>
          <TextInput
            style={styles.input}
            placeholder="Insert your user"
            placeholderTextColor="#000"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="Insert your password"
            placeholderTextColor="#000"
            secureTextEntry={true}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <View style={styles.textWrapper}>
        <Text style={styles.text}>Sustentech</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    fontFamily: 'Baloo Bhai',
    fontSize: 32,
    fontWeight: '400',
    lineHeight: 51,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#FFF',
  },
});

export default Login;
