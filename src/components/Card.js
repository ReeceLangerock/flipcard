import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Front from './Front';
import Back from './Back';
function Card(props) {
	return (
		<CardContainer>
			<Front />
			<Back />
		</CardContainer>
	);
}

Card.propTypes = {};

export default Card;

const CardContainer = styled.div`
	background: #d9edfe;
	padding: 10px;
	border: 2px solid #33a1fd;
	color: #2176ff;
	border-radius: 5px;
	margin: 20px auto;
	width: 80%;
	min-height: 200px;
`;

CardContainer.displayName = 'CardContainer';
