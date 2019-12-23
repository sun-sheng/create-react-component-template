import React from 'react';

export default class Component extends React.Component {
  
  static defaultProps = {
  };

  constructor(props) {
    super(props);
    this.state = {}
  }
  
  render() {
    return (
      <div className="trc-">Componnet Demo</div>
    )
  }

};
