import Link from "next/link"
import { useRouter } from "next/router"

export default function Params(){
   //rotas/qualquercoisa/params?id=5
   
    const router = useRouter()
    const id = router.query.id // ?id=5

    return(
        <>
           <h1>rotadinamica/params/{id}</h1>
           <br></br>
           <Link href="/rotas/qualquercoisa/">INDEX</Link>
        </>   
    )
}