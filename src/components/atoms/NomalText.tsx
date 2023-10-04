import React from 'react';
import styled from 'styled-components';

type Props = {
	children: React.ReactNode;
	className?: string;
};

const Text = styled.p`
	font-size: 1.6rem;
	line-height: 1.7em;
`;

const NomalText: React.FC<Props> = ({ children, className }) => {
	return <Text className={className}>{children}</Text>;
};

export default NomalText;
