import React, { Component } from "react";
import "./App.css";
import { Navbar, NavItem, Row, Col, Card, Input, CardTitle, Icon } from "react-materialize"

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar className="teal lighten-2" brand='Brand Name Here' right>
          <NavItem>Link</NavItem>
          <NavItem>Link two</NavItem>
          <NavItem>Link 3</NavItem>
        </Navbar>

        <br />

        <Row class="row">
          <Col s='12' m='4'>
            <Card class="card hoverable"
              header={<CardTitle image='https://i.imgur.com/kUCMPWX.jpg'>Here are some Dogs</CardTitle>}
              actions={[<a href="#e">This can be a link to a page with more information</a>]}>
              Simple cards. are good at containing small bits of
              information. this is convenient because it requires little
              markup to use.
            </Card>
          </Col>
          <Col s='12' m='4'>
            <Card
              header={<CardTitle image='https://i.imgur.com/kUCMPWX.jpg'>Here are some Dogs</CardTitle>}
              actions={[<a href="#e">This can be a link to a page with more information</a>]}>
              Simple cards. are good at containing small bits of
              information. this is convenient because it requires little
              markup to use.
            </Card>
          </Col>
          <Col s='12' m='4'>
            <Card
              header={<CardTitle image='https://i.imgur.com/kUCMPWX.jpg'>Here are some Dogs</CardTitle>}
              actions={[<a href="#e">This can be a link to a page with more information</a>]}>
              Simple cards. are good at containing small bits of
              information. this is convenient because it requires little
              markup to use.
            </Card>
          </Col>

          <Row s='12'>
            <Input s="12" m='6' label="First Name" ><Icon>account_circle</Icon>
            </Input>
            <Input s="12" m='6' label="Phone Number" >
              <Icon class="material-icons prefix">phone</Icon></Input>
          </Row>

        </Row>
      </div>
    );
  }
}