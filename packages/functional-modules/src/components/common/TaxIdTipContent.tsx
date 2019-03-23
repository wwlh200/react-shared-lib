import * as React from 'react';
import InfoTooltip from './InfoTooltip';

export class TaxIdTipContent extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <span>test</span>
      </React.Fragment>
    );
  }
}

export default InfoTooltip(TaxIdTipContent);
