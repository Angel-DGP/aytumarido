import { useFormik } from "formik";
import React from "react";
import "./formM.css";

export const FormLogins = () => {

    const {handleSubmit, handleChange}= useFormik({
        initialValues: {
            email: "",
        },
        onSubmit:(values) =>{
            console.log(values);
        }
    })


    return (
        <div>
            <h3>Usuario Actual</h3>
            <form onSubmit={handleSubmit}> 
                <input type="email" placeholder="email" name="email" onChange={handleChange}/>
                
                <button type="submit">+</button>

            </form>
        </div>
     )
}