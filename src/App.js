import React, { Component } from 'react';
import Location from './components/Location';
import FormCity from './components/FormCity';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


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
    }
  }
  handleLocation=(e)=>{
    let display_name=e.target.value;
    this.setState({
      display_name:display_name
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
      </div>
    )
  }
}

export default App