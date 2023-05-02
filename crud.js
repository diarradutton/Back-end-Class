const express = require('express')
const app = express()
const port = 3000
const myPhone = [ {
  id: 1,
  make: "iPhone",
  color: "space grey", 
  lenses: 3,
  speakers: 2,
},
]

app.get('/phone/:id?', (req, res) => {
  const myPhoneId = Number(req.params.id)
  
  const phone = myPhone.find(phone => phone.id === phoneId)
  
  if (phoneId && !phone) {
    return res.send('Phone not found')
  } else if (phone) {
    return res.send(phone)
  }

  return res.send(myPhones)
})

app.delete('/phone/:id', (req, res) => {
  return res.send(myPhone)
})

app.post('/phone', (req, res) => {
  return res.send("POST Create a space grey iPhone")
})

app.put('/phone', (req, res) => {
  return res.send("PUT 3 lenses")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});




// GET an iPhone
// Request --> GET/iPhone



// POST Create a space grey iPhone
// Request --> POST/iPhone

// DELETE all of the iPhone
// Request --> DELETE /iPhone

//Request --> PUT iPhone back
