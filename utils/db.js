const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const url =
  "mongodb+srv://testing:Aa123456!@cluster0.slm1h.azure.mongodb.net/dirmon?retryWrites=true&w=majority";

MongoClient.connect(url, (error, client) => {
  if (error) {
      console.log(error);
    return;
  }
  const db = client.db('demo');
  db.collection('cotizacion').insertOne({
    moneda: "dolar",
    precio: "38.2"

  })
  .then(res => console.log(res.ops))
  .catch(e => console.log(e))
  
});
