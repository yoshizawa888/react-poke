import React from 'react';
import styled from 'styled-components';

type Props = {
	event?: React.ChangeEventHandler<HTMLInputElement>;
	className?: string;
};

const Input = styled.input.attrs({
	type: 'text',
})`
	padding: 0.5em;
	font-size: 2.4rem;
	line-height: 1rem;
	border-radius: 20px;
	box-shadow: 0 0 10px #222;
`;

const TextBox: React.FC<Props> = ({ className, event }) => {
	return <Input className={className} onChange={event} />;
};

export default TextBox;
