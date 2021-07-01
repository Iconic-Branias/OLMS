import { gql } from '@apollo/client';

export const AUTH_PROFILE = gql`
	query AUTH_PROFILE {
		auth_Profile {
			username
			id
			email
			updatedAt
			createdAt
			role
		}
	}
`;

export const SIGNUP = gql `
mutation SIGNUP($username: String!, $email: String!, $password: String!) {
	createUser(NewUser: { email: $email, username: $username, password: $password }) {
		user {
			id
			email
			username
			updatedAt
			createdAt
			role
		}
		message
		success
		access_token
	}
}
`
export const SIGNIN = gql `

mutation SIGNIN($email: String!, $password: String!) {
	loginUser(LoginUser: { email: $email, password: $password }) {
		user {
			id
			email
			username
			updatedAt
			createdAt
			role
		}
		message
		success
		access_token
	}
}
`
