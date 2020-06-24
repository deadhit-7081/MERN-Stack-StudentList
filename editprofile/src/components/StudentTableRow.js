import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function StudentTableRow({obj}) {

    const deleteStudent = () =>{
        axios.delete(`http://localhost:9000/students/delete-student/`+obj._id)
        .then((res) => {
            console.log('Student successfully deleted!')
        })
        .catch((error) => {
            console.log(error)
        })
    }
        return (
            <tr>
                <td>{obj.name}</td>
                <td>{obj.email}</td>
                <td>{obj.rollno}</td>
                <td>
                    <Link className="edit-link" to={"/edit-student/"+obj._id}>
                        Edit
                    </Link>
                    <Button size="sm" variant="danger" onClick={deleteStudent}>Delete</Button>
                </td>
            </tr>
        );
    }

    export default StudentTableRow;