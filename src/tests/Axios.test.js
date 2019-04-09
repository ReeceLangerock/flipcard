import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import Card from '../components/Card';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
describe('Card component testing', function() {
	const wrapper = shallow(<Card />);

	it('placeholder', function() {});
});
