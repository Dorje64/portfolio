import PropTypes from 'prop-types';
import React from 'react';
import DesktopContainer from './desktopContainer.js.jsx';
import MobileContainer from './mobileContainer.js.jsx';
import { Motion, spring } from 'react-motion';

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Segment,
  Tab,
  Progress,
  Transition,
  Card
  } from 'semantic-ui-react';

const Intro = () => { return(<div>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries.
                    </div>)
                  }

const panes = [
  { menuItem: 'ABOUT', render: () => <Intro /> },
  { menuItem: 'SKILLS', render: () => ( <Grid>
                                          <Grid.Row>
                                            <Grid.Column width={12}>
                                              <Progress percent={75} inverted color='green' progress />
                                            </Grid.Column>
                                            <Grid.Column width={4}>
                                              HTML/CSS
                                            </Grid.Column>
                                          </Grid.Row>

                                          <Grid.Row>
                                            <Grid.Column width={12}>
                                              <Progress percent={86} inverted color='green' progress />
                                            </Grid.Column>
                                            <Grid.Column width={4}>
                                              Ruby on Rails
                                            </Grid.Column>
                                          </Grid.Row>

                                          <Grid.Row>
                                            <Grid.Column width={12}>
                                              <Progress percent={80} inverted color='green' progress />
                                            </Grid.Column>
                                            <Grid.Column width={4}>
                                              JavaScript/React
                                            </Grid.Column>
                                          </Grid.Row>
                                        </Grid>
                                        ) }
]

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const HomepageLayout = (page) => {
  return(
  <ResponsiveContainer>

    <Segment style={{ padding: '4em 0em' }} id="about" vertical>
      <Grid container stackable >
        <Grid.Row>
          <Grid.Column width={6}>
          <Image
            bordered
            rounded
            size='large'
            src={require('../banner.jpg')}
          />
          </Grid.Column>
          <Grid.Column floated='right' width={10}>
            <Tab menu={{ secondary: true, pointing: true }} panes={panes} className = "about-tab"/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '0em', backgroundColor: '#f7f7f7', paddingBottom: '50px' }} vertical>
      <Grid centered>
        <Grid.Row>
          <Grid.Column width={2}>
            <h1> What I Do? </h1>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
        <Grid.Column width={12}>
          <Card.Group itemsPerRow={3}>
            <Card color='green' style={{height: '300px'}}/>
            <Card color='green' style={{height: '300px'}}/>
            <Card color='green' style={{height: '300px'}}/>
          </Card.Group>
        </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>


    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>

      </Container>
    </Segment>

    <Segment style={{ padding: '8em 0em', backgroundColor: '#f7f7f7'}} vertical>
      <Container text>

      </Container>
    </Segment>

    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='About' />
              <List link inverted>
                <List.Item as='a'>Sitemap</List.Item>
                <List.Item as='a'>Contact Us</List.Item>
                <List.Item as='a'>Religious Ceremonies</List.Item>
                <List.Item as='a'>Gazebo Plans</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Services' />
              <List link inverted>
                <List.Item as='a'>Banana Pre-Order</List.Item>
                <List.Item as='a'>DNA FAQ</List.Item>
                <List.Item as='a'>How To Access</List.Item>
                <List.Item as='a'>Favorite X-Men</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>Footer Header</Header>
              <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>

  </ResponsiveContainer>
)}
export default HomepageLayout
