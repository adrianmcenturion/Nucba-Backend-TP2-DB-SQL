const express = require('express')
const bodyParser = require('body-parser')

const expensesRouter = require('../routes/expenses')
const categoriesRouter = require('../routes/categories')

const app = express()
app.use(bodyParser.json())

app.use('/api/expenses', expensesRouter)
app.use('/api/categories', categoriesRouter)

app.use((req, res, next) => {
  res.statusCode = 404
  res.send()
})


// app.use(express.static(PATH));

// app.get("/*", function (req, res) {
//   res.sendFile(PATH + "/index.html");
// });



const PORT = process.env.PORT || 3000
app.listen(PORT, () =>
  console.log(
    `🚀 Server ready at: http://localhost:${PORT}\n⭐️`,
  ),
)
