import { StyleSheet } from "react-native";
import { DropShadowBase } from "react-native-drop-shadow";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(35,134,98,1)",
    borderTopLeftRadius: 0,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  bankInvest: {
    fontFamily: "arial",
    color: "#fff",
    fontSize: 60,
    marginBottom: "40%",
  },
  botao: {
    position: 'absolute',
    bottom: 20,
    width:'70%',
    height:'4%',
    borderRadius: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,

  },
  botao2: {
    position: 'absolute',
    bottom: 20,
    width:'70%',
    height:'4%',
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    shadowRadius:'3px',

  },


  text:{
    fontSize: 20,

  },
  text2:{
    fontSize: 20,
    color: '#fff',
  },


});

export default styles