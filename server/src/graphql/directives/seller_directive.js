import { defaultFieldResolver } from "graphql";
import { ApolloError, SchemaDirectiveVisitor } from "apollo-server-express";

export class IsSellerDirectives extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    const { resolve = defaultFieldResolver } = field;

    field.resolve = async function (...args) {
      let [_, {}, { user, isAuth }] = args;
     
      if (isAuth) {
        
        if(user.role==='seller' || user.role==='admin'||user.role==='super_admin'){
            const result = await resolve.apply(this, args);

            return result;
        }
        else {
            throw new ApolloError("You are not  Seller!",401);
          }
       
      } else {
        throw new ApolloError("You are not  Seller!",401);
      }
    };
  }
}