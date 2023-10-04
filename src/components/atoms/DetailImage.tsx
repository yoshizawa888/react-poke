import React from 'react';
import styled from 'styled-components';

type Props = {
	className?: string;
	src: string;
	alt?: string;
};

const Image = styled.img<Props>`
	max-width: 100%;
	box-shadow: 0 0 10px #222;
	border-radius: 20px;
`;

const DetailImage: React.FC<Props> = ({ className, src, alt }) => {
	return <Image className={className} src={src} alt={alt} />;
};

export default DetailImage;
