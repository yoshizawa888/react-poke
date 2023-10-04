import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { PokemonData } from '../../utils/type';
import getPokemonList from '../reducers/getPokemonList';
import getPokemonDetail from '../reducers/getPokemonDetail';
import getPokemonLang from '../reducers/getPokemonLang';
import getPokemonPager from '../reducers/getPokemonPager';
import getPokemonSingle from '../reducers/getPokemonSingle';
import getPokemonTypeLang from '../reducers/getPokemonTypeLang';
import getPokemonLangDitail from '../reducers/getPokemonLangDitail';

const initialState: PokemonData = {
	data: {
		results: [],
		next: '',
		previous: '',
	},
	detail: [],
	lang: [],
	singleDetail: {
		stats: [
			{
				base_stat: 0,
			},
		],
		types: [],
		height: 0,
		weight: 0,
		species: {
			url: '',
		},
	},
	typesArr: [],
	name: '',
	status: '',
	status2: 'なし',
};

const pokemonSlice = createSlice({
	name: 'pokemon',
	initialState,
	reducers: {
		// clearDetail(state) {
		// 	state.detail = [];
		// },
	},
	extraReducers: (builder) => {
		builder
			.addCase(getPokemonList.pending, (state) => {
				state.status = 'Loading...';
			})
			// returnされた値がpayloadとして飛んでくる
			.addCase(getPokemonList.fulfilled, (state, action) => {
				state.status = '取得済';
				state.data = action.payload;
			})
			.addCase(getPokemonList.rejected, (state) => {
				state.status = 'エラー';
			});
		builder
			.addCase(getPokemonDetail.pending, (state) => {
				state.status2 = 'Loading...';
			})
			// returnされた値がpayloadとして飛んでくる
			.addCase(getPokemonDetail.fulfilled, (state, action) => {
				state.status2 = '取得済';
				state.detail = action.payload;
			})
			.addCase(getPokemonDetail.rejected, (state) => {
				state.status2 = 'エラー';
			});
		builder.addCase(getPokemonLang.fulfilled, (state, action) => {
			state.lang = action.payload;
		});
		builder.addCase(getPokemonPager.fulfilled, (state, action) => {
			state.data = action.payload;
		});
		builder.addCase(getPokemonSingle.fulfilled, (state, action) => {
			state.singleDetail = action.payload;
		});
		builder.addCase(getPokemonTypeLang.fulfilled, (state, action) => {
			state.typesArr = action.payload;
		});
		builder.addCase(getPokemonLangDitail.fulfilled, (state, action) => {
			state.name = action.payload;
		});
	},
});

// export const { clearDetail } = pokemonSlice.actions;

export const selectPokemon = (state: RootState) => state.pokemon;
// export { clearDetail };
export default pokemonSlice;
