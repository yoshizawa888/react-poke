import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { PokemonSingleDetail, PokemonDetailLang } from '../../utils/type';

const getPokemonLangDetail = createAsyncThunk(
	'pokemon/getPokemonLangDetail',
	async (payload: PokemonSingleDetail) => {
		const url = payload.species.url;
		if (url != '') {
			const response = await axios.get(url);
			const responseData = response.data.names.find(
				(name: PokemonDetailLang) => name.language.name === 'ja'
			).name;
			return responseData;
		}
	}
);

export default getPokemonLangDetail;
