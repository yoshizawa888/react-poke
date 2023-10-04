import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Search from '../molecules/Search';
import pokemonLang from '../../utils/pokemon.json';

const Wrap = styled.div`
	margin: 0 0 20px;
`;

const SearchItem = styled(Search)``;

const Error = styled.div`
	margin: 10px 0 0;
	color: red;
`;
const SearchBox: React.FC = () => {
	const [pokeName, setPokeName] = useState('');
	const navigate = useNavigate();
	const [nameChack, setNameChack] = useState(false);
	const [errorChack, setErrorChack] = useState(true);

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value;
		const foundItem = pokemonLang.find((item) => item.ja === inputValue);

		if (foundItem && foundItem.en) {
			console.log(foundItem);
			setPokeName(foundItem.en.toLowerCase());
			setNameChack(true);
			setErrorChack(true);
		} else {
			setPokeName('');
			setNameChack(false);
		}
	};
	const clickHandler = (name: string) => {
		console.log(nameChack);
		if (nameChack) {
			navigate(`/detail/${name}`);
			setErrorChack(true);
		} else {
			setErrorChack(false);
		}
	};

	return (
		<Wrap>
			<SearchItem
				inputEvent={(e: ChangeEvent<HTMLInputElement>) => changeHandler(e)}
				clickEvent={() => clickHandler(pokeName)}
			/>
			{!errorChack && <Error>存在しないポケモンです。</Error>}
		</Wrap>
	);
};

export default SearchBox;
