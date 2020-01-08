// Import all components and reference one by name. You can optimize this using
// your build process (ie. Tree shaking in Webpack)
//import { Alert } from "@cmsgov/design-system-core";
// Import individual component. No special optimizations needed.
import React, { Fragment, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Button from "@cmsgov/design-system-core/dist/components/Button/Button";

//ec - There is non Table.js in dist/components/Table
//import Table from '@cmsgov/design-system-core/dist/components/Table';
//import { Table } from '@cmsgov/design-system-core';

import "@cmsgov/design-system-core/dist/index.css";
import "./App.css";
import UserInfo from "./UserInfo";

function App() {
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {

    fetch("http://localhost:3000/bluebutton/resources/userinfo.json")
      .then(response => response.text())
  
  },[]); //Empty arry bracket makes this run only once, not in a loop

  //  A common pattern in React is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.
  
  return (
    <Fragment>
      <Switch>
        <Route exact path="/userinfo" component={UserInfo} />
        <div className="map-image">
          <div className="ds-l-container ds-u-margin--4" style={{ color: "white" }}>
            
              <h4 className="ds-display">E.Cofresi - My Medicare Helper</h4>
              <p className="ds-h1">
                Blue Button React Front-end & Ruby On Rails API DEMO
                <br />
                Patient ID: -19990000000002
                <br />
              </p>
              <p className="ds-h4">
                Choose one of the following API resource links to demo the results:
              </p>
            
            <table className="ds-c-table" style={{ color: "black" }}>
              <thead>
                <tr>
                  <th scope="col">Description</th>
                  <th scope="col">LINK</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Name and email information for patient</th>
                    <td>
                      <Link to="/userinfo">UserInfo</Link>
                    </td>
                </tr>
                <tr>
                  <th scope="row">Detailed information for patient</th>
                  <td>
                    <a href="http://localhost:3000/bluebutton/resources/patient">
                      Patient
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    Explanation of benefit information for patient
                  </th>
                  <td>
                    <a href="http://localhost:3000/bluebutton/resources/eob">
                      ExplanationOfBenefit
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    Explanation of benefit information for patient
                  </th>
                  <td>
                    <a href="http://localhost:3000/bluebutton/resources/coverage">
                      Coverage
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">OIDC Discovery</th>
                  <td>
                    <a href="http://localhost:3000/bluebutton/resources/oidc">
                      OIDC Disc
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">FHIR Metadata</th>
                  <td>
                    <a href="http://localhost:3000/bluebutton/resources/fhirmeta">
                      FHIR Meta
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>

            <Button className="ds-u-margin-top--2">Learn more</Button>
          </div>
        </div>
      </Switch>
    </Fragment>
  );
} //end App
export default App;
