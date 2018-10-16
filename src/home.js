import React, { Component } from "react";
import "./App.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        <nav>
          <div class="nav-wrapper teal lighten-2">
            <a href="#." class="brand-logo">
              Brand Name Here
            </a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li>
                <a href="#a">Link</a>
              </li>
              <li>
                <a href="#b">Link two</a>
              </li>
              <li>
                <a href="#c">Link 3</a>
              </li>
            </ul>
          </div>
        </nav>
        <br />
        <div class="row">
          <div class="col s12 m4">
            <div class="card hoverable">
              <div class="card-image">
                <img src="https://i.imgur.com/kUCMPWX.jpg" alt="dogs"/>
                <span class=" grey lighten card-title">Here are some Dogs</span>
              </div>
              <div class="card-content">
                <p>
                  Simple cards. are good at containing small bits of
                  information. this is convenient because it requires little
                  markup to use.
                </p>
              </div>
              <div class="card-action">
                <a href="#d">
                  This can be a link to a page with more information
                </a>
              </div>
            </div>
          </div>
          <div class="col s12 m4">
            <div class="card hoverable">
              <div class="card-image">
                <img src="https://i.imgur.com/kUCMPWX.jpg" alt="dogs"/>
                <span class=" grey lighten card-title">Here are some Dogs</span>
              </div>
              <div class="card-content">
                <p>
                  Simple cards. are good at containing small bits of
                  information. this is convenient because it requires little
                  markup to use.
                </p>
              </div>
              <div class="card-action">
                <a href="#e">
                  This can be a link to a page with more information
                </a>
              </div>
            </div>
          </div>
          <div class="col s12 m4">
            <div class="card hoverable">
              <div class="card-image">
                <img src="https://i.imgur.com/kUCMPWX.jpg" alt="dogs"/>
                <span class=" grey lighten card-title">Here are some Dogs</span>
              </div>
              <div class="card-content">
                <p>
                  Simple cards. are good at containing small bits of
                  information. this is convenient because it requires little
                  markup to use.
                </p>
              </div>
              <div class="card-action">
                <a href="#f">
                  This can be a link to a page with more information
                </a>
              </div>
            </div>
          </div>
          <div class="row">
            <form class="col s12">
              <div class="row">
                <div class="input-field col s6">
                  <i class="material-icons prefix">account_circle</i>
                  <input id="icon_prefix" type="text" class="validate" />
                  <label for="icon_prefix">First Name</label>
                </div>
                <div class="input-field col s6">
                  <i class="material-icons prefix">phone</i>
                  <input id="icon_telephone" type="tel" class="validate" />
                  <label for="icon_telephone">Telephone</label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
