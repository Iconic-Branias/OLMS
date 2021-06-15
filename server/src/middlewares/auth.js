import {ApolloError} from 'apollo-server-express'
import {verify} from 'jsonwebtoken'

import {DB, JWT_SECRET} from '../config'
import { User } from '../models';

const authMiddleware = async (req,res,next)=>{
    const authHeader = req.get("Authorization");
    try {
        if(authHeader){
            let token = authHeader.split(" ")[1];
            if(!token){
                req.isAuth = false;
                next();
            }
            else{
                let decoded_token = verify(token,JWT_SECRET);
                if(decoded_token){
                    let auth_user = await User.findById(decoded_token.user._id);
                    if(auth_user){
                        req.user = auth_user;
                        req.isAuth = true;
                        next()
                    }
                    else{
                        req.isAuth = false;
                        next();
                    }
                }
                else{
                    req.isAuth =false;
                    next();
                }
            }
        }
    } catch (error) {
        throw new ApolloError(err.message,401)
    }
}

export default authMiddleware;