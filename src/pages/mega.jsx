import { useEffect, useState } from "react";
import Numero from "../components/Numero";
import Styles from "../styles/Uteis.module.css";
import {numerosAleatorios} from '../funcoes/numerosAleatorios';


export default function Mega(){
    const [numeros, setNumeros] = useState([])
    const [qtd, setQtd] = useState(1)

    //falta estudar. Para evitar um erro por gerar numero aleatório
    useEffect(()=>{
        setNumeros(numerosAleatorios())
    },[])

    function renderNumeros(){
        return numeros.map(n=> <Numero key={n} numero={n} ></Numero>)
    }

    return(
        <>
            <div className={Styles.centro}>       
                {renderNumeros()}
            </div>
            <div style={{
                display: "flex",
                justifyContent: "center",
                marginTop:"5px"
            }}>
                <input onChange={(ev)=>{setQtd(ev.target.value)}} type="number" min="1" max="20" value={qtd}></input>
                <button onClick={() =>setNumeros(numerosAleatorios(qtd))}>Gerar</button>
            </div>
        </>       
    )
}