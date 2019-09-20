import React from 'react';
import { App } from '../../../App/App';
import '../../setupTests';

import { shallow } from 'enzyme';

test('renders without crashing', () => {
	const wrapper = shallow(<App />);
	expect(wrapper.debug()).toMatchSnapshot();
});
