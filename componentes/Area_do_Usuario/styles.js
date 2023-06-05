import { StyleSheet } from "react-native";
import { DropShadowBase } from "react-native-drop-shadow";

const styles = StyleSheet.create({

    corpo:{
        flex: 1,
        borderTopLeftRadius: 0,
        fontFamily:"Arial",
        backgroundColor:"#238662",
    },
    parte1:{
        height:'30%',
        width: '100%',
        backgroundColor:'#238662',
    },
    parte2:{
        height:'70%',
        width:'100%',
        backgroundColor: '#fff',
        borderRadius: 25,
        borderBottomLeftRadius:0,
        borderBottomRightRadius:0,

    },
    nav:{
        width:'100%',
        height:60,
        borderBottomWidth:1,
        borderColor:"#13681394",
        justifyContent:'center',
        alignItems:'center'
        
    },
    user:{
        width:44,
        height:45,
        backgroundColor:"#fff",
        position:'relative',
        top:34,
        right:"40%",
        borderRadius:"50%",
    },
    texto:{
        position:'relative',
        bottom:6,
        right:'27%',
        color: "#fff",
    },
    logo:{
        color:'#fff',
        position:'relative',
        fontSize: 25,
        bottom:40,
        left:"30%",
    },
    saldo:{
        position:"absolute",
        top:'30%',
        left:'10%',
        fontSize: 18,
        color:"#fff"
    },
    botoes:{
        position:"absolute",
        top:"50%",
        left:"15%"
    },
    botaoTrans:{
        width: 100,
        height: 50,
        backgroundColor:"#19664a",
        marginBottom:20,
        justifyContent: "center",
        alignItems:"center",
        borderRadius:10,
        color:"#fff"
    },
    botaoCode:{
        width: 100,
        height: 50,
        backgroundColor:"#19664a",
        justifyContent: "center",
        alignItems:"center",
        borderRadius:10,
        color:"#fff"
    },
    botoes2:{
        position:"absolute",
        top:"50%",
        right:"15%"
    },
    botaoDolar:{
        width: 100,
        height: 50,
        backgroundColor:"#19664a",
        marginBottom:20,
        justifyContent: "center",
        alignItems:"center",
        borderRadius:10,
        color:"#fff"
    },
    botaoExtrato:{
        width: 100,
        height: 50,
        backgroundColor:"#19664a",
        justifyContent: "center",
        alignItems:"center",
        borderRadius:10,
        color:"#fff"
    }


});

export default styles