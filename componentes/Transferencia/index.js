import { View, Text, TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import styles from "./styles"
import { useState } from "react";
import transferencia from "../scripts/script_transferencia";

export default function Transferencia({navigation, route}){
    const id_cliente = route.params.cliente
    const [valor, setValor] = useState(0)
    const [cpf, setCpf] = useState("")
    const [descricao, setDescricao] = useState("")
    


    return(
        <View style={styles.corpo} >

            <Text style={styles.texto} >Transferencia</Text>


                
            <TextInput style={styles.input} placeholder="CPF da Conta que será transferido" onChangeText={(e) => setCpf(e)}/>
            <TextInput style={styles.input} placeholder="valor da tranferencia" onChangeText={(e) => setValor(e)} />
            <TextInput style={styles.input} placeholder="Descrição" onChangeText={(e) => setDescricao(e)}/>

            <TouchableOpacity style={styles.botao} onPress={()=>transferencia({navigation}, id_cliente, valor, cpf, descricao)}>
                <Text>Pagar</Text>
            </TouchableOpacity>

    
        </View>
    )

           
}

