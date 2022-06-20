import Link from "next/link"
import { useRouter } from "next/router"

export default function Index(){
   
    const router = useRouter()
    const cliente = router.query.cliente

    return(
        <>
           <h1>rotadinamica/{cliente}/index</h1>
           <br></br>
           <Link href="/rotas/qualquercoisa/params?id=55">PARAMS</Link>
        </>       
    )
}