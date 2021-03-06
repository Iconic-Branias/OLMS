import { gql } from 'apollo-server-express';

export default gql`
	extend type Query {
		get_all_users(page: Int, limit: Int): paginateResponse! @isSuperAdmin
		auth_Profile: User! @isAuth
	}

	type paginateResponse {
		docs: [User]
		totalDocs: Int
		limit: Int
		totalPages: Int
		page: Int
		pagingCounter: Int
		hasPrevPage: Boolean
		hasNextPage: Boolean
		prevPage: String
		nextPage: String
	}

	input loginUser {
		email: String!
		password: String!
	}

	input userInput {
		username: String!
		email: String!
		password: String!
	}

	input updateUser {
		username: String!
		email: String!
		password: String!
	}

	type User {
		id: ID!
		username: String!
		email: String!
		updatedAt: String
		createdAt: String
		role: String
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
`;
