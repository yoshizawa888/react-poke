import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectPokemon } from '../../app/slices/PokemonSlice';
import getPokemonPager from '../../app/reducers/getPokemonPager';
import Pagination from '../molecules/Pagination';

const PaginationBox = styled(Pagination)`
	margin: 20px 0 0;
`;

const SearchBox: React.FC = () => {
	const res = useAppSelector(selectPokemon);
	const dispatch = useAppDispatch();
	const [buttonDisp, setButtonDisp] = useState(false);

	useEffect(() => {
		res.data.previous ? setButtonDisp(true) : setButtonDisp(false);
	}, [res.data]);

	const prev = () => {
		dispatch(getPokemonPager(res.data.previous));
	};
	const next = () => {
		dispatch(getPokemonPager(res.data.next));
		console.log(res.data.next);
	};

	return (
		<PaginationBox
			disp={buttonDisp}
			prevEvent={() => prev()}
			nextEvent={() => next()}
		/>
	);
};

export default SearchBox;
