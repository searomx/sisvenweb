'use client';
import React from 'react';
import AutoplayVideo from './AutoPlayVideo';

export default function Banner() {
	return (
		<div className="flex-1 w-full h-96 border-4 border-purple-500 justify-center px-10 py-2 mt-20 lg:max-w-7xl">
				<AutoplayVideo />
		</div>
	);
}
