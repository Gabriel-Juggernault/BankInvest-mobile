import axios from "axios";


export default async function Get_Api(){
    axios.get("http://127.0.0.1:8000/api/Rota_Cliente/?format=json").then((resposta) => {
        let dados = resposta.data
        return dados
    })
}