import { ApolloError } from 'apollo-server-express';

export default {
	Query: {
		get_all_products: async (_, args, { Product }, info) => {
			try {
				const query = Product.find({}).populate([ 'seller_id', 'category_id' ]);
				const products = await Product.paginate(query, { limit: args.limit, page: args.page });
				return products;
			} catch (error) {
				throw new ApolloError(error.message);
			}
		},
		get_product_by_id: async (_, _args, { Product }, info) => {
			try {
				const product = await Product.findById(_args.id);
				if (product) {
					return product;
				} else {
					throw new ApolloError('Product not found', 404);
				}
			} catch (error) {
				throw new ApolloError(error.message, 500);
			}
		}
	},
	Mutation: {
		add_product: async (_, _args, { Product }, info) => {
			try {
				const product = new Product(_args.InputProduct);
				const result = await product.save();
				if (result) {
					return {
						message: 'Product created successfully',
						status: true
					};
				} else {
					return {
						message: 'Product created fail',
						status: false
					};
				}
			} catch (error) {
				throw new ApolloError(error.message, 500);
			}
		},
		update_product: async (_, _args, { Product }, info) => {
			try {
				const product = await Product.findOneAndUpdate(_args.UpdateProduct.id, _args.UpdateProduct);
				const { UpdateProduct } = _args;
				if (product) {
					
					product.p_name = UpdateProduct.p_name;
					product.category_id = UpdateProduct.category_id;
					product.seller_id = UpdateProduct.seller_id;
					product.description = UpdateProduct.description;
					product.p_img = UpdateProduct.p_img;
					product.price_info = { price: UpdateProduct.price, discount: UpdateProduct.discount };

					product.product_info = {
						weight: UpdateProduct.weight,
						height: UpdateProduct.height,
						width: UpdateProduct.width
					};

					const result = await product.save();
					if (result) {
						return {
							message: 'Product updated successfully',
							status: true
						};
					} else {
						return {
							message: 'Product updated fail',
							status: false
						};
					}
				} else {
					return {
						message: 'Product not found',
						status: false
					};
				}
			} catch (error) {
				throw new ApolloError(error.message, 500);
			}
		},
		delete_product: async (_, _args, { Product }, info) => {
            try {
                const result = await Product.findByIdAndDelete(_args.id)
                if(result){
                    return {
                        message:'Product deleted successfully',
                        status:true
                    }
                }
                else{
                    return {
                        message:'Product deleted fail!',
                        status:false
                    }
                }
            } catch (error) {
                throw new ApolloError(error.message,500)
            }
        }
	}
};
