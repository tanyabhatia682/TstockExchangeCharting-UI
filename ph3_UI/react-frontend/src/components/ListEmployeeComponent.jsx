import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)


        this.state = {
                companies: []
        }
         this.addEmployee = this.addEmployee.bind(this);
    
    }
    editEmployee(id){
        this.props.history.push(`/update-employee/${id}`);
    }
    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then( res => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        });
    }
    viewEmployee(id){
        this.props.history.push(`/view-employee/${id}`);
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({ companies: res.data});
        });
    }

    addEmployee(){
        //this.props.history.push('/add-employee');
       this.props.history.push('/add-employee/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Manage Company</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addEmployee}> Add Companies</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Company Name</th>
                                    <th>Turn Over</th>
                                    <th> CEO </th>
                                    <th> Board Directors</th>
                                    <th>Brief WriteUp</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.companies.map(
                                        company => 
                                        <tr key = {company.id}>
                                             <td> {company.companyName} </td>   
                                             <td> {company.turnOver}</td>
                                             <td> {company.ceo}</td>
                                             <td> {company.boardDirectors}</td>
                                             <td> {company.briefWriteup}</td>
                                             <td>
                                                 <button onClick={ () => this.editEmployee(company.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(company.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(company.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListEmployeeComponent
