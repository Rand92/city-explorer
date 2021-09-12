import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
export class Location extends Component {
    render() {
        return (
            <div>


                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>City name</th>
                            <th>latitude</th>
                            <th>longitude</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td> <h1>{this.props.display_name}</h1></td>
                            <td>                <h3>{this.props.latitude}</h3>
                            </td>
                            <td><h3>{this.props.longitude}</h3></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Location
