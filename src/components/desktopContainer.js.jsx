/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
 import PropTypes from 'prop-types';
 import React, { Component } from 'react';
 import HomepageHeading from './homepageHeading.js.jsx';
 import { Motion, spring } from 'react-motion';

 import {
   Button,
   Menu,
   Responsive,
   Segment,
   Visibility,
   Container,
   Grid
 } from 'semantic-ui-react';

export default class DesktopContainer extends Component {
  state = {open: false}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state
    return (
      <Responsive {...Responsive.onlyComputer}>
        <Visibility once={false} onBottomPassed={this.showFixedMenu} onBottomPassedReverse={this.hideFixedMenu}>
          <Segment inverted textAlign='center' className="mainbanner" vertical>
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
