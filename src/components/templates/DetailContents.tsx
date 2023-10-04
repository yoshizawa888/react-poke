import React from 'react';
import styled from 'styled-components';

import DetailImgDesc from '../organisms/DetailImgDesc';
import StatsList from '../organisms/StatsList';
import TypesBox from '../organisms/TypesBox';

const Wrap = styled.div`
	max-width: 1100px;
	padding: 0 4% 30px;
	margin: 0 auto;
`;

// const SearchBox = styled(Search)`
// 	margin: 0 0 20px;
// `;

const DetailContents: React.FC = () => {
	return (
		<Wrap>
			<DetailImgDesc />
			<TypesBox />
			<StatsList />
		</Wrap>
	);
};

export default DetailContents;
