import React from 'react';

function SuccessAlert({ show, setShow, message, type }) {
	return show ? (
		<div
			className={
				(type === 'success'
					? 'w-full flex  px-2 py-2 justify-between items-center content-center rounded-md  text-white bg-green-200'
					: 'w-full flex  px-2 py-2 justify-between items-center content-center rounded-md  text-white bg-red-200')
			}
		>
			<div className="">
				{
					(type === 'success' ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height={24}
							width={24}
							fill="currentColor"
							class="bi bi-check2-circle"
							viewBox="0 0 16 16"
						>
							<path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
							<path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height={24}
							width={24}
							fill="currentColor"
							class="bi bi-exclamation-lg"
							viewBox="0 0 16 16"
						>
							<path d="M6.002 14a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm.195-12.01a1.81 1.81 0 1 1 3.602 0l-.701 7.015a1.105 1.105 0 0 1-2.2 0l-.7-7.015z" />
						</svg>
					))
				}
			</div>
			<p className="leading-normal font-light md:text-sm text-xs">{message} </p>
			<button
				type="button"
				className="rounded-md focus:outline-none"
				onClick={() => {
					setShow(!show);
				}}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height={24}
					width={24}
					fill="currentColor"
					class="bi bi-x-circle"
					viewBox="0 0 16 16"
				>
					<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
					<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
				</svg>
			</button>
		</div>
	) : null;
}

export default SuccessAlert;
