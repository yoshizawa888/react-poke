import React from 'react';
import styled from 'styled-components';
import NomalText from '../atoms/NomalText';

type Props = {
	className?: string;
	height: React.ReactNode;
	weight: React.ReactNode;
};

const Wrap = styled.div``;

const HeiWei: React.FC<Props> = ({ className, height, weight }) => {
	return (
		<Wrap className={className}>
			<NomalText>高さ：{height} m</NomalText>
			<NomalText>重さ：{weight} kg</NomalText>
		</Wrap>
	);
};

export default HeiWei;
