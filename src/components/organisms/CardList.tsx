import React from 'react';
import styled, { StyleSheetManager } from 'styled-components';

import { useNavigate } from 'react-router-dom';

import { useAppSelector } from '../../app/hooks';
import { selectPokemon } from '../../app/slices/PokemonSlice';

import { PokemonDetail } from '../../utils/type';
import isPropValid from '@emotion/is-prop-valid';
import Card from '../molecules/Card';

const Wrap = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: flex-start;
	flex-wrap: wrap;
	gap: 30px;
`;

const CardItem = styled(Card)`
	width: 30%;
	/* margin-bottom: 1.5%; */
	/* &:nth-child(3n - 1) {
		margin-left: 1.5%;
		margin-right: 1.5%;
	} */
`;

const CardList: React.FC = () => {
	const pokemonData = useAppSelector(selectPokemon);
	console.log(pokemonData);
	const navigate = useNavigate();
	const clickHandler = (id: number) => {
		navigate(`/detail/${id}`);
	};

	return (
		// 警告が出るから追加した気がする（要検証）
		// <StyleSheetManager
		// 	enableVendorPrefixes
		// 	shouldForwardProp={(propName, elementToBeRendered) => {
		// 		return typeof elementToBeRendered === 'string'
		// 			? isPropValid(propName)
		// 			: true;
		// 	}}
		// 	// {...props}
		// >
		<Wrap>
			{pokemonData.detail.map((detail: PokemonDetail, index: number) => (
				<CardItem
					key={detail.name}
					id={detail.id}
					name={pokemonData.lang[index]}
					src={detail.sprites.other['official-artwork'].front_default}
					event={() => clickHandler(detail.id)}
				/>
				// <CardItem
				// 	key={detail.name}
				// 	id={detail.id}
				// 	name={pokemonData.lang[index]}
				// 	img={detail.sprites.other['official-artwork'].front_default}
				// 	event={() => clickHandler(detail.id)}
				// />
			))}
		</Wrap>
		// {/* </StyleSheetManager> */}
	);
};

export default CardList;
