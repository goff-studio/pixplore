import * as React from 'react';
import Svg, { Defs, LinearGradient, Path, Stop } from 'react-native-svg';

function Magnifier({ width, height, ...props }) {
	return (
		<Svg
			width={width}
			height={height}
			viewBox="0 0 139 136"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}>
			<Path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M68.359 66.737C56.222 78.87 37.433 80.24 23.792 70.872a36.801 36.801 0 01-4.95-4.135 33.333 33.333 0 01-2.255-2.476 33.642 33.642 0 01-3.67-5.458 33.447 33.447 0 01-3.67-10.124C7.106 37.65 10.31 25.78 18.843 17.252c8.553-8.555 20.425-11.738 31.455-9.616 3.515.685 6.92 1.9 10.126 3.67a35.188 35.188 0 015.439 3.691c.86.705 1.68 1.458 2.474 2.255A34.855 34.855 0 0172.47 22.2c9.373 13.636 8.001 32.424-4.112 44.536"
				fill="#fff"
				fillOpacity={0.1}
			/>
			<Path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M64.962 64.347c-12.626 12.629-33.089 12.626-45.718 0-12.612-12.613-12.612-33.077.017-45.704 12.612-12.613 33.075-12.613 45.687 0 12.627 12.627 12.627 33.091.014 45.704zm6.48-52.191c-16.207-16.208-42.47-16.208-58.678 0C-3.44 28.36-3.455 54.64 12.75 70.847c14.75 14.746 37.87 16.076 54.132 3.968a42.132 42.132 0 004.577-3.968 41.88 41.88 0 003.966-4.577c12.107-16.264 10.766-39.367-3.983-54.115z"
				fill="#E0E2EE"
			/>
			<Path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M135.226 131.942l-.681.68c-4.501 4.504-11.873 4.504-16.377 0L76.603 91.057 93.661 74l41.565 41.565c4.503 4.504 4.503 11.873 0 16.377"
				fill="url(#paint0_linear_86_9596)"
			/>
			<Path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M76.32 65l12.284 12.283L79.883 86l-12.28-12.283a43.232 43.232 0 004.67-4.049A42.472 42.472 0 0076.32 65"
				fill="#E0E2EE"
			/>
			<Path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M134.604 115.054L117.655 132l-3.051-3.054L131.55 112l3.054 3.054z"
				fill="#EA6C00"
			/>
			<Path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M94.603 74.587L77.191 92l-2.588-2.587L92.016 72l2.587 2.587z"
				fill="url(#paint1_linear_86_9596)"
			/>
			<Path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M56.603 14.299L13.9 57a30.006 30.006 0 01-3.296-9.102L47.5 11c3.16.618 6.22 1.709 9.102 3.299M70.603 24.448L24.436 68a34.314 34.314 0 01-4.694-3.698 30.515 30.515 0 01-2.139-2.215L64.334 18a31.086 31.086 0 012.348 2.02 31.84 31.84 0 013.922 4.428"
				fill="#fff"
				fillOpacity={0.5}
			/>
			<Defs>
				<LinearGradient
					id="paint0_linear_86_9596"
					x1={107.604}
					y1={43}
					x2={45.6035}
					y2={105}
					gradientUnits="userSpaceOnUse">
					<Stop stopColor="#EA6C00" />
					<Stop offset={1} stopColor="#FF9132" />
				</LinearGradient>
				<LinearGradient
					id="paint1_linear_86_9596"
					x1={84.6035}
					y1={62}
					x2={64.6035}
					y2={82}
					gradientUnits="userSpaceOnUse">
					<Stop stopColor="#EA6C00" />
					<Stop offset={1} stopColor="#FF62A5" />
				</LinearGradient>
			</Defs>
		</Svg>
	);
}

export default Magnifier;
