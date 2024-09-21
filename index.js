//console.log("Hello World");
//const express = require ("express");
const app = express();
app.use(express.json());
app.listen(3002, () => console.log ("servidor rodando na porta 3002"));

app.get ("/exercicio1/", (req,res) => {
    const num1 = req.query.num1
    const num2 = req.query.num2

    const resultado = Number(num1) + Number(num2);

    res.json ({ message : resultado})
});
//app.listen(3000, () => console.log('servidor rodando na porta 3000'));
//res.send ('Hello World');

app.get ("/exercicio2/", (req,res) => {
    const num1 = req.query.num1
    const num2 = req.query.num2

    const resultado = Number(num1) - Number(num2);
   // const id = req.params.id; 
 //   res.send ('Hello World');
    res.json ({ message : resultado})
})

//const app = express();

// app.get("/exercicio1/", (req, res) => {
//     // http://localhost:3000/exercicio1/?num1=0&num2=3
//     const num1 = req.query.num1
//     const num2 = req.query.num2

//     const resultado = Number(num1) + Number(num2);

//     res.json({ message: resultado })
// })

app.post("/exercicio3/", (req, res) => {
    // http://localhost:3002/exercicio3
    const num1 = req.body.num1
    const num2 = req.body.num2

    const resultado = Number(num1) + Number(num2);

    res.json({ message: resultado })
})

// app.listen(3000, () => {
//   //  console.log('servidor está rodando na porta 3')
// })