import React, { Component } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

export default class CadastrarUsuario extends Component {
  state = {
    nome: "",
    cpf: "",
    curso: "",
    telefone: "",
    email: "",
    password: "",
  };

  handleCadastro = async () => {
    const { nome, cpf, curso, telefone, email, password } = this.state;
    if (!email || !password || !nome || !cpf || !curso || !telefone) {
      alert("Preencha todos os campos!");
      return;
    }
    const user = {
      nome,
      cpf,
      telefone,
      curso,
      email,
      password,
    };
    await AsyncStorage.setItem("user", JSON.stringify(user));
    alert("Usuário cadastrado com sucesso!");
    this.props.navigation.navigate("Login");
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={this.state.nome}
          onChangeText={(nome) => this.setState({nome})}
        />
        <TextInput
          style={styles.input}
          placeholder="Telefone"
          value={this.state.telefone}
          onChangeText={(telefone) => this.setState({telefone})}
        />

        <TextInput
          style={styles.input}
          placeholder="CPF"
          value={this.state.cpf}
          onChangeText={(cpf) => this.setState({cpf})}
        />

        <TextInput
          style={styles.input}
          placeholder="Curso"
          value={this.state.curso}
          onChangeText={(curso) => this.setState({ curso })}
        />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          value={this.state.email}
          onChangeText={(email) => this.setState({ email })}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
        />
        <TouchableOpacity style={styles.button} onPress={this.handleCadastro}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

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
    width: "80%",
    fontFamily: "Poppins_300Light",
    borderRadius: 3,
  },
  button: {
    backgroundColor: "#033ebc",
    padding: 10,
    width: "80%",
    alignItems: "center",
    borderRadius: 3,

  },
  buttonText: {
    color: "#f2ebdf",
    fontFamily: "Poppins_300Light",
  },
});
