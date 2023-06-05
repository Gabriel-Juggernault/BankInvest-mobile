import { View, Text, TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import styles from "./styles"
import { useState } from "react";
import Axios_get from "../scripts/axios_get_universal";

export default function Login({navigation}){
    const [cpf, setCpf] = useState("")
    const [senha, setSenha] = useState("")

    async function teste(){
        let dados = await Axios_get("/Rota_Cliente/")
        for(let c =0; c < dados.length;  c++){
            if(dados[c].cpf == cpf && dados[c].senha == senha){
                navigation.navigate("AreadoUsuario", {cliente: dados[c].id_cliente})
            }
        }
    }
    function voltar(){
        navigation.navigate("Home")
    }

    return(
        <View style = {styles.container}>
                <TouchableOpacity style={styles.voltar} onPress={voltar}><Text>Voltar</Text></TouchableOpacity>
            
            <Text style={styles.texto}>Bem Vindo faça o login para continuar...</Text>
            
            <View style = {styles.caixote}>
                <TextInput placeholder="Digite seu cpf:" style = {styles.placeholder} onChangeText={(e)=>{setCpf(e)}}/>
                <TextInput 
                    placeholder="Digite sua senha:"
                    onChangeText={(e)=>{setSenha(e)}}
                    style = {styles.placeholder}/>
                <TouchableOpacity 
                    style = {styles.enviar} 
                    onPress={teste}> 
                    <Text style={styles.textoenviar}>Enviar</Text>
                </TouchableOpacity>
                </View>
        </View>
    )
}