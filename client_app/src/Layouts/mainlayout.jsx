import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';

function MainLayout({ children,userData,userRefresh }) {
	return (
		<div className="bg-gray-200">
            <Header userData={userData} userRefresh={userRefresh} />
			<main className="min-h-screen">{children}</main>
            <Footer />
		</div>
	);
}

export default MainLayout;
