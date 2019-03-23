import * as React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { TaxIdTipContent } from '../TaxIdTipContent';

describe('TaxesTipContent', () => {
  it('should render TaxesTipContent', () => {
    const component = shallow(<TaxIdTipContent/>);
    expect(shallowToJson(component)).toMatchSnapshot();
  });
});
