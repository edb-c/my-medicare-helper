// Import all components and reference one by name. You can optimize this using
// your build process (ie. Tree shaking in Webpack)
//import { Alert } from "@cmsgov/design-system-core";
// Import individual component. No special optimizations needed.
import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
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
   // const url = 'http://localhost:3000/bluebutton/resources/userinfo.json';
//    fetch(
//      "http://localhost:3000/bluebutton/resources/userinfo.json"
//    ).then(response => response.json());

 fetch('http://localhost:3000/bluebutton/resources/userinfo') /*

     , {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      //body: JSON.stringify(response), // must match "Content-Type" header
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, same-origin, *omit
      headers: {
          // "user-agent": "Mozilla/4.0 MDN Example",
          "Content-Type": "application/json"
         // "Content-Type": "text/plain"
          // "Content-Type": "text/plain",
      },
      
      mode: "no-cors", // no-cors, cors, *same-origin
      redirect: "follow", // manual, *follow, error
      referrer: "client", // *client, no-referrer
  })
  */
  .then(response => response.text()) // parses response to JSON
//  .then(json => {
//      // json
//      console.log(`json =`, JSON.stringify(json));
//      return json;
//  })
  .catch(err => console.error(`error =`, err));


}, []); //Empty arry bracket makes this run only once, not in a loop

  //  A common pattern in React is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.

  //  <Switch>
  //  <Route exact path="/userinfo" component={UserInfo} />
  //</Switch>
  //<Link to="/userinfo">UserInfo</Link>

  return (
    <Fragment>
      <div className="map-image">
        <div
          className="ds-l-container ds-u-margin--4"
          style={{ color: "white" }}
        >
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
                  <Link
                    to={{
                      pathname: "/userinfo",
                      state: {
                        fromNotifications: true
                      }
                    }}
                  >
                    UserInfo
                  </Link>
                </td>
              </tr>
              <tr>
                <th scope="row">Detailed information for patient</th>
                <td>
                  <a href="http://localhost:3000/bluebutton/resources/patient.json">
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
    </Fragment>
  );
} //end App
export default App;
