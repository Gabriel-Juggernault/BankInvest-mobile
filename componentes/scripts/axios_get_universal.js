import axios from "axios";

export default async function Axios_get(rota_nome){
    let dados = await axios.get(`http://127.0.0.1:8000/api${rota_nome}?format=json`)
    dados = await dados.data
    return dados
}
