import React from 'react';
import styled from 'styled-components';

import CardList from '../organisms/CardList';
import Search from '../organisms/SearchBox';
import PaginationBox from '../organisms/PaginationBox';

const Wrap = styled.div`
	max-width: 1100px;
	padding: 0 4% 30px;
	margin: 0 auto;
`;

const SearchBox = styled(Search)`
	margin: 0 0 20px;
`;

const Card: React.FC = () => {
	return (
		<Wrap>
			<SearchBox />
			<CardList />
			<PaginationBox />
		</Wrap>
	);
};

export default Card;
