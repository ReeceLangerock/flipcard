import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Loading = () => {
	return <Container>Loading...</Container>;
};

Loading.propTypes = {};

export default Loading;

const Container = styled.div`
	background: #d9edfe;
	padding: 10px;
	border: 2px solid #33a1fd;
	color: #2176ff;
	border-radius: 5px;
	margin: 20px auto;
	width: 80%;
	min-height: 200px;
	font-size: 48px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

Container.displayName = 'LoadingMessage';
