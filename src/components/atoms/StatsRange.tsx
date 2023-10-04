import React from 'react';
import styled from 'styled-components';

type Props = {
	className?: string;
	value: number;
};

const Input = styled.input.attrs({
	type: 'range',
	max: 200,
	min: 0,
})`
	pointer-events: none;
	width: 100%;
	position: relative;
	overflow: hidden;
	height: 40px;
	border-radius: 0;
	&::-webkit-slider-runnable-track {
		background: #ddd;
	}

	&::-webkit-slider-thumb {
		-webkit-appearance: none;
		width: 20px;
		height: 40px;
		background: #9999ff;
		box-shadow: -100vw 0 0 100vw #9999ff;
		/* border: 2px solid #999; */
	}
`;

const StatsRange: React.FC<Props> = ({ className, value }) => {
	return <Input className={className} defaultValue={value} />;
};

export default StatsRange;
