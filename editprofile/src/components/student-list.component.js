import React ,{useState,useEffect}from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import StudentTableRow from './StudentTableRow';

function StudentList(){
    const [student,setStudent] = useState([]);

    useEffect(() =>{
        axios.get('http://localhost:9000/students/')
        .then(res => {
            setStudent(res.data);
        })
        .catch((error) => {
          console.log(error);
        })
    },[])

    const DataTable = () => {
        return student.map((res, i) => {
          return <StudentTableRow obj={res} key={i} />;
        });
      }

    return(
        <div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Roll No</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {DataTable()}
        </tbody>
      </Table>
    </div>
    )
}

export default StudentList;