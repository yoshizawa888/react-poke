import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getPokemonPager = createAsyncThunk(
	'pokemon/getPokemonPager',
	async (url: string) => {
		const response = await axios.get(url);
		console.log(response.data);
		return response.data;
	}
);

export default getPokemonPager;
