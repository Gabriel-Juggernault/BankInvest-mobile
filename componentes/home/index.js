import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles"
import Transferencia from "../scripts/script_transferencia";


export default function Home({navigation}){
  return (
    <View style={styles.container}>

        <Text style={styles.bankInvest}>Bank invest</Text>
        <TouchableOpacity style={styles.botao} onPress={()=>{navigation.navigate("Login")}}><Text style={styles.text}>Entrar</Text></TouchableOpacity>
        <TouchableOpacity  style={styles.botao2} onPress={()=>{navigation.navigate("Cadastrar")}}><Text style={styles.text2}>Cadastrar</Text></TouchableOpacity>


    </View>
  );
}
  