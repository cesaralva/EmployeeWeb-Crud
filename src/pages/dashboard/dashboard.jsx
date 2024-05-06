import { useEffect, useState } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [employees, setEmployees] = useState([]);
const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch("http://localhost:8090/api/list");
        const data = await response.json();

        setEmployees(data);
      } catch (error) {
        console.log("Error Fetch employee", error.message);
      }
    };
    fetchEmployees();
  }, []);


const handleDelete = async (employeeId)=>{
    try {
        const response = await fetch(`http://localhost:8090/api/${employeeId}`,{
            method: "DELETE",
        
        });
        if(response.ok){
            setEmployees(prevEmployee =>
                prevEmployee.filter(employee=> employee.id !== employeeId)
            
        );
    }


        console.log(`Employee ID ${employeeId} delete successfully`)

        
    } catch (error) {
        console.log("Error Delete employee", error.message);
    }
}


const handleUpdate = async (employeeId)=>{
    try {
        navigate(`/${employeeId}`);
       
    console.log(`Employee ID ${employeeId} Update successfully`)
    } catch (error) {
        console.log("Error Update employee", error.message);
    }
}
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col>
            <h1 className="text-center">Employee</h1>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                
                  <th>Name</th>
                  <th>Email</th>
                  <th>Department</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee) => (
                  <tr key={employee.id}>
                     
                    <td>{employee.name}</td>
                    <td>{employee.email}</td>
                    <td>{employee.phone}</td>
                    <td>{employee.department}</td>
                    <Button variant="outline-secondary" onClick={()=>handleUpdate(employee.id)}>Update</Button>{" "}
                    <Button variant="outline-danger" onClick={()=> handleDelete(employee.id)}>Delete</Button>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
