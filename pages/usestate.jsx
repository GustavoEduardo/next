import { useState } from 'react'
import Display from '../components/Display';
import Styles from '../styles/Estado.module.css'
export default function Estado(){

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    function localizaMouse(e){
        setX(e.clientX)
        setY(e.clientY)
    }

    return(        

        <div className={Styles.estado} onMouseMove={localizaMouse}>
             <Display numero={x+y}></Display>           
            <span>X={x}</span>
            <span>Y={y}</span>
        </div>
       
        
    )
}