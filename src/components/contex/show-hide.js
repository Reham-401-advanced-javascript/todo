import React from 'react';

export const ToggleContext = React.createContext();

class hideShowToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'show',
      toggleStatus: this.hideShowChanging,
    };
  }
  hideShowChanging = () => {
    if( this.state.status === 'show'){
      this.setState({ status:'hide'});
    }else{
      this.setState({ status:'show'});    };
  };
  render() {
    return (
      <ToggleContext.Provider value={this.state}>
        {this.props.children}
      </ToggleContext.Provider>
    );
  }
}

export default hideShowToggle;