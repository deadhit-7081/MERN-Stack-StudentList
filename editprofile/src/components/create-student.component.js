import React,{useState} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function CreateStudent(){

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [rollno,setRollno] = useState('');

     const onSubmit = (e) => {
        e.preventDefault()
    
        console.log(`Student successfully created!`);
        console.log(`Name: ${name}`);
        console.log(`Email: ${email}`);
        console.log(`Roll no: ${rollno}`);
        console.log(name);

        const studentObject = {
            name : name,
            email : email,
            rollno : rollno
        }

        axios.post('http://localhost:9000/students/create-student',studentObject)
        .then((res) =>{
            console.log(res.data);
        })
        .catch((error) => console.log(error));

        setName('');
        setEmail('');
        setRollno('');
      }

    return(
        <div class="form-wrapper">
      <Form onSubmit = {onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={email} onChange={(e) =>setEmail(e.target.value)}/>
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Roll No</Form.Label>
          <Form.Control type="text" value={rollno} onChange={(e)=>setRollno(e.target.value)}/>
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Create Student
        </Button>
      </Form>
    </div>
    )
}

export default CreateStudent;