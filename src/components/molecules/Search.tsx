import React from 'react';
import styled from 'styled-components';
import TextBox from '../atoms/TextBox';
import SearchButton from '../atoms/SearchButton';

type Props = {
	className?: string;
	inputEvent: React.ChangeEventHandler<HTMLInputElement>;
	clickEvent: React.MouseEventHandler<HTMLButtonElement>;
};

const SearchWrap = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
const Button = styled(SearchButton)`
	margin: 0 0 0 10px;
`;

const Search: React.FC<Props> = ({ className, inputEvent, clickEvent }) => {
	return (
		<SearchWrap className={className}>
			<TextBox event={inputEvent} />
			<Button event={clickEvent}>検索</Button>
		</SearchWrap>
	);
};

export default Search;
