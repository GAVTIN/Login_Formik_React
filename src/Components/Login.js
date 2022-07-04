import React, {useState, useEffect} from 'react'
import { Formik, Form, Field } from "formik";
import {Link} from 'react-router-dom'
import * as yup from "yup"
import axios from 'axios';

const validationSchemaLogin = yup.object({
    username: yup.string().required("Name is Required!"),
    password: yup.string().required("Password is required"),
});
function Login() {
    const [item, setItems] = useState()
    const [emails, setEmails] = useState()
    const [nam, setNam] = useState()
    useEffect(()=>{
    axios.get(`https://raw.githubusercontent.com/bhanushalimahesh3/mock-api/main/users.json`)
    .then(res => res.json())
    .then(data => setItems(data))
    .catch(error => {
        console.log(error)
    })
    }, [item])
    
    const getEmail = (e) =>{
        setEmails(e.target.value)
    }
    const getName = (e) =>{
        setNam(e.target.value)
    }
  
  return (
    <div className='container mt-5'>
    <h1 className='mt-5'>Login</h1>
        <Formik
        validationSchema={validationSchemaLogin}
        initialValues={{
          email: "",
          name: ""
        }}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        {({ values }) =>(
            <Form>
                <Field className="form-control-sm col-sm-2 position-absolute start-50 translate-middle" placeholder="Enter Your Email..." onChange={getEmail} value={emails} name="email"/>
                <br />
                <br />
                <Field className="form-control-sm col-sm-2 position-absolute start-50 translate-middle" placeholder="Enter Your Name..." onChange={getName} value={nam} name="name"/>
                <br />
                <br />
                <br />
                <Link to="/dashbpard" style={{"textDecoration":"none","color":"black"}}><button type='submit' className='btn btn-success position-absolute start-50 translate-middle bi bi-caret-down-fill' viewBox="0 0 16 16">Submit</button></Link>
            </Form>
        )}
        </Formik>
        <br />
        <p className='position-absolute top-40 mt-5 start-50 translate-middle'>Do not have an account?</p>
      <Link to="/register" style={{"textDecoration":"none","color":"black"}}><button className='btn btn-primary position-absolute top-50 start-50 translate-middle'>Create Account</button></Link>
    </div>
  )
}

export default Login