import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/stockcompany";

class EmployeeService {

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL + '/companies');
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL+ '/addCompany', employee);
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/getCompany/' + employeeId);
    }

    updateEmployee(employee, employeeId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/updateCompany/' + employeeId, employee);
    }


    deleteEmployee(Id){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/delete/' + Id);
    }
}

export default new EmployeeService()