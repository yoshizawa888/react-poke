import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import pokemonSlice from '../app/slices/PokemonSlice';

const store = configureStore({
	reducer: {
		pokemon: pokemonSlice.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
export default store;
