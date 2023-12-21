import express from 'express';
import bodyParser  from 'body-parser'
const PORT = 3000;
const app = express();
import router  from './src/router/index';


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use("/",router)

app.listen(PORT,()=>{
    console.log(`listening on ${PORT}`);
});