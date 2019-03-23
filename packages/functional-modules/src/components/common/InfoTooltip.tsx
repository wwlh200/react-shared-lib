import * as React from 'react';

interface IPosition {
  position: string;
}

// tslint:disable-next-line:no-any
const InfoTooltip = (WrapComponent: any) =>
 class extends React.Component<IPosition> {
   constructor(props: IPosition) {
     super(props);
   }
   render() {
     return (
      <div className="info-tip">
          <WrapComponent />
      </div >
     );
   }
 };

export default InfoTooltip;
