import axios from "axios";
import Axios_get from "./axios_get_universal";

export default async function transferencia({navigation}, id_cliente, valor, cpf, descricao){
    let dados =  await Axios_get("/Rota_Cliente/"+id_cliente+"/")
    if(!id_cliente || !valor){
        alert("Estão faltando informações")
    }
    else if(valor < 0){
        alert("Não é possivel pagar valores negativos")
    }
    else if(dados.saldo < valor){
        alert("Transação Cancelada")
    } 
    else if(dados.cpf == cpf){
        alert("Não foi possivel realizar a transação")
    }
    else if(cpf.length < 11 || cpf.length > 11){
        alert("Cpf invalido!")
        return
    }
    else{
        Dicionario_PUT_Cliente_Pagador()
        async function Dicionario_PUT_Cliente_Pagador(){
            let dados = await Axios_get(`/Rota_Cliente/${id_cliente}/`)
            let dicionario = {
                nome: dados.nome,
                sobreNome: dados.sobreNome,
                cpf: dados.cpf,
                email: dados.email,
                senha: dados.senha,
                saldo: dados.saldo - valor,
            }
            await axios.put(`http://127.0.0.1:8000/api/Rota_Cliente/${id_cliente}/`, dicionario).catch((erro) => {
                alert("Erro -> " + erro)
                return
            })
            
        }

        Dicionario_PUT_Cliente_Recebedor()
        async function Dicionario_PUT_Cliente_Recebedor(){
            let dados = await Axios_get(`/Rota_Cliente/`)
            for(let c = 0; c < dados.length; c++){
                if(dados[c].cpf == cpf){
                    let dicionario = {
                        nome: dados[c].nome,
                        sobreNome: dados[c].sobreNome,
                        cpf: dados[c].cpf,
                        email: dados[c].email,
                        senha: dados[c].senha,
                        saldo: dados[c].saldo + parseFloat(valor),
                    }
                    await axios.put(`http://127.0.0.1:8000/api/Rota_Cliente/${dados[c].id_cliente}/`, dicionario).catch((erro) => {
                        alert("teste" + erro)
                        return
                    }) 
                }
            }
        }

        Dicionario_Post()
        async function Dicionario_Post(){
            
            await axios.post(`http://127.0.0.1:8000/api/Rota_Transacoes/`, {descricao: descricao, valor: valor, cliente: id_cliente }).then ((response) => {response = response.data

                navigation.navigate("RotaExtrato", {cliente: id_cliente, valor: valor, descricao: descricao, transacao: response.id_transacoes, data: response.data

            })
        })
        }
    }
} 
