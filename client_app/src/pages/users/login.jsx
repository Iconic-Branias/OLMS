import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import SuccessAlert from '../../components/alerts/SuccessAlert';
import EcSpinner from '../../components/loading/EcSpinner';
import ErrorMessage from '../../components/messages/error-message';
import AuthLayout from '../../Layouts/AuthLayout';
import {SIGNIN} from '../../query/'
function Login() {
	const [ email_address, setEmail_address ] = useState('');
	const [ password, setPassword ] = useState('');
	
	const [ show_alert, setShow_alert ] = useState(false);
	const [ error, setError ] = useState(null);
	const [ message, setMessage ] = useState('');
	const [ message_type, setMessage_type ] = useState('success');
    const [loginUser,{loading}] = useMutation(SIGNIN)
	const history = useHistory()
	
	const AllClear = ()=>{
		setMessage("")
		setError("")
		setShow_alert(false)
	}

	const Login =async () =>{
       try {
		   const {data,errors,loading} = await loginUser({
			   variables:{
				   email:email_address,
				   password:password
			   }
			  
		   })
		   if(data){
            setEmail_address('');
				setPassword('');
				setMessage('Login successfully!');
				setMessage_type('success');
				setShow_alert(true);
				setError(null)
				localStorage.setItem("token",data.loginUser.access_token)
				history.push('/')
			
		   }
		   if(errors){

		   }
		  

	   } catch (error) {
		   
		   setMessage('Something wrong!');
			setMessage_type('error');
			setShow_alert(true);
			setError(error.message);
		
			
			setEmail_address('');
			setPassword('');
	   }
	}
	return (
		loading ?
		<EcSpinner />:
		<AuthLayout title="Sign in to your account">
			<form className="mt-8 space-y-6">
				<SuccessAlert  show={show_alert} message={message} setShow={setShow_alert} type={message_type}  />
				<ErrorMessage message={error} />
				<input type="hidden" name="remember" value="true" />
				<div>
					<label for="email-address" className="sr-only">
						Email address
					</label>
					<input
						value={email_address}
						onChange={(e)=>{setEmail_address(e.target.value)}}
						onFocus={()=>{AllClear()}}
						id="email-address"
						name="email"
						type="email"
						autocomplete="email"
						required
						className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
						placeholder="Email address"
					/>
				</div>
				<div>
					<label for="password" className="sr-only">
						Password
					</label>
					<input
						value={password}
						onChange={(e)=>{setPassword(e.target.value)}}
						id="password"
						name="password"
						type="password"
						autocomplete="current-password"
						required
						className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
						placeholder="Password"
					/>
				</div>
				<div className="flex items-center justify-between">
					<div className="flex items-center">
						<input
							id="remember_me"
							name="remember_me"
							type="checkbox"
							className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
						/>
						<label for="remember_me" className="ml-2 block text-sm text-gray-900">
							Remember me
						</label>
					</div>

					<div className="text-sm">
						<a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
							Forgot your password?
						</a>
					</div>
				</div>
				<div className="text-sm">
					<Link to='/signup' className="font-medium text-indigo-600 hover:text-indigo-500">
						You doesn't have account?
					</Link>
				</div>

				<div>
					<button
						onClick={()=>{Login()}}
						type="button"
						disabled={email_address===''||password===''}
						className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					>
						<span className="absolute left-0 inset-y-0 flex items-center pl-3">
							<svg
								className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
									clip-rule="evenodd"
								/>
							</svg>
						</span>
						Sign in
					</button>
				</div>
			</form>
		</AuthLayout>
	);
}

export default Login;
