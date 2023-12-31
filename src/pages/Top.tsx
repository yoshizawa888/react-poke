import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { selectPokemon } from '../app/slices/PokemonSlice';
import getPokemonList from '../app/reducers/getPokemonList';
import getPokemonDetail from '../app/reducers/getPokemonDetail';
import getPokemonLang from '../app/reducers/getPokemonLang';
import MainContents from '../components/templates/MainContents';

const Top: React.FC = () => {
	const dispatch = useAppDispatch();
	const pokemonData = useAppSelector(selectPokemon);

	useEffect(() => {
		dispatch(getPokemonList());
	}, [dispatch]);

	useEffect(() => {
		if (pokemonData.data.results.length > 0) {
			dispatch(getPokemonDetail(pokemonData.data.results));
		}
	}, [dispatch, pokemonData.data.results]);

	useEffect(() => {
		if (pokemonData.detail.length > 0) {
			dispatch(getPokemonLang(pokemonData.detail));
		}
	}, [dispatch, pokemonData.detail]);

	return (
		<>
			{/* 
			<p>{pokemonData.status}</p>
			<p>{pokemonData.status2}</p> */}
			<MainContents />
		</>
	);
};

export default Top;
