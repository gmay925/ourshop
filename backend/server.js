import express from 'express';
import data from './data.js';
//import bcrypt, { hash } from 'bcrypt';
//import res from 'express/lib/response';
const app = express();

app.use(express.json());
// const users = []

// app.get('/users', (req, res) => {
//   res.json(users)
// })

// app.post('/users', async (req, res) => {
//   try {
//     const hashedPassword = await bcrypt.hash(req.body.password, 10)
//     const user = { name: req.body.name, password: hashedPassword }
//   users.push(user)
//   res.status(201).send()
//   } catch {
//     res.status(500).send()
//   }
// })
// app.post('/users/login', async (req, res) => {
//   const user = users.find(user => user.name = req.body.name)
//   if (user == null) {
//     return res.status(400).send('Cannot find user')
//   }
//   try {
//     if(await bcrypt.compare(res.body.password, user.password) {
//       res.send('Success')
//     } else {
//       res.send('Not Allowed')
//     }

// } catch {
//     res.status(500).send()

//   }
// })

app.get('/api/products', (req, res) => {
  res.send(data.products);
});
app.get('/api/products/slug/:slug', (req, res) => {
  const product = data.products.find((x) => x.slug === req.params.slug);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product not found' });
  }
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
