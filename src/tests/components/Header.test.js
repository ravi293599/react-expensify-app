import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
//import ShallowRenderer from 'react-test-renderer/shallow';
import Header from '../../components/Header';

test('should render Header correctly', () => {
	const wrapper = shallow(<Header />);
	expect(toJSON(wrapper)).toMatchSnapshot();
/*	const renderer = new ShallowRenderer();
	renderer.render(<Header />);
	expect(renderer.getRenderOutput()).toMatchSnapshot();*/
});