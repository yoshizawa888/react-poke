import React from 'react';
import styled from 'styled-components';
import CardList from '../organisms/CardList';
import SearchBox from '../organisms/SearchBox';
import PaginationBox from '../organisms/PaginationBox';

const Wrap = styled.div`
	max-width: 1100px;
	padding: 30px 4% 50px;
	margin: 0 auto;
`;

const Search = styled(SearchBox)`
	margin-bottom: 50px;
`;

const Card: React.FC = () => {
	return (
		<Wrap>
			<Search />
			<CardList />
			<PaginationBox />
		</Wrap>
	);
};

export default Card;
