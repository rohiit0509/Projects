import express from "express"
import { getPostLink, getVideoLink } from "../controller";

const app = express();
const PORT=8000;
app.use(express.json())

app.post('/getpost', getPostLink)
app.post('/getvideo', getVideoLink)

app.listen(PORT,()=>{
    console.log("SERVER IS RUNNING ON:* ", PORT)
})