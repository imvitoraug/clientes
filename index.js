import express from 'express'
const app = express()

import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(express.static(path.join(__dirname,'public')))

app.get('/', function(req, res){
    res.sendFile(__dirname+'/src/principal.html')
})

app.listen(8000, ()=>{
    console.log('Servidor rodando em http://localhost:8000')
})

