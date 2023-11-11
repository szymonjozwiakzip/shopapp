//const mongoose = require('./mongoconnection');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Product = require("./models/product.model.ts");

require("dotenv").config();

const port = 3000;

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// app.use(bodyParser.json());

// app.get("/api/products", async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.status(200).json(products);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Internal Server Error");
//   }
// });

// app.post("/api/add-product", async (req, res) => {
//     try {
//       const newProduct = new Product(req.body);
//       const savedProduct = await newProduct.save();
//       console.log("Dodano produkt:", savedProduct);

//       // Zwracamy poprawną odpowiedź JSON
//       res.status(201).json({
//         message: "Produkt dodany pomyślnie",
//         product: savedProduct,
//       });
//     } catch (error) {
//       console.error("Błąd podczas zapisywania produktu:", error);
//       // Zwracamy błąd w formie JSON
//       res.status(500).json({
//         error: "Wystąpił błąd podczas dodawania produktu do bazy danych.",
//       });
//     }
//   });

// app.listen(port, () => {
//   console.log(`Serwer nasłuchuje na porcie ${port}`);
// });
