import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles'; // Importa os estilos

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


export default Login;
