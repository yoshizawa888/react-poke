import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { PokemonDetailLang, PokemonSingleDetail } from '../../utils/type';

const getPokemonTypeLang = createAsyncThunk(
	'pokemon/getPokemonTypeLang',
	async (payload: PokemonSingleDetail) => {
		const detailData = await Promise.all(
			payload.types.map(async (el) => {
				const response = await axios.get(el.type.url);
				const responseData = response.data.names.find(
					(name: PokemonDetailLang) => name.language.name === 'ja'
				).name;
				return responseData;
			})
		);
		return detailData;
	}
);
export default getPokemonTypeLang;
