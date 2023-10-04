import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../app/hooks';
import { selectPokemon } from '../../app/slices/PokemonSlice';
import Stats from '../molecules/Stats';

const Wrap = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: flex-start;
	flex-wrap: wrap;
	gap: 20px;
`;

const StatsItem = styled(Stats)`
	width: 100%;
`;

const StatsList: React.FC = () => {
	const pokemonData = useAppSelector(selectPokemon);
	const statsList = ['HP', '攻撃', '防御', '特攻', '特防', '素早さ'];

	return (
		<Wrap>
			{pokemonData.singleDetail &&
				pokemonData.singleDetail.stats.length > 1 &&
				pokemonData.singleDetail.stats.map(
					(
						val: {
							base_stat: number;
						},
						index: number
					) => (
						<StatsItem key={statsList[index]} value={val.base_stat}>
							{`${statsList[index]} : ${val.base_stat}`}
						</StatsItem>
					)
				)}
		</Wrap>
	);
};

export default StatsList;
