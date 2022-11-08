import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Navigation from './Navigation'
import { Link } from 'react-router-dom';
import {Field, Form, useFormik} from "formik";
import * as Yup from "yup";

function Login() {
  const formik = useFormik({
    initialValues: {
        
        email: "",
        password: ""
        
    },
    validationSchema: Yup.object({
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
				<li class="active">Login Page</li>
			</ol>
		</div>
	</div>


  <div class="login">
		<div class="container">
			<h2>Login Here</h2>
      <div class="login-form-grids">
				
        <form onSubmit={formik.handleSubmit}>
    
    
    
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

    <div class="forgot">
        <Link to="/login">Forgot Password?</Link>
        </div>
    

    <input type="submit" value="Login"></input>
    

    </form>


        </div>
        </div>
			<h4>For New People</h4>
			<p><Link to="/register">Register Here</Link> (Or) go back to <Link to="/">Home<span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span></Link></p>
		</div>
		
    
      <Footer/>
    </>
  )
}

export default Login;
