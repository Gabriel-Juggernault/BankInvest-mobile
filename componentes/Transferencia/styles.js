import { StyleSheet } from "react-native";
import { DropShadowBase } from "react-native-drop-shadow";

const styles = StyleSheet.create({
    corpo:{
        width:"100%",
        height:"100%",
        backgroundColor:"#fff",
        fontFamily:"Arial",
        justifyContent:"center",
        alignItems:"center",
    },
    texto:{
        position:"absolute",    
        top: 50,
        fontSize: 30,
        color:"#008018",
    },
    input:{
        width:350,
        height: 35,
        padding:5,
        backgroundColor: '#fff',
        marginBottom:30,
        borderBottomColor: "green",
        borderBottomWidth: 1
    },

    botao:{
        width: 80,
        height:30,
        backgroundColor: "#1c8080",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 2,
        marginTop: 40,
        color:"fff", 
    },
});
  
  export default styles