import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Navigation from './Navigation'
import { Link } from 'react-router-dom';
import {Field, Form, useFormik} from "formik";
import * as Yup from "yup";

function Register() {
  const formik = useFormik({
    initialValues: {
        firstName: "",
        lastName: "",
        accept:"false",
        email: "",
        password: "",
        accept1:"false"
        
    },
    validationSchema: Yup.object({
        firstName: Yup.string()
        .min(6, "Must be 6 characters")
        .max(15, "First Name cannot be more than 15 characters")
        .required("First Name is required"),
        lastName: Yup.string()
        .min(3, "Must be atleast 3 characters")
        .max(15, "First Name cannot be more than 15 characters")
        .required("Last Name is required"),
        accept: Yup.bool()
        .oneOf([true], "You need to subscribe"),
        accept1: Yup.bool()
        .oneOf([true], "You need to accept terms and conditions"),
        email: Yup.string()
            .email("Invalid email")
            .required("Email is required"),
        password: Yup.string()
            .min(8, "Must be atleast 8 characters")
            .required("Password is required")
    }),
    onSubmit: (values) => {
        console.log(values);
    }
});
console.log(formik.touched);
  return (
    <>
      <Header/>
      <Navigation/>

      <div class="breadcrumbs">
		<div class="container">
			<ol class="breadcrumb breadcrumb1 animated wow slideInLeft" data-wow-delay=".5s">
            <li><Link to="/"><span class="glyphicon glyphicon-home" aria-hidden="true"></span>Home</Link></li>
				<li class="active">Register Page</li>
			</ol>
		</div>
	</div>


  <div class="register">
		<div class="container">
			<h2>Register Here</h2>
      <div class="login-form-grids">
				<h5>Profile information</h5>
        <form onSubmit={formik.handleSubmit}>
    
    <form >
        <div className="input-container" action="#" method='post'>
        <input 
        id="firstName"
        name="firstName"
        type="text"
        placeholder="First Name..."
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName ? <p>{formik.errors.firstName}</p> : null}
        </div>
    </form>
    <br></br>
    <form>
    <div className="input-container" action="#" method='post'>
        <input 
        id="lastName"
        name="lastName"
        type="text"
        placeholder="Last Name..."
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
        />
        {formik.touched.lastName && formik.errors.lastName ? <p>{formik.errors.lastName}</p> : null}
        </div>
    </form>

    <div className="register-check-box">
    <div class="check">
    <label class='news'>Subscribe To NewsLetter:</label>
        <input 
        id="accept"
        name="accept"
        type="checkbox"
        placeholder="Checkbox"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.accept}
        />
        
        {formik.touched.accept && formik.errors.accept ? <p>{formik.errors.accept}</p> : null}
    </div>
    </div>

    <h6>Login information</h6>

    <div className="input-container" action="#" method="post">
        <input 
        id="email"
        name="email"
        type="email"
        placeholder="Email Address"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p> : null}
    </div>

    <div className="input-container" action="#" method="post">
        <input 
        id="password"
        name="password"
        type="password"
        placeholder="Password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? <p>{formik.errors.password}</p> : null}
    </div>


    <div className="register-check-box">
    <div class="check">
    <label class='terms'>I accept to terms and conditions:</label>
        <input 
        
        id="accept"
        name="accept"
        type="checkbox"
        placeholder="Checkbox"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.accept}
        />
        
        {formik.touched.accept && formik.errors.accept ? <p>{formik.errors.accept}</p> : null}
    </div>
    </div>

    <input type="submit" value="Register"></input>
    

    </form>


        </div>
        <div class="register-home">
				<Link to="/">Home</Link>
			</div>
		</div>
    </div>
      <Footer/>
    </>
  )
}

export default Register
