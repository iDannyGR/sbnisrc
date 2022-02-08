const express = require('express')
const routerApi = require('./routes')
const port = process.env.PORT || '3000'
const app = express()

app.use(express.json())
routerApi(app)

app.get('/', (req, res)=>{
  res.send('pagina principal');
});

app.listen(port, ()=>{
  console.log('aplicacion corriendo')
})
