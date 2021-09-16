import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
export class Movie extends Component {
    render() {
        return (
            <div>
                 <Table striped bordered hover>
                    <thead>
                        <tr>
                         
                            <th>{this.props.title}</th>
                            <th>{this.props.image_url }</th>
                            <th>{this.props.average_votes}</th>
                            <th>{this.props.released_on}</th>
                            <th> {this.props.total_votes}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr>
                           
                            <td> <h1>{item.date}</h1></td>
                            <td>  <h1>{item.description}</h1></td>
                        </tr> */}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Movie
