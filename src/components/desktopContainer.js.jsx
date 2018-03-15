/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
 import PropTypes from 'prop-types';
 import React, { Component } from 'react';
 import HomepageHeading from './homepageHeading.js.jsx';

 import {
   Button,
   Icon,
   Menu,
   Responsive,
   Segment,
   Sidebar,
   Visibility
 } from 'semantic-ui-react';

export default class DesktopContainer extends Component {
  state = {visible: false}
  toogleVisibility = () => this.setState({ visible: !this.state.visible})
  render() {
    const { children } = this.props
    const { visible } = this.state

    return (
      <Responsive {...Responsive.onlyComputer}>

      <Visibility once={false} onBottomPassed={this.showFixedMenu} onBottomPassedReverse={this.hideFixedMenu}>
        <Segment inverted textAlign='center' style={{ minHeight: 700, padding: '1em 0em' }} vertical>
          <Button onClick={this.toggleVisibility}>Toggle Visibility</Button>
          <Sidebar.Pushable as={Segment}>
             <Sidebar as={Menu} animation='scale down' width='thin' visible={visible} icon='labeled' vertical inverted>
               <Menu.Item name='home'>
                 <Icon name='home' />
                 Home
               </Menu.Item>
               <Menu.Item name='gamepad'>
                 <Icon name='gamepad' />
                 Games
               </Menu.Item>
               <Menu.Item name='camera'>
                 <Icon name='camera' />
                 Channels
               </Menu.Item>
             </Sidebar>
           </Sidebar.Pushable>
          <HomepageHeading />
        </Segment>
      </Visibility>

        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}
