import { createAsyncThunk } from '@reduxjs/toolkit';
import { pokemonRoute } from '../../utils/url';
import axios from 'axios';

const getPokemonSingle = createAsyncThunk(
	'pokemon/getPokemonSingle',
	async (param: string) => {
		const url = `${pokemonRoute}/${param}`;
		const response = await axios.get(url);
		return response.data;
	}
);

export default getPokemonSingle;
