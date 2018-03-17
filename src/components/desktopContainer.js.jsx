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
   Visibility,
   Container,
   Sticky
 } from 'semantic-ui-react';

export default class DesktopContainer extends Component {
  state = { sidebarOpened: false}

  handlePusherClick = () => {
    const { sidebarOpened } = this.state

    if (sidebarOpened) this.setState({ sidebarOpened: false })
  }
  handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })
  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })
  handleContextRef = contextRef => this.setState({ contextRef })

  render() {
    const { children } = this.props
    const { fixed, sidebarOpened, contextRef } = this.state

    return (
      <Responsive {...Responsive.onlyComputer}>
        <div ref={this.handleContextRef}>
          <Sidebar.Pushable as={Segment}>
            <Sidebar as={Menu} animation='uncover' width='thin' visible={sidebarOpened} icon='labeled' vertical inverted>
              <Visibility once={false}>
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
              </Visibility>
            </Sidebar>

              <Sidebar.Pusher onClick={this.handlePusherClick} style={{ minHeight: '100vh' }}>
                <Segment inverted textAlign='center' style={{ minHeight: 700, padding: '1em 0em' }} vertical>
                  <Sticky context={contextRef} pushing>
                  <Container>
                    <Menu inverted pointing primary size='large'>
                      <Menu.Item onClick={this.handleToggle}>
                        <Icon name='sidebar' />
                      </Menu.Item>
                    </Menu>
                  </Container>
                  </Sticky>

                  <HomepageHeading />
                </Segment>
                  {children}
              </Sidebar.Pusher>
          </Sidebar.Pushable>
        </div>
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}
