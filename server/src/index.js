import express from 'express';
import {ApolloServer} from 'apollo-server-express'
import cors from 'cors'
import {PORT} from './config'
import bodyParser from 'body-parser';
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers'
import * as AppModels from './models'
import { connect_DB } from './db';
const port = PORT;
const app = express();
app.use(bodyParser.json({limit:"50mb"}));

const startApp = () =>{
    connect_DB()
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context:({req})=>{
            let {isAuth,user} = req;
            return{
                req,
                user,
                isAuth,
                ...AppModels
            }
        }
    })
    server.applyMiddleware({app})
    app.listen(port,()=>{
        console.log(`Server is running at port ${port}`);
    })
}
startApp();