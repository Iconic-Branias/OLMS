import React from 'react';

function Header({ auth }) {
	return (
		<div>
			<nav className="flex w-full justify-between items-center content-center py-2 px-2 space-x-2 bg-white shadow-md">
				<img src="/logo512.png" alt="logo" className="h-12" />
				<div className="flex justify-end space-y-4 items-center content-center">
					<a href="#">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="currentColor"
							class="bi bi-person-fill"
							viewBox="0 0 16 16"
						>
							<path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
						</svg>
						<span className="sr-only">User</span>
					</a>
				</div>
			</nav>
		</div>
	);
}

export default Header;
