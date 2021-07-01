import { useQuery } from '@apollo/client';
import React from 'react';
import FeactureSlider from '../components/homepage/feacture-slider';
import MainLayout from '../Layouts/mainlayout';
import { AUTH_PROFILE } from '../query';

function Home() {
	const { loading: userLoading, data: userData, error: userError,refetch:userRefresh } = useQuery(AUTH_PROFILE);
	return (
		<MainLayout userData={userData} userRefresh={userRefresh} >
			<div className='bg-gray-200'>
					{/* Feacture coursel */}
				    <FeactureSlider />
					{/* end of Feacture coursel */}
			</div>
		</MainLayout>
	);
}

export default Home;
