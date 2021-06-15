import {gql} from 'apollo-server-express'

export default gql `
extend type Query {
    et_all_users: [User!]!
    get_user_by_id(id: ID!): User!
}
input loginUser{
    email:String!
    password:String!
}
input userInput{
    username:String!
    email:String!
    password:String!
}
input updateUser{
    username:String!
    email:String!
    password:String!
}
type User{
    id:ID !
    username:String!
    email:String!
    updatedAt:String
    createdAt:String

}
extend type Mutation {
    createUser(NewUser: userInput!): UserMessage!
    loginUser(LoginUser: loginUser!): UserMessage!
    
}
type UserMessage {
    user: User
    success: Boolean!
    id: ID!
    message: String!
    access_token: String
  }
`