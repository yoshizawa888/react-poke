import React, { useEffect } from 'react';
import styled from 'styled-components';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectPokemon } from '../../app/slices/PokemonSlice';
import getPokemonLangDitail from '../../app/reducers/getPokemonLangDitail';
import ImgText from '../molecules/ImgText';
import HeiWei from '../molecules/HeiWei';
import Types from '../molecules/Types';

const DetailBox = styled(ImgText)`
	margin: 20px 0 0;
`;

const TypeBox = styled(Types)`
	margin-top: 25px;
`;

const HeiWeiBox = styled(HeiWei)`
	margin: 25px 0;
`;

const DetailImgDesc: React.FC = () => {
	const dispatch = useAppDispatch();
	const res = useAppSelector(selectPokemon);
	useEffect(() => {
		dispatch(getPokemonLangDitail(res.singleDetail));
	}, [dispatch, res.singleDetail]);

	return (
		<>
			{res.singleDetail.sprites && (
				<DetailBox
					src={res.singleDetail.sprites.other['official-artwork'].front_default}
				>
					{res.name}
				</DetailBox>
			)}
			<TypeBox value={res.typesArr} />
			<HeiWeiBox
				height={res.singleDetail.height / 10}
				weight={res.singleDetail.weight / 10}
			/>
		</>
	);
};

export default DetailImgDesc;
