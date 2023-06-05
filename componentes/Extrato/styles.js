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
        fontFamily:"Arial",
    },
    texto:{
        position:"absolute",
        top: 50,
        fontSize: 30,
        color:"#008018",
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
    caixaextrato:{
        width:"80%",
        height:"50%",
        justifyContent:"center",
        alignItems:"baseline",
        borderRightWidth:1,
        borderLeftWidth:1,
        borderBottomWidth:1,
        borderTopWidth:1,
        borderColor:"Green"
    },
    info: {
        marginBottom:20,
    },
    info2: {
      fontWeight:"bold",
      marginLeft:10,
    },

});
  
export default styles