import axios from "axios";

export default async function Dolar_get() {
    let dados = await axios.get('https://economia.awesomeapi.com.br/last/USD-BRL')
    dados.data = await dados.data
    return dados
}