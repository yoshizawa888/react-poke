import React from 'react';
import styled from 'styled-components';
import PagenationButton from '../atoms/PaginationButton';

type Props = {
	className?: string;
	disp: boolean;
	prevEvent: React.MouseEventHandler<HTMLButtonElement>;
	nextEvent: React.MouseEventHandler<HTMLButtonElement>;
};

const Wrap = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
const buttonStyle = styled(PagenationButton)`
	margin: 0 25px;
`;

const Prev = buttonStyle;
const Next = buttonStyle;

const Pagenation: React.FC<Props> = ({
	className,
	disp,
	prevEvent,
	nextEvent,
}) => {
	return (
		<Wrap className={className}>
			{disp && <Prev event={prevEvent}>←</Prev>}
			<Next event={nextEvent}>→</Next>
		</Wrap>
	);
};

export default Pagenation;
