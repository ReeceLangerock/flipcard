import React, { Component } from 'react';
import Card from './components/Card';
import styled from 'styled-components';
import axios from 'axios';
import Loading from './components/Loading';
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: []
		};
	}
	componentDidMount() {
		axios.get(`https://randomuser.me/api/?results=5`).then(res => {
			const users = res.data.results;
			this.setState({ users });
			console.log(users);
		});
	}

	renderCards() {
		const { users } = this.state;
		if (!users.length) {
			return <Loading>Loading</Loading>;
		} else {
			return this.state.users.map(user => {
				return <Card key={user} />;
			});
		}
	}
	render() {
		return (
			<CardContainer className="App">
				<Intro>
					<h1>FlipCard</h1>
				</Intro>
				{this.renderCards()}
			</CardContainer>
		);
	}
}

export default App;

const CardContainer = styled.div`
	margin: 0 auto;
	max-width: 1000px;
	background: #1b2021;
	padding: 10px;
	min-height: 100vh;
`;

const Intro = styled.div`
	text-align: center;
	color: #2176ff;
	font-size: 20px;
`;

CardContainer.displayName = 'CardContainer';
Intro.displayName = 'Intro';
