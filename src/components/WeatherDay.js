import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
class WeatherDay extends Component {
    render() {
        return (
            <>
             <Table striped bordered hover>
                    <thead>
                        <tr>
                         
                            <th>{this.props.display_name}</th>
                            <th><Img src="https://www.upc.edu/prevencio/ca/shared/imatges/icones/exteriors.png"/></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr>
                           
                            <td> <h1>{item.date}</h1></td>
                            <td>  <h1>{item.description}</h1></td>
                        </tr> */}
                    </tbody>
                </Table>
            
            </>
        )
    }
}
export default WeatherDay