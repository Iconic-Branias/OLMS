import mongoose from 'mongoose'
import {DB} from '../config'

export const connect_DB = ()=>{
    try {
        mongoose.connect(DB,{
            useCreateIndex:true,
            useFindAndModify:true,
            useNewUrlParser:true,
            useUnifiedTopology:true,

        })
        .then(()=>{
            console.log(`DB connected successfully!`)
        })
    } catch (error) {
        console.log(error.message)
    }
}