import React from 'react';

interface ComponentProps {

}

export default class VideoPlayer extends React.Component<ComponentProps, any> {
  
  static defaultProps = {
  };

  constructor(props: ComponentProps) {
    super(props);
    this.state = {}
  }
  
  render() {
    return (
      <div>Componnet Demo</div>
    )
  }

};
