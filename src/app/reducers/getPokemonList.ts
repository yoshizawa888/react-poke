import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { pokemonRoute } from '../../utils/url';

const getPokemonList = createAsyncThunk('pokemon/getPokemonList', async () => {
	const url = pokemonRoute;
	const response = await axios.get(url);
	return response.data;
});

export default getPokemonList;
