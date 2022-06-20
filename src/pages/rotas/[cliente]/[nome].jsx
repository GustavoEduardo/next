import router, { useRouter } from "next/router"

export default function Nome(){
   
  

    return(
        <>
            <h1>Nevegação programática. Sem link</h1>
           <div style={{display: "fex", fexDirection: "column", alignItems: "flex-start"}} >
                <button onClick={() => router.push("/mega")}>Mega</button>
            </div>
        </>
    )
}