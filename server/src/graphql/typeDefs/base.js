import {gql} from 'apollo-server-express'
export default gql `
directive @isAuth on FIELD_DEFINITION
directive @isSuperAdmin on FIELD_DEFINITION
directive @isSeller on FIELD_DEFINITION
directive @isBuyer on FIELD_DEFINITION
directive @isDelivery on FIELD_DEFINITION
type Query{
    _:String!
}
type Mutation{
    _:String!
}
type Subscription{
    _:String!
}
`