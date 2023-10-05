import React from 'react';
import styled from 'styled-components';
import DetailImgDesc from '../organisms/DetailImgDesc';
import StatsList from '../organisms/StatsList';
import LinkButton from '../atoms/LinkButton';

const Wrap = styled.div`
	max-width: 1100px;
	padding: 30px 4% 50px;
	margin: 0 auto;
`;

const Button = styled(LinkButton)`
	margin: 50px auto 0;
`;

const DetailContents: React.FC = () => {
	return (
		<Wrap>
			<DetailImgDesc />
			<StatsList />
			<Button link='/react-poke/'>トップページへ</Button>
		</Wrap>
	);
};

export default DetailContents;
