import React from 'react';

interface RootStates {

};

export default class RootComponent extends React.Component<{}, RootStates> {
  constructor(props: {}) {
    super(props);
  }
  render() {
    return (
      <div>
        It works!
      </div>
    )
  }
}
