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
caixa_de_texto: {
    marginBottom: '140%',
    alignItems: "center",
    justifyContent:"center"
},
voltar:{
  color:'green',
  fontSize: 15,
  position:"absolute",
  top:"4%",
  marginRight: '80%',
},
texto1: {
  color: '#006000',
  fontSize: 50,
  marginBottom:'2%',
},
texto: {
    color: '#009000',
    fontSize: 18,
    marginBottom:'0.25%',
},
placeholder: {
  width:'205%',
  height: '10%',
  borderBottomWidth: 1,
  backgroundColor: '#fff',
  padding:'4%',
  marginBottom:'20%',

},
caixote: {
  position: "absolute",
  top:'30%',
  alignItems: "center"
},
enviar: {
  width: 70,
  height:30,
  backgroundColor: "#1c8080",
  color: "#fff",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 2,
  marginTop: 40
},
alerta:{
  color:"#F00",
  fontSize:9,
  marginBottom:20,
},
    
});
  
  export default styles