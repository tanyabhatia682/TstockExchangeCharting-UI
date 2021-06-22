import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( res => {
            this.setState({employee: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Company Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Company Name: </label>
                            <div> { this.state.employee.companyName }</div>
                        </div>
                        <div className = "row">
                            <label> Turn Over: </label>
                            <div> { this.state.employee.turnOver }</div>
                        </div>
                        <div className = "row">
                            <label> CEO:</label>
                            <div> { this.state.employee.ceo }</div>
                        </div>
                        <div className = "row">
                            <label>   Board Directors: </label>
                            <div> { this.state.employee.boardDirectors }</div>
                        </div>
                        <div className = "row">
                            <label>  Brief WriteUp: </label>
                            <div> { this.state.employee.briefWriteup }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewEmployeeComponent
