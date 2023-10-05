import React from 'react';
import styled from 'styled-components';
import NomalText from '../atoms/NomalText';
import StatsRange from '../atoms/StatsRange';

type Props = {
	children: React.ReactNode;
	className?: string;
	value: number;
};

const Wrap = styled.div``;

const Text = styled(NomalText)``;

const Stats: React.FC<Props> = ({ children, className, value }) => {
	return (
		<Wrap className={className}>
			<Text>{children}</Text>
			<StatsRange value={value}></StatsRange>
		</Wrap>
	);
};

export default Stats;
