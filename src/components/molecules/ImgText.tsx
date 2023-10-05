import React from 'react';
import styled from 'styled-components';
import DetailImage from '../atoms/DetailImage';
import LargeText from '../atoms/LargeText';

type Props = {
	className?: string;
	src: string;
	alt?: string;
	children: React.ReactNode;
};

const Wrap = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: column;
`;

const Text = styled(LargeText)`
	margin-top: 25px;
`;

const Status: React.FC<Props> = ({ className, children, src, alt }) => {
	return (
		<Wrap className={className}>
			<DetailImage src={src} alt={alt} />
			<Text>{children}</Text>
		</Wrap>
	);
};

export default Status;
