import React from 'react';
import styled from 'styled-components';

type Props = {
	children: React.ReactNode;
	className?: string;
	event?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = styled.button`
	font-size: 1.6rem;
	line-height: 1.7rem;
`;

const SearchButton: React.FC<Props> = ({ children, className, event }) => {
	return (
		<Button className={className} onClick={event}>
			{children}
		</Button>
	);
};

export default SearchButton;
