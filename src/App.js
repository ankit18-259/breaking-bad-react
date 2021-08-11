import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PaginationTable from './components/PaginationTable.js'
import DetailPage from './components/DetailPage.js'


function App() {

  
  return(
    <Router>
      <div className="body-bg">
        <div className="container padding-tb">
          <div className="row">  
            <div className="col-sm-3">
              <p><a href='/home'> Home </a></p>
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
        <Route path='/home'> <PaginationTable /> </Route>
        <Route path='/:id'> <DetailPage /> </Route>
      </Switch>
    </Router>
    )
  

}


export default App;