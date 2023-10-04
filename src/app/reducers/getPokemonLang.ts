import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { PokemonDetail, PokemonDetailLang } from '../../utils/type';

const getPokemonLang = createAsyncThunk(
	'pokemon/getPokemonLang',
	async (payload: PokemonDetail[]) => {
		const detailData = await Promise.all(
			payload.map(async (pokemon) => {
				const url = pokemon.species.url;
				const response = await axios.get(url);
				const responseData = response.data.names.find(
					(name: PokemonDetailLang) => name.language.name === 'ja'
				).name;
				return responseData;
			})
		);
		console.log(detailData);
		return detailData;
	}
);

export default getPokemonLang;
