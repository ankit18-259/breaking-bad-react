import React, { Component } from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table'


const api = axios.create({
  baseURL: 'https://www.breakingbadapi.com/api/'
})


class PaginationTable extends Component {

  state = {
    characters: []
  }

  constructor(){
    super();
    api.get('/characters').then(res => {
      console.log(res.data)
      this.setState({characters: res.data})
    })

  }

  
  render(){
  return(
      <div className="body-bg padding-tb">
        <Table striped bordered hover variant="dark">
          <thead>  
            <tr>
              <th>Name</th>
              <th>Occupation 1</th>
              <th>Occupation 2</th>
              <th>Occupation 3</th>
              <th>Birthday</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            { this.state.characters.map(characters =>   
              <tr key = {characters.char_id}>
                <td> <a className='hlRemove' href={characters.char_id}>{ characters.name }</a> </td> 
                <td> { characters.occupation[0] } </td>
                <td> { characters.occupation[1] } </td> 
                <td> { characters.occupation[2] } </td>
                <td> { characters.birthday } </td>
                <td> { characters.status } </td> 
              </tr>        
             )}
          </tbody>
        </Table>
      </div>
    )
  
  }
  

}

export default PaginationTable;