import React from 'react';
import styled from 'styled-components';
// import {} from 'styled-components/cssprop';

import CardText from '../atoms/CardText';
import CardImage from '../atoms/CardImage';

type Props = {
	className?: string;
	src: string;
	name: React.ReactNode;
	id: React.ReactNode;
	// name: string;
	// id: number;
	event: React.MouseEventHandler<HTMLDivElement>;
};

const CardWrap = styled.div`
	min-width: 250px;
	padding: 15px;
	text-align: center;
	border-radius: 20px;
	box-shadow: 0 0 10px #222;
	cursor: pointer;
`;
const Text = styled(CardText)`
	margin: 20px 0 0;
`;

// id, nameをchildrenにしたい
const Card: React.FC<Props> = ({ className, src, id, name, event }) => {
	return (
		<CardWrap className={className} onClick={event}>
			<CardImage src={src} />
			<Text>図鑑No.{id}</Text>
			<Text>{name}</Text>
		</CardWrap>
	);
};
// const Card: React.FC<Props> = ({ className, img, id, name, event }) => {
// 	return (
// 		<CardWrap className={className} onClick={event}>
// 			<CardImage img={img} />
// 			<Text>図鑑No.{id}</Text>
// 			<Text>{name}</Text>
// 		</CardWrap>
// 	);
// };

export default Card;
