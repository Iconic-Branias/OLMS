import { gql } from 'apollo-server-express';

export default gql`
	extend type Query {
		all_orders(page: Int, limit: Int): PaginateOrder!
		get_order: Order!
		get_orders_by_seller(seller_id: ID!, page: Int, limit: Int): PaginateOrder! @isSeller
		get_orders_by_buyer(buyer_id: ID!, page: Int, limit: Int): PaginateOrder! @isBuyer
		assigned_orders(delivery_id: ID!, page: Int, limit: Int): PaginateOrder! @isDelivery
	}

	type Order {
		status: String
		product_info: [Product]
		buyer_info: User
		delivery_info: User
		seller_info: User
		createdAt: String
		updatedAt: String
		id: ID!
	}

	type PaginateOrder {
		docs: [Order!]
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

	input InputOrder {
		status: String!
		product_info: [ID!]
		buyer_info: ID!
		delivery_info: ID
		seller_info: ID!
	}

	input UpdateOrder {
		status: String!
		product_info: [ID!]
		buyer_info: ID!
		delivery_info: ID
		seller_info: ID!
		id: ID
	}

	extend type Mutation {
		add_order(InputOrder: InputOrder!): OrderMutationResponse! @isBuyer
		update_order(UpdateOrder: UpdateOrder): OrderMutationResponse! @isAuth
		delete_order(order_id: ID!): OrderMutationResponse! @isSeller
	}

	type OrderMutationResponse {
		message: String
		status: Boolean
	}
`;
