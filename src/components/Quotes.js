import React, { Component } from 'react'
import axios from 'axios'
import './css/styles.css'
import Alert from 'react-bootstrap/Alert'

const api = axios.create({
  baseURL: 'https://www.breakingbadapi.com/api/quote'
})



class QuotesPage extends Component {
	
	state={
		data: []
	}

	constructor(props){

    	super(props);
    	api.get(`?author=${this.props.dataFromParent}`).then(res => {
      		console.log(res.data)
      		this.setState({data: res.data})
    	})

    	
    }

	render(){
		return(
			<div> 
				<h1>Quotes: <br/></h1>
				{ this.state.data.map(data => <Alert variant="dark"> { data.quote }  </Alert> )}
			</div>
		)
	}

}


export default QuotesPage;