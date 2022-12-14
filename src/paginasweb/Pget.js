import React, { useState } from "react";
import axios from "axios";

function Listarlista(){
    const [postar,selpostar] = useState([]);
    const [barra,setBarra] = useState('')
    let Url = `https://projeto-apredendoo-servidor-json.vercel.app/`+barra
    console.log(Url)
    const buscar = () => {
        axios.get(Url) 
        .then((resposta) => {selpostar(resposta.data)})
    }

    return (
        <>
        <div>
            <div>
                <h1>Veja aqui o itens que estão na sua lista de desejos</h1>
            </div>
            <div>
                <nav>
                    <h1>todos os dados</h1>
                </nav>
                <select onChange={(e)=>{
                    const selecao = e.target.value;setBarra(selecao)
                }}>
                    <option value="Medicamentos">Medicamentos</option>
                    <option value="Vitaminas">Vitaminas</option>
                    <option value="Lanches_Rapidos">Lanches Rápidos</option>
                </select>
                <div>
                    <button onClick={buscar}>Buscar</button>
                </div>
            </div>
                {postar.map((data) => {
                    return <div key={data.id}>
                        <ul>
                            <li>{data.nome}</li>
                            <li>{data.descricao}</li>
                            <li>{data.preco}</li>
                            <li><img src={data.imgl}/></li>
                        </ul>
                        </div>
                })}
        </div>
        </>  
    );
}

export default Listarlista;