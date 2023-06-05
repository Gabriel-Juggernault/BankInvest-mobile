import { createStackNavigator} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Home from "./componentes/home/index";
import Login from "./componentes/Login";
import Cadastrar from "./componentes/Cadastrar"
import Area_do_Usuario from "./componentes/Area_do_Usuario";
import Transferencia from "./componentes/Transferencia";
import DolarCotacao from "./componentes/Dolar"
import Extrato from "./componentes/Extrato";
import InfoCliente from "./componentes/InfoCliente";

const Pilha = createStackNavigator()

export default function Rotas(){
    return(
        <NavigationContainer>
            <Pilha.Navigator>
                <Pilha.Screen name="Home" component={Home} options={{headerShown: false}}/>
                <Pilha.Screen name="Login" component={Login} options={{headerShown: false}}/>
                <Pilha.Screen name="Cadastrar" component={Cadastrar} options={{headerShown: false}}/>
                <Pilha.Screen name="AreadoUsuario" component={Area_do_Usuario} options={{headerShown: false}}/>
                <Pilha.Screen name="PegarDolar" component={DolarCotacao} options={{headerShown: false}}/>
                <Pilha.Screen name="RotaTransferencia" component={Transferencia} options={{headerShown: false}}/>
                <Pilha.Screen name="RotaExtrato" component={Extrato} options={{headerShown: false}}/>
                <Pilha.Screen name="infoUsuario" component={InfoCliente} options={{headerShown: false}}/>

            </Pilha.Navigator>
        </NavigationContainer>
    )
}

