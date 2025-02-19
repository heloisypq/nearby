import express from "express"

import cors from 'cors'

import { routes } from "./routes"
import { errorHandling } from "./middlewares/error-handling"

const PORT = 3333
const app = express()

app.use(express.json())

app.use(cors()) //em produção configurar a origin ({origin: 'https://dominio.com.br'})

app.use(routes)

app.use(errorHandling)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
