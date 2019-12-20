import React from 'react';

export interface ComponentProps {

}

export default class Component extends React.Component<ComponentProps, any> {
  
  static defaultProps = {
  };

  constructor(props: ComponentProps) {
    super(props);
    this.state = {}
  }
  
  render() {
    return (
      <div className="trc-">Componnet Demo</div>
    )
  }

};
