import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios'
import Pagination from 'react-bootstrap/Pagination'
import Table from 'react-bootstrap/Table'
import PaginationTable from './components/PaginationTable.js'
import DetailPage from './components/DetailPage.js'


function App() {

  
  return(
    <Router>
      <div className="body-bg">
        <div className="container padding-tb">
          <div className="row">  
            <div className="col-sm-3">
            </div>
            <div className="col-sm-6 center">
              <h1>BREAKING BAD</h1>
            </div>
            <div className="col-sm-3">
            </div>
          </div>
        </div>
      </div>
      <Switch>
        <Route exact path='/' component={PaginationTable} />
        <Route path='/:id' component={DetailPage} />
      </Switch>
    </Router>
    )
  

}


export default App;