import router, { useRouter } from "next/router"

export default function Nome(){
   
    let r = new useRouter()
    let nome = r.query.nome

    return(
        <>
            <h1>Nevegação programática. Sem link - {nome}</h1>
           <div style={{display: "fex", fexDirection: "column", alignItems: "flex-start"}} >
                <button onClick={() => router.push("/mega")}>Mega</button>
            </div>
        </>
    )
}