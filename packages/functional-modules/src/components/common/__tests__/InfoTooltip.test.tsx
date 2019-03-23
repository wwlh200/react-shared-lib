import * as React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import InfoTooltip from '../InfoTooltip';
import TaxIdTipContent from '../TaxIdTipContent';

describe('InfoTooltip', () => {
  it('should render InfoTooltip', () => {
    const WrapComponent = InfoTooltip(TaxIdTipContent);
    const component = shallow(<WrapComponent position="a"/>);
    expect(shallowToJson(component)).toMatchSnapshot();
  });
});
