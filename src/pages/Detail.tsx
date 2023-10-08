import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { selectPokemon } from '../app/slices/PokemonSlice';
import getPokemonSingle from '../app/reducers/getPokemonSingle';
import getPokemonTypeLang from '../app/reducers/getPokemonTypeLang';
import getPokemonLangDitail from '../app/reducers/getPokemonLangDitail';
import DetailContents from '../components/templates/DetailContents';
const Detail: React.FC = () => {
	const params = useParams();
	const pokemonData = useAppSelector(selectPokemon);
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (params.id) dispatch(getPokemonSingle(params.id));
	}, [dispatch, params.id]);

	useEffect(() => {
		dispatch(getPokemonTypeLang(pokemonData.singleDetail));
		dispatch(getPokemonLangDitail(pokemonData.singleDetail));
	}, [dispatch, pokemonData.singleDetail]);

	return <DetailContents />;
};

export default Detail;
