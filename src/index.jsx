import React from 'react';

export default class Component extends React.Component {
  
  static defaultProps = {
  };

  constructor(props) {
    super(props);
    this.state = {}
  }
  
  componentDidMount() {
    Promise.resolve(true)
  }

  render() {
    return (
      <div className="trc-">Componnet Demo</div>
    )
  }

};
