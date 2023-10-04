import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../app/hooks';
import { selectPokemon } from '../../app/slices/PokemonSlice';
import Types from '../molecules/Types';

const Wrap = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: flex-start;
	flex-wrap: wrap;
	gap: 20px;
`;

const StatsList: React.FC = () => {
	const pokemonData = useAppSelector(selectPokemon);

	return (
		<Wrap>
			<Types value={pokemonData.typesArr} />
		</Wrap>
	);
};

export default StatsList;
