import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const navigation = useNavigation();

  const handleLogin = async () => {
    const user = await AsyncStorage.getItem("user")
    if (!user) {
      alert("Nenhum usuário cadastrado!")
      return
    }
    const userJson = JSON.parse(user)
    if (userJson.email === email && userJson.password === password) {
      navigation.navigate("Main")
    } else {
      alert("E-mail ou senha inválidos!")
    }
  };

  const handleCadastro = () => {
    navigation.navigate("CadastrarUsuario")
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleCadastro}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 10,
    fontFamily: "Poppins_300Light",
    width: "80%",
    borderRadius: 3,
  },
  button: {
    backgroundColor: "#033ebc",
    padding: 10,
    width: "80%",
    alignItems: "center",
    marginVertical: 5,
    borderRadius: 3,
  },
  buttonText: {
    fontFamily: "Poppins_300Light",
    color: "#f2ebdf",
  },
});

export default Login;
