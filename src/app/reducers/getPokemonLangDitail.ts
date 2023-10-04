import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { PokemonSingleDetail, PokemonDetailLang } from '../../utils/type';

const getPokemonLangDetail = createAsyncThunk(
	'pokemon/getPokemonLangDetail',
	async (payload: PokemonSingleDetail) => {
		const url = payload.species.url;
		console.log(url);
		const response = await axios.get(url);
		console.log(response);
		const responseData = response.data.names.find(
			(name: PokemonDetailLang) => name.language.name === 'ja'
		).name;
		console.log('名前', responseData);
		return responseData;
	}
);

export default getPokemonLangDetail;
