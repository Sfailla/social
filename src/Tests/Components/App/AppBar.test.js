import React from 'react';
import '../../setupTests';

import { AppBar } from '../../../App/AppBar';
import { shallow } from 'enzyme';

test('should render <AppBar /> component', () => {
	const wrapper = shallow(<AppBar />);
	expect(wrapper.debug()).toMatchSnapshot();
});
