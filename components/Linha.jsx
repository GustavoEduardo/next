import Casa from "./Casa";
import styles from "../styles/Linha.module.css"

export default function Linha(props){
    return(
        <div className={styles.linha}>            
            <Casa preta={props.primeira}></Casa>
            <Casa preta={!props.primeira}></Casa>
            <Casa preta={props.primeira}></Casa>
            <Casa preta={!props.primeira}></Casa>
            <Casa preta={props.primeira}></Casa>
            <Casa preta={!props.primeira}></Casa>
            <Casa preta={props.primeira}></Casa>
            <Casa preta={!props.primeira}></Casa>
        </div>
    )

}