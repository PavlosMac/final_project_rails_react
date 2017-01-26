import React from 'react';
import ListingsTable from './ListingsTable.jsx'


const ListingsContainer = React.createClass({


  getInitialState(){
      return { allListings: [] }
    },

    componentDidMount(){
      var url = 'http://localhost:5000/api/listings'
      var request = new XMLHttpRequest()
      request.open('GET', url)

      request.setRequestHeader('Content-Type', "application/json")
      request.withCredentials = true

      request.onload = () => {
         if(request.status === 200){
          var data = JSON.parse(request.responseText)
          this.setState( { allListings: data } )
         } else{
          browserHistory.goBack()
         }
      }
      request.send(null)
    },


  render(){
    return(
      <div>
        <h2>List of Agony</h2>
        <ListingsTable tableData={this.state.allListings} />
      </div>
    )
  }

})

 export default ListingsContainer;
