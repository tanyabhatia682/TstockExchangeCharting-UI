import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

class UpdateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            companyName: '',
            turnOver: '',
            ceo: '',
            boardDirectors: '',
            briefWriteup: ''

        }

    this.changeCompanyNameHandler = this.changeCompanyNameHandler.bind(this);
    this.changeTurnOverHandler = this.changeTurnOverHandler.bind(this);
    this.changeCeoHandler = this.changeCeoHandler.bind(this);
    this.changeBoardDirectorsHandler = this.changeBoardDirectorsHandler.bind(this);
    this.changeBriefWriteupHandler = this.changeBriefWriteupHandler.bind(this);
    this.updateEmployee = this.updateEmployee.bind(this);
    }


    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( (res) =>{
            let employee = res.data;
            this.setState({companyName: employee.companyName,
                turnOver: employee.turnOver,
                ceo : employee.ceo,
                boardDirectors : employee.boardDirectors,
                briefWriteup : employee.briefWriteup
            });
        });
    }
    updateEmployee = (e) => {
        e.preventDefault();
        let employee = {companyName: this.state.companyName, turnOver: this.state.turnOver, ceo: this.state.ceo, boardDirectors: this.state.boardDirectors, briefWriteup: this.state.briefWriteup};
        console.log('employee => ' + JSON.stringify(employee));

        EmployeeService.updateEmployee(employee, this.state.id).then(res =>{
          this.props.history.push('/employees');
      });
  }

    changeCompanyNameHandler= (event) => {
        this.setState({companyName: event.target.value});
    }

    changeTurnOverHandler= (event) => {
        this.setState({turnOver: event.target.value});
    }

    changeCeoHandler= (event) => {
        this.setState({ceo: event.target.value});
    }
    changeBoardDirectorsHandler= (event) => {
        this.setState({boardDirectors: event.target.value});
    }
    changeBriefWriteupHandler= (event) => {
        this.setState({briefWriteup: event.target.value});
    }
    cancel(){
        this.props.history.push('/employees');
        
    }

    render() {
        return (
            <div>
            <br></br>
               <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            {
                                
                            }
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label> Company Name :</label>
                                        <input placeholder="Company Name" name="Company Name" className="form-control" 
                                            value={this.state.companyName} onChange={this.changeCompanyNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Turn Over: </label>
                                        <input placeholder="Turn Over" name="Turn Over" className="form-control" 
                                            value={this.state.turnOver} onChange={this.changeTurnOverHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label>  CEO: </label>
                                        <input placeholder="CEO" name="CEO" className="form-control" 
                                            value={this.state.ceo} onChange={this.changeCeoHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label>  Board Directors: </label>
                                        <input placeholder="Board Directors" name="Board Directors" className="form-control" 
                                            value={this.state.boardDirectors} onChange={this.changeBoardDirectorsHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label>  Brief WriteUp: </label>
                                        <input placeholder="Brief Writeup" name="Brief Writeup" className="form-control" 
                                            value={this.state.briefWriteup} onChange={this.changeBriefWriteupHandler}/>
                                    </div>

                                    <button className="btn btn-success" onClick={this.updateEmployee}>Update</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

               </div>
        </div>




        )
    }
} 
    export default UpdateEmployeeComponent