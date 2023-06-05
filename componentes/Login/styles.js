import { StyleSheet } from "react-native";
import { DropShadowBase } from "react-native-drop-shadow";

const styles = StyleSheet.create({

container: {
  flex: 1,
  backgroundColor: "#fff",
  borderTopLeftRadius: 0,
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: "Arial",
}, 
voltar:{
  color:'green',
  fontSize: 15,
  position:"absolute",
  top:30,
  marginRight: 330,
},
texto: {
  color: 'green',
  fontSize: 20,
  marginBottom: 600,
  
},

textoenviar:{
  color:"#fff",
},
placeholder: {
  width:350,
  height: 35,
  padding:5,
  backgroundColor: '#fff',
  marginBottom:30,
  borderBottomColor: "green",
  borderBottomWidth: 1
},
caixote: {
  position: "absolute",
  top:250
},
enviar: {
  width: 80,
  height:30,
  backgroundColor: "#1c8080",
  color: "#fff",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 2,
  marginTop: 40,
  justifyContent:"center",
  alignItems:"center",
},
    
});
  
  export default styles