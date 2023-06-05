import { View, Text, TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import Axios_get from "../scripts/axios_get_universal";
import styles from "./styles"
import { useState } from "react";
import transferencia from "../scripts/script_transferencia";

export default function Extrato({navigation, route}){
    const id_cliente = route.params.cliente
    const [nome_cliente, setNomeCliente] = useState("")
    const valor = route.params.valor
    const descricao = route.params.descricao
    const data = route.params.data
    pegando_nome()

    function pegando_nome(){
        Axios_get(`/Rota_Cliente/${id_cliente}/`).then((response) => {
            setNomeCliente(response.nome)
        })
    }

    async function Enviar(){
        let dados = await Axios_get("/Rota_Cliente/")
        navigation.navigate("AreadoUsuario", {cliente: dados.id_cliente})
    }


    return(
        <View style={styles.corpo}>

            <Text style={styles.texto}>Extrato</Text> 


            <View style={styles.caixaextrato}>    
             
                <Text style={styles.info}> <Text style={styles.info2}> Nome: </Text>{nome_cliente}</Text> 
                <Text style={styles.info}> <Text style={styles.info2}> Valor: </Text>R$ {valor},00</Text> 
                <Text style={styles.info}> <Text style={styles.info2}> Descricao: </Text>{descricao}</Text> 
                <Text style={styles.info}> <Text style={styles.info2}> Data: </Text>{data}</Text> 

            </View>
            
            <TouchableOpacity style={styles.botao} onPress={Enviar}>
                <Text>Voltar</Text>
            </TouchableOpacity>


    
        </View>
    )

           
}
