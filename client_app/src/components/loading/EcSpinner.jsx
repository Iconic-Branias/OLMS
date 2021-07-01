import React from 'react';

function EcSpinner() {
	return (
		<div className="flex min-h-screen justify-center items-center content-center inset-0">
			<div className="animate-spin text-green-600">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width={50}
					height={50}
					fill="currentColor"
					class="bi bi-stop-circle"
					viewBox="0 0 16 16"
				>
					<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
					<path d="M5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3z" />
				</svg>
			</div>
		</div>
	);
}

export default EcSpinner;
