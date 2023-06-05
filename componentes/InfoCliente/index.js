import { View, Text, TouchableOpacity } from "react-native";
import styles from "./style";
import Transferencia from "../scripts/script_transferencia";
import Axios_get from "../scripts/axios_get_universal";
import { useEffect, useState } from "react";
import axios from 'axios';
import { TextInput } from "react-native-web";


export default function InfoCliente({navigation, route}){
  const id_cliente = route.params.cliente
  const [nome, setNome] = useState("")
  const [sobrenome, setSobrenome] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [mudar, setMudar] = useState(false)
  useEffect(()=>{pegar_dados()}, [])
  async function pegar_dados(){
    let dados = await Axios_get(`/Rota_Cliente/${id_cliente}/`)
    setNome(dados.nome)
    setSobrenome(dados.sobreNome)
    setEmail(dados.email)
    setSenha(dados.senha)
  }

  axios({
    method: 'put',
    url: `http://127.0.0.1:8000/api/Rota_Cliente/${id_cliente}/`,
    data: { data: 'dados' },
    headers: {
        'Content-Type': 'application/json',
    }
    })
    .then(response => {
        // Tratar a resposta da API
        console.log(response.data);
    })
    .catch(error => {
        // Tratar erros
        console.error(error);
    });
    

  function Mudar(){
    if(mudar){
      return(
        <View>
          <TextInput placeholder="Digite o novo nome"/>
          <TextInput placeholder="Digite o novo sobrenome"/>
          <TextInput placeholder="Digite o novo email"/>
          <TextInput placeholder="Digite a novo senha"/>
        </View>
      )
    }
  }
  
  
  return (
    <View style = {styles.corpo}>
      <Text>{nome}</Text>
      <Text>{sobrenome}</Text>
      <Text>{email}</Text>
      <Text>{senha}</Text>
      <TouchableOpacity onPress={()=>{setMudar(true)}}><Text>Mudar</Text></TouchableOpacity>
    </View>
  );
}