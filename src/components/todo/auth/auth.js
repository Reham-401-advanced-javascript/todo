import React from 'react';
import { LoginContext } from '../../contex/auth.js';
import Show from '../show.js';
// helper component for ACL
class Auth extends React.Component {
  
  static contextType = LoginContext;
  render() {
    let okToRender = false;
    try {
      okToRender =
        this.context.loggedIn && this.props.capability
          ? this.context.user.capabilities.includes(this.props.capability)
          : false;
    } catch (e) {
      console.log('NOT AUTHORIZED', e.message);
    }
    return <Show condition={okToRender}>{this.props.children}</Show>;
  }
}
export default Auth;