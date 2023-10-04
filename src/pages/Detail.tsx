import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { selectPokemon } from '../app/slices/PokemonSlice';
import { pokemonRoute } from '../utils/url';
import { PokemonSingleData } from '../utils/type';
import getPokemonSingle from '../app/reducers/getPokemonSingle';
import getPokemonTypeLang from '../app/reducers/getPokemonTypeLang';
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
	}, [dispatch, pokemonData.singleDetail]);

	const [data, setData] = useState<PokemonSingleData>();
	const getData = useCallback(async () => {
		const url = `${pokemonRoute}/${params.id}`;
		const response = await axios.get(url);
		console.log(response.data);
		setData(response.data);
		return response.data;
	}, [params.id]);

	useEffect(() => {
		getData();
	}, [getData]);

	return (
		<>
			<div>
				<DetailContents />
				{data && (
					<>
						{/* <img src={data.sprites.front_default} alt='' /> */}
						<div>{data.height}</div>
						<div>{data.weight}</div>
					</>
				)}
			</div>
		</>
	);
};

export default Detail;
