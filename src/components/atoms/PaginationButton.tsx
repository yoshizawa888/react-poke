import React from 'react';
import styled from 'styled-components';

type Props = {
	children: React.ReactNode;
	event?: React.MouseEventHandler<HTMLButtonElement>;
	className?: string;
};

const Button = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 60px;
	height: 60px;
	border-radius: 50%;
	font-size: 3rem;
	background: linear-gradient(red 0% 50%, white 50% 100%);
	border: solid 2px #333;
	cursor: pointer;
`;

const PaginationButton: React.FC<Props> = ({ children, className, event }) => {
	return (
		<Button className={className} onClick={event}>
			{children}
		</Button>
	);
};

export default PaginationButton;
