const express = require('express')
require('./mongoose')
const User = require('./models/user')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
//save user
app.post('/users', (req, res) => {
    const user = new User(req.body)

    user.save().then(() => {
        res.send(user)
    }).catch((e) => {
        res.status(400).send(e)
    })
});
//save cash change
app.get("/api/user/q", (req, res) => {
    const cash = new cash(req.query)
    cash.save().then(() => {
    res.send(cash)
  }) .catch ((e) =>{
    res.status(400).send(e)
  })
});
//find user
app.get("/api/user/:id",(req, res) => {
  const { id } = req.params;
  
    const findUser = new findUser(id)
    findUser.save().then(() => {
    res.send(findUser)
  }) .catch ((e) =>{
    res.status(400).send(e)
  })
});
//operations table
app.put("/api/users/operation/:idFrom/:idTo",  (req, res) => {
  const { idFrom, idTo } = req.params;
  const { amount } = req.body;

  
    const operation = (idFrom, idTo, amount);
    operation.save().then(() => {
    res.send(operation);
  }) .catch ((e) =>{
    res.status(400).send(e);
  })
});


//create message = listening to port
app.listen(port, () => {
    console.log('up')
})