

import { View, Text, TextInput, Image } from "react-native";
import { TouchableOpacity } from "react-native";
import Axios_get from "../scripts/axios_get_universal";
import styles from "./styles" 
import { useIsFocused } from '@react-navigation/native';
import React, { useState, useEffect } from "react";
import Transferencia from "../Transferencia";


export default function Area_do_Usuario({navigation, route}){
    const id_cliente = route.params.cliente
    const [nome_cliente, setNomeCliente] = useState("")
    const [saldo_cliente, setSaldoCliente] = useState("")
    const isFocused = useIsFocused
    isFocused()

    
    
    useEffect(()=>{
        if(isFocused){
           pegando_saldo(saldo_cliente)
           pegando_nome(nome_cliente)
        }
    }, [isFocused])
    
    function pegando_nome(){
        Axios_get(`/Rota_Cliente/${id_cliente}/`).then((response) => {
            setNomeCliente(response.nome)
        })
    }
    function pegando_saldo(){
        Axios_get(`/Rota_Cliente/${id_cliente}/`).then((response) => {
            setSaldoCliente(response.saldo)
        })
    }
    


    return(
        <View style={styles.corpo}>

            <View style={styles.parte1}>

                <View style={styles.nav}>
                    <TouchableOpacity style={styles.user} onPress={()=>navigation.navigate("infoUsuario", {cliente:id_cliente})}></TouchableOpacity>
                    <Text style={styles.texto}>Olá</Text>
                    <Text style={styles.texto}>{nome_cliente}</Text>
                    <Text style={styles.logo}>Bank Invest</Text>
                </View>

                <Text style = {styles.saldo}>Saldo: R$ {saldo_cliente},00</Text>

                <View style={styles.botoes}>
                    <TouchableOpacity style={styles.botaoTrans} onPress={()=>{navigation.navigate("RotaTransferencia", {cliente:id_cliente}, {nome: nome_cliente})}}>Tranferencia</TouchableOpacity>

                </View>

                
                <View style={styles.botoes2}>
                    <TouchableOpacity style={styles.botaoDolar} onPress={()=>{navigation.navigate("RotaTransferencia", {cliente:id_cliente})}}>Dolar</TouchableOpacity>

                </View>

            </View>


            <View style={styles.parte2}>
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
            </View> 

        </View>
    )

}