import { View, Text, TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import styles from "./styles";
import { useState } from "react";
import axios from "axios";
import Login from "../Login";

export default function Cadastrar({ navigation }) {
  // Estados para armazenar os valores dos campos
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [aviso, setAviso] = useState("");

  function voltar() {
    navigation.navigate("Home");
  }

  function Mandar() {
    // Verificar se todos os campos estão preenchidos
    if (!nome || !sobrenome || !cpf || !email || !senha) {
      setAviso("Por favor, preencha todos os campos!!");
      return;
    }

    // Verificar se o CPF tem 11 dígitos
     if (cpf.length !== 11) {
      setAviso("CPF inválido. O CPF deve ter 11 dígitos");
      return;
     }

    // Verificar se o email é válido
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      setAviso("Email inválido. Por favor, insira um email válido.");
      return;
    }

    // Objeto com os dados do cliente
    const cliente = {
      nome: nome,
      sobreNome: sobrenome,
      cpf: cpf,
      email: email,
      senha: senha,
      saldo: 0,
    }

    // Fazer a requisição para cadastrar o cliente  
    axios.post("http://127.0.0.1:8000/api/Rota_Cliente/", cliente)
      .then((response) => {
        alert("Cadastro feito com sucesso!!")
      })
      .catch((error) => {
        alert(error);
      });

    // Redirecionar para a tela de login
    navigation.navigate(Login);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.voltar} onPress={voltar}>
       <Text>Voltar</Text> 
      </TouchableOpacity>

      <View style={styles.caixa_de_texto}>
        <Text style={styles.texto1}>Bank Invest</Text>
        <Text style={styles.texto}>Venha fazer parte do nosso crescimento</Text>
        <Text style={styles.texto}>Temos Acionistas e Investidores 24H </Text>
        <Text style={styles.texto}>para te ajudar no crescimento do seu patrimônio </Text>

      </View>

      <View style={styles.caixote}>
        <Text style={styles.alerta}>{aviso}</Text>

        <TextInput
          placeholder="Digite seu nome"
          style={styles.placeholder}
          onChangeText={(text) => setNome(text)}
        />
        <TextInput
          placeholder="Digite seu sobrenome"
          style={styles.placeholder}
          onChangeText={(text) => setSobrenome(text)}
        />
        <TextInput
          placeholder="Digite seu CPF"
          style={styles.placeholder}
          onChangeText={(text) => setCpf(text)}
        />
        <TextInput
          placeholder="Digite seu email"
          style={styles.placeholder}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          placeholder="Digite sua senha"
          style={styles.placeholder}
          onChangeText={(text) => setSenha(text)}
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.enviar} onPress={Mandar}>
         <Text>Enviar</Text>  
        </TouchableOpacity>
      </View>
    </View>
  );
}
