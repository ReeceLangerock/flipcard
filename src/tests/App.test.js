import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow, mount } from 'enzyme';
import { expect } from 'chai';
import App from '../App';
import Card from './../components/Card';
import Loading from './../components/Loading';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
describe('App component testing', function() {
	const wrapper = shallow(<App />);
	const intro = wrapper.find('Intro');

	it('has initial state', function() {
		expect(wrapper.state().users).to.have.lengthOf(0);
	});
	it('contains an intro', function() {
		expect(intro).to.have.lengthOf(1);
	});
	it('intro has h1 and correct text ', function() {
		expect(intro.find('h1')).to.have.lengthOf(1);
		expect(intro.find('h1').text()).to.equal('FlipCard');
	});
	it('contains one card container', function() {
		expect(wrapper.find('CardContainer')).to.have.lengthOf(1);
	});
	it('initially displays a loading message', function() {
		const cardContainer = wrapper.find('CardContainer');
		expect(cardContainer.contains(<Loading />)).to.equal(true);
	});

	it('card container contains one or more cards', function() {
		const cardContainer = wrapper.find('CardContainer');
		expect(cardContainer.contains(<Card />)).to.equal(true);
	});
});
