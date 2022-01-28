import Styles from '../styles/Display.module.css'
export default function Display(props){

    return(
        <div className={Styles.display}>
            {props.numero}
        </div>
    )
}