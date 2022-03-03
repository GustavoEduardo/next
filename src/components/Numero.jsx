import Styles from '../styles/Numero.module.css'
export default function numero(props){

    return(
        <div className={Styles.numero}>
            {props.numero}
        </div>
    )
}