import styles from '../styles/Uteis.module.css'

export default function Tabuleiro(props){
    return(
        <div className={styles.tabuleiro}>
            {props.children}
        </div>
        
    )
}