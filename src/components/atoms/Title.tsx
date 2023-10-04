import React from 'react';
import styled from 'styled-components';

type Props = {
	children: React.ReactNode;
	className?: string;
};

const Text = styled.p`
	font-size: 3.6rem;
	line-height: 1.7rem;
`;

const CardText: React.FC<Props> = ({ children, className }) => {
	return <Text className={className}>{children}</Text>;
};

export default CardText;
