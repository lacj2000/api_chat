import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';

require('dotenv').config();


function startServer({typeDefs, resolvers}){
  //start mongo conection
  const mongoURL = `${process.env.MONGO_URL}/graphql?authSource=admin`;
  mongoose.connect(mongoURL ,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const server = new ApolloServer({typeDefs, resolvers});
  server.listen().then(({url})=>console.log(`🔥 Server started at ${url}`));
}

export default startServer;