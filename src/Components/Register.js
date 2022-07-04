import React from 'react';
import { Formik, Form, Field } from "formik";
import {Link} from 'react-router-dom'
import * as yup from "yup"
import { v4 as uuid } from 'uuid';

const validationSchemaRegister = yup.object({
    name: yup.string().required("Name is Required!"),
    email: yup.string().required("Password is required"),
    contact_number: yup.number().min(1000000000, "Not Valid Phone Number!").max(9999999999, "Not Valid Phone Number!").required("Phone is Required!"),
    gender: yup.string().required("Gender Male or Female is Required!"),
});

function Register() {
    const handleClick =(e) => {
        console.log(e.target.value)
    }
  return (
    <div className='container mt-5'>
        <h1 className='mt-5'>Register</h1>
        <Formik
        validationSchema={validationSchemaRegister}
        initialValues={{
          name: "",
          email: "",
          contact_number: "",
          gender: ""

        }}
        onSubmit={(values) => {
            console.log(values)
        }}
        
      >
        {({ values }) =>(
            <Form action='' key={uuid()}>
                <Field name="name" placeholder="Enter Name.." className="form-control-sm col-sm-2 position-absolute start-50 translate-middle"/>
                <br />
                <br />
                <Field name="email" placeholder="Enter Email.." className="form-control-sm col-sm-2 position-absolute start-50 translate-middle"/>
                <br />
                <br />
                <Field name="contact_number" placeholder="Enter Contact.." className="form-control-sm col-sm-2 position-absolute start-50 translate-middle"/>
                <br />
                <br />
                <Field name="gender" placeholder="Enter Gender Male/Female.." className="form-control-sm col-sm-2 position-absolute start-50 translate-middle"/>
                <br />
                <br />
                <Link to="/dashboard"><button type="submit" className="btn btn-success position-absolute start-50 translate-middle bi bi-caret-down-fill" onClick={(e)=>handleClick(e)}>Submit</button></Link>
            </Form>
        )}
      </Formik>
    </div>
  )
}

export default Register