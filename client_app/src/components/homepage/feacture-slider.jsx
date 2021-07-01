import React from 'react';
import Slider from 'react-slick';

function FeactureSlider({ data }) {
	return (
		<div>
			<div className="flex w-full justify-between items-center content-center min-h-full relative">
				<button className="bg-white -mr-2 text-gray-400 rounded-l-full px-2 py-4 focus:outline-none">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						fill="currentColor"
						class="bi bi-chevron-double-left"
						viewBox="0 0 16 16"
					>
						<path
							fill-rule="evenodd"
							d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
						/>
						<path
							fill-rule="evenodd"
							d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
						/>
					</svg>
				</button>
				<div className="w-full h-96 relative overflow-y-hidden flex justify-center items-center content-center rounded-md">
					<img
						src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
						alt="clothes"
						className="w-full h-auto shadow-md object-center object-contain"
					/>
				</div>
				<button className="bg-white rounded-r-full text-gray-400 px-2 py-4 -ml-2 focus:outline-none">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						fill="currentColor"
						class="bi bi-chevron-double-right"
						viewBox="0 0 16 16"
					>
						<path
							fill-rule="evenodd"
							d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"
						/>
						<path
							fill-rule="evenodd"
							d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"
						/>
					</svg>
				</button>
			</div>
		</div>
	);
}

export default FeactureSlider;
