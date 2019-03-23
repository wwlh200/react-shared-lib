import * as React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Module from '../module';

describe('Module', () => {
  it('should render Module', () => {
    const component = shallow(<Module/>);
    expect(shallowToJson(component)).toMatchSnapshot();
  });
});
