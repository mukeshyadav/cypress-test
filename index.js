const express = require('express')
const path = require('path')
const app = new express()

const PORT = 3000

// adding delay to

// app.use((req, res, next) => {
//   setTimeout(next, 3000)
// })
// serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

// serve login page
app.post('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'logged-in.html'))
})

// serve signout page
app.post('/logout', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'sign-out.html'))
})

app.listen(PORT, () => console.log(`Server started on ${PORT}`))
