import React from 'react';

function ErrorMessage({ message }) {
	return (
		message?
        <ul className="list-disc bg-red-200 rounded-md px-4 py-2 text-xs">
			<li  className="ml-6 text-red-700 mb-2">{message} </li>
			
		</ul>:null
	);
}

export default ErrorMessage;
