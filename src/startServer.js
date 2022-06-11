import { ApolloServer } from 'apollo-server';
// import mongoose from 'mongoose';

require('dotenv').config();


function startServer({typeDefs, resolvers}){
  //start mongo conection
  console.log(process.env.MONGO_URL)
  // mongoose.connect('mongodb://docker:mongopw@localhost:49153/graphql?authSource=admin',{
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  // });

  const server = new ApolloServer({typeDefs, resolvers});
  server.listen().then(({url})=>console.log(`🔥 Server started at ${url}`));
}

export default startServer;