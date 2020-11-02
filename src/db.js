const MongoClient = require('mongodb').MongoClient;
const populate = require('./populateDb');

const getMongoUri = () => {
  // Datele din process.env sunt cele din fișierul .env, dacă nu există, trebuie creat după modelul .env.example
  const user = encodeURIComponent(process.env.mongoUser);
  const pass = encodeURIComponent(process.env.mongoPass);
  const url = process.env.mongoUrl;
  return `mongodb+srv://${user}:${pass}@${url}/`;
};
const client = new MongoClient(getMongoUri(), { useUnifiedTopology: true });
module.exports = { client };

client
  .connect()
  .then(() => console.log('MongoDB connected'))
  .catch(error => console.error('Error on connecting to MongoDB server', error))
  .then(() => {
    const posts = client.db('app').collection('posts');
    module.exports.posts = posts;
    populate(posts);
  });
