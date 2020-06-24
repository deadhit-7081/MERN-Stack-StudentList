import React, {useState,useEffect } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function EditStudent(props)
{

  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [rollno,setRollno] = useState('');

  useEffect(() =>{
    axios.get(`http://localhost:9000/students/edit-student/`+props.match.params.id)
    .then(res => {
      setName(res.data.name);
      setEmail(res.data.email);
      setRollno(res.data.rollno);
    })
    .catch((error) => {
      console.log(error);
    })
  },[]);


  const onSubmit = (e) => {
    e.preventDefault()

    const studentObject = {
      name: name,
      email: email,
      rollno: rollno
    };

    axios.put('http://localhost:9000/students/update-student/'+props.match.params.id,studentObject)
      .then((res) => {
        console.log(res.data)
        console.log('Student successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to Student List 
    props.history.push('/student-list')
  }

    return (
    <div className="form-wrapper">
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={name} onChange={e => setName(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={email} onChange={e =>setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Roll No</Form.Label>
          <Form.Control type="text" value={rollno} onChange={e => setRollno(e.target.value)} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Update Student
        </Button>
      </Form>
    </div>);
  }

  export default EditStudent;