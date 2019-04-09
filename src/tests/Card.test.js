import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import Card from '../components/Card';
import Front from '../components/Front';
import Back from '../components/Back';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
describe('Card component testing', function() {
	const wrapper = shallow(<Card />);
	it('renders a CardContainer', function() {
		expect(wrapper.find('CardContainer')).to.have.lengthOf(1);
	});
	it('has 1 front side', function() {
		expect(wrapper.contains(<Front />)).to.equal(true);
		expect(wrapper.find(Front)).to.have.lengthOf(1);
	});
	it('has 1 back side', function() {
		expect(wrapper.contains(<Back />)).to.equal(true);
		expect(wrapper.find(Back)).to.have.lengthOf(1);
	});
});
