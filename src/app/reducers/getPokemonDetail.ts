import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { PokemonDataList } from '../../utils/type';

const getPokemonDetail = createAsyncThunk(
	'pokemon/getPokemonDetail',
	async (payload: PokemonDataList[]) => {
		const detailData = await Promise.all(
			payload.map(async (pokemon) => {
				const url = pokemon.url;
				const response = await axios.get(url);
				return response.data;
			})
		);
		return detailData;
	}
);

export default getPokemonDetail;
