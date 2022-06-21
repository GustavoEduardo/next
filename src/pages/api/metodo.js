
export default function handler(req, res) {
    
    if(req.method === "GET") res.status(200).json({ metodo: 'GET' })
    else if(req.method === "PUT") res.status(200).json({ metodo: 'PUT' })
    else if(req.method === "DELETE") res.status(200).json({ metodo: 'DELETE' })
    else res.status(405).json({ metodo: 'DESCONHECIDO' })
    
  }
  