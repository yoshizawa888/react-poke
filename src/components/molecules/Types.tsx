import React from 'react';
import styled from 'styled-components';
import NomalText from '../atoms/NomalText';

type Props = {
	className?: string;
	value: string[];
};

const Wrap = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

const Text = styled(NomalText)`
	margin-right: 10px;
`;

const Stats: React.FC<Props> = ({ className, value }) => {
	return (
		<Wrap className={className}>
			{value.map((val) => {
				return <Text key={val}>{val}</Text>;
			})}
		</Wrap>
	);
};

export default Stats;
