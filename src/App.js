import React, { Component } from 'react';
import './App.css';
import HomepageLayout from './components/homepage.js.jsx';
import { Motion, spring } from 'react-motion';
// import ScrollToPlugin from "gsap/ScrollToPlugin";

import { Button, Grid, Menu } from 'semantic-ui-react';

class App extends Component {
  state = { open: false, page: null }

  handleMouseDown = () => {
      this.setState({open: !this.state.open});
    };

  handleTouchStart = (e) => {
    e.preventDefault();
    this.handleMouseDown();
  };

  handleItemClick = (page) => {
//     $('html, body').animate({
//     scrollTop: $("#target-element").offset().top
// }, 1000);
  }

  render() {
    return (
      <div className="App">
        <Motion defaultStyle={{x: -300}} style={{x: spring(this.state.open ? 50 : -220)}}>
          {({x}) =>{
            return(
              <Grid.Row>
              <Grid.Column width={4}>
                <div className="btn" style={{
                  transform: `translate3d(${x}px, 30px, 0)`,
                  WebkitTransform: `translate3d(${x}px, 30px, 0)`,
                  position: 'fixed',
                  zIndex: 9999
                }}>
                  <Menu>
                    <Menu.Item
                      name='Home'
                      active={true}
                      onClick={()=> {this.handleItemClick('home')}}
                    />
                    <Menu.Item
                      name='About'
                      onClick={() => {this.handleItemClick('about')}}
                      active={false}
                    />
                    <Menu.Item
                      name='Contact'
                      active={false}
                      onClick={() => {this.handleItemClick('contact')}}
                    />

                    <Menu.Item
                      icon= 'options'
                      flipped = 'horizontally'
                      widths= {4}
                      active={false}
                      onMouseDown={this.handleMouseDown} onTouchStart={this.handleTouchStart}
                    />
                  </Menu>
                </div>

              </Grid.Column>
            </Grid.Row>
          )}
        }
        </Motion>

        <HomepageLayout />
      </div>
    );
  }
}

export default App;
