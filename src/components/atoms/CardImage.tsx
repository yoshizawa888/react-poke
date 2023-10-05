import React from 'react';
// import styled, { StyleSheetManager, css } from 'styled-components';
import styled, { css } from 'styled-components';

type Props = {
	className?: string;
	src: string;
};

const Image = styled.div<Props>`
	height: 26vw;
	max-height: 300px;
	background-size: contain;
	${(props) =>
		props.src &&
		css`
			background: url(${props.src}) center center no-repeat;
			background-size: contain;
		`};
`;

const CardImage: React.FC<Props> = ({ className, src }) => {
	return (
		// <StyleSheetManager shouldForwardProp={(prop) => prop !== 'src'}>
		<Image className={className} src={src} />
		// </StyleSheetManager>
	);
};

export default CardImage;
