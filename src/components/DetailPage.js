import React, { Component } from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table'
import Pagination from 'react-bootstrap/Pagination'
import Badge from 'react-bootstrap/Badge'
import './css/styles.css'
import { Markup } from 'interweave';
import QuotesPage from './Quotes.js';

const api = axios.create({
  baseURL: 'https://www.breakingbadapi.com/api/characters/'
})

// function season_appearance(data){
// 		let html= '';
    	
//     	for (let i = 0; i < data.appearance.length; i++) { 
//    			html += `<Badge className="margin-10" pill bg="primary"> ${ data.appearance[i] } </Badge>`
//    		}
//    		console.log(html)
//    		return(
//    			<div dangerouslySetInnerHTML={{__html: html }} />
//    			)
//    	}


class DetailPage extends Component {

	state={
		data: []
	}

	constructor(){

    	super();
    	api.get(`${window.location.pathname}`).then(res => {
      		console.log(res.data)
      		this.setState({data: res.data})
    	})

    	
    }



    render(){
	return(
		<div className="body-bg padding-tb">
			<div className="container body-bg">
				<div className="row">
					<div className="col-sm-4">
						{ this.state.data.map(data => <p>Name: {data.name} </p> )}
						{ this.state.data.map(data => <p> D.O.B: {data.birthday} </p> )}
						{ this.state.data.map(data => <p> Occupation(s): <span>  {data.occupation[0]}  </span><span>  {data.occupation[1]}  </span><span>  {data.occupation[2]}  </span> </p> )}
						{ this.state.data.map(data => <p> Status: {data.status} </p> )}
					</div>
					<div className="col-sm-4">
						{ this.state.data.map(data => <p> A.K.A: {data.nickname} </p> )}
						{ this.state.data.map(data => <p> Portrayed by: {data.portrayed} </p> )}
						
						{ this.state.data.map(data =>
							<div className='seasons'><p> Seasons: 
								<span>  {data.appearance[0]}  </span>
								<span>  {data.appearance[1]}  </span>
								<span>  {data.appearance[2]}  </span>
								<span>  {data.appearance[3]}  </span>
								<span>  {data.appearance[4]}  </span>
								</p>
							</div>
								
						)}
					</div>
					<div className="col-sm-4">
						{ this.state.data.map(data => <img className="char-img" src={ data.img } /> )}
					</div>
				</div>
				<div className='row'>
					<div className="col-sm-12">
					 	{ this.state.data.map(data => <QuotesPage dataFromParent={ data.name } /> )}
					</div>
				</div>
			</div>
		</div>
		)
	}
}

export default DetailPage;