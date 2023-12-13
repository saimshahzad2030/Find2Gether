// import React, { useState } from 'react'
// import { Formik, Form} from 'formik';
// import { TextField,Button } from '@mui/material'
// import style from './ContactUs.module.css'
// export default function ContactUs() {
    
//  function validateEmail(value) {
//     let error;
//     if (!value) {
//       error = 'Required';
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
//       error = 'Invalid email address';
//     }
//     return error;
//   }
  
//   function validateUsername(value) {
//     let error;
//     if (value === 'admin') {
//       error = 'Nice try!';
//     }
//     return error;
//   }
//   const [username,setUsername] = useState('');
//   const [email,setEmail] = useState('');
//   return (
//       <div className={style.mainDiv}>
//       <h1>Contact us</h1>
//       <Formik
//        initialValues={{
//          username: username,
//          email: email,
//        }}
//        onSubmit={values => {
//          // same shape as initial values
//          console.log(values);
//        }}
//      >
//        {({ errors, touched, isValidating }) => (
//          <Form>
//            <TextField id="outlined-basic" 
//       label="Email" 
//       variant="outlined"
//      className={style.emailField}
//      onChange={(e)=>{setEmail(e.target.value)}}
//      sx={{
//         width: '60%',
//         marginTop: '20px',
//      }} />
//       {errors.email && touched.email && <div>{errors.email}</div>}
//       <TextField id="outlined-basic" 
//       label="Name" 
//       variant="outlined"
//      className={style.nameField} 
     
//      onChange={(e)=>{setUsername(e.target.value)}}
//      sx={{
//         width: '60%',
//         marginTop: '20px',
//      }} />
//       {errors.username && touched.username && <div>{errors.username}</div>}
//       <TextField
//            id="outlined-multiline-static"
//            label="Query"
//            className={style.queryField}
//            multiline
//            rows={4}         
//             sx={{
//             width: '60%',
//             marginTop: '20px',
//          }} /> {errors.email && touched.email && <div>{errors.email}</div>}
//         <Button type='submit' onClick={()=>{validateEmail();validateUsername()}} variant="contained" className={style.btn}
       
//         >Send</Button>
//          </Form>
//        )}
//      </Formik>
       
        

//     </div>
//   )
// }

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextField, Button } from '@mui/material';
import style from './ContactUs.module.css';

export default function ContactUs() {
  const validate = (values) => {
    const errors = {};

    // Validate email
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    // Validate username
    if (values.username === 'admin') {
      errors.username = 'Nice try!';
    }

    return errors;
  };

  return (
    <div className={style.mainDiv}>
      <h1>Contact us</h1>
      <Formik
        initialValues={{
          username: '',
          email: '',
          query: '',
        }}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
        }}
        validate={validate}
      >
        <Form>
          <div className={style.formDiv}>
          <Field
            name="email"
            as={TextField}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            className={style.emailField}
            sx={{
              width: '60%',
              marginTop: '20px',
            }}
          />
          <ErrorMessage name="email" component="div" />

          <Field
            name="username"
            as={TextField}
            id="outlined-basic"
            label="Name"
            variant="outlined"
            className={style.nameField}
            sx={{
              width: '60%',
              marginTop: '20px',
            }}
          />
          <ErrorMessage name="username" component="div" />

          <Field
            name="query"
            as={TextField}
            id="outlined-multiline-static"
            label="Query"
            className={style.queryField}
            multiline
            rows={4}
            sx={{
              width: '60%',
              marginTop: '20px',
            }}
          />
          <ErrorMessage name="query" component="div" />

          <Button type="submit" variant="contained" className={style.btn}>
            Send
          </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
