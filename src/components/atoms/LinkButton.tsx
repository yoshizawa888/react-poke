import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

type Props = {
	children: React.ReactNode;
	className?: string;
	link: string;
};

const Button = styled(NavLink)`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 250px;
	padding: 15px;
	font-size: 2rem;
	line-height: 1.7rem;
	border-radius: 20px;
	box-shadow: 0 0 10px #222;
	transition: all 0.3s;
	&:hover {
		color: #222;
		box-shadow: 0 3px 10px #222;
		transform: translateY(-3px);
	}
`;

const LinkButton: React.FC<Props> = ({ children, className, link }) => {
	return (
		<Button to={link} className={className}>
			{children}
		</Button>
	);
};

export default LinkButton;
