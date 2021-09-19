import React, { Component } from 'react';
import Location from './components/Location';
import FormCity from './components/FormCity';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap'

// Heroku Link=https://city-explorer-rand.herokuapp.com/

import Movie from './components/Movie';


export class App extends Component {
  constructor(props){
    super(props);
    this.state={
      display_name:"",
      type:"",
      latitude:"",
      longitude:"",
      showData:false,
      showMap:"random",
      weather:[],
      city:"",
      movie:[],
    }
  }
  handleLocation=(e)=>{
    let display_name=e.target.value;
    this.setState({
      display_name:display_name,
      city:display_name
    })
  }
  handleSubmit=(e)=>{
    console.log(`${process.env.REACT_APP_LOCATIONIQ_API_KEY}`);
    e.preventDefault();
    let config={
      method:"GET",
      baseURL:`https://api.locationiq.com/v1/autocomplete.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.display_name}`
    }
    axios(config).then(res=>{
      let responseData=res.data[0]
     
      this.setState({
        display_name:responseData.display_name,
        longitude:responseData.lon,
        latitude:responseData.lat,
        type:responseData.type,
        showData:true,
       showMap:"show"
      })
    }).then(()=>{
      axios.get(`${process.env.REACT_APP_BACKEND_URL}/weather?lat=${this.state.latitude}&lon=${this.state.longitude}`).then(res=>{
        this.setState({
          weather:res.data
        })
      });
    }).then(()=>{
      axios.get(`${process.env.REACT_APP_BACKEND_URL}/movies?query=${this.state.city}`).then(res=>{
        this.setState({
          movie:res.data
        })
        console.log(this.state.movie)
      });
    })
  }
  render() {
    return (
      <div>
        <h1>Welcome to City explorer</h1>
        <FormCity handleLocation={this.handleLocation} handleSubmit={this.handleSubmit}/>
        {
          this.state.showData&&
          <Location display_name={this.state.display_name}
                    type={this.state.type}
                    latitude={this.state.latitude}
                    longitude={this.state.longitude}
            
          />
        }
        
        <img className={this.state.showMap} src = {`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}
        &center=${this.state.latitude},${this.state.longitude} &zoom=1-18`}/>
     
     {this.state.weather.map(item=>{
                    return <>
                    {/* <h1>{item.date}</h1>
                    <h1>{item.description}</h1> */}
                     <Table striped bordered hover>
                    <thead>
                        <tr>
                         
                            <th>Date</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                           
                            <td> <h1>{item.date}</h1></td>
                            <td>  <h1>{item.description}</h1></td>
                        </tr>
                    </tbody>
                </Table>
                    </>
                })
                }
                {this.state.movie.map(item=>{
                    return <>
                    {/* <h1>{item.date}</h1>
                    <h1>{item.description}</h1> */}
                     <Table striped bordered hover>
                    <thead>
                        <tr>
                         
                            <th>title</th>
                            <th>overview</th>
                            <th>total_votes</th>
                            <th>average_votes</th>
                            <th>image_url</th>
                            <th>popularity</th>
                            <th>released_on</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                           
                            <td> <h1>{item.title}</h1></td>
                            <td>  <h1>{item.overview}</h1></td>
                            <td> <h1>{item.total_votes}</h1></td>
                            <td>  <h1>{item.average_votes}</h1></td>
                            <td> <h1>{item.image_url}</h1></td>
                            <td>  <h1>{item.popularity}</h1></td>
                            <td> <h1>{item.released_on}</h1></td>
                          
                        </tr>
                    </tbody>
                </Table>
                    </>
                })
                }
      </div>
    )
    
  }
}

export default App