import React, { useEffect, useRef, useState } from 'react';
import { Formik, Form, Field} from 'formik';
import { TextField, Button,Alert,Checkbox } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import style from './Next.module.css';

import axios from 'axios';
import { Link } from 'react-router-dom';
export default function SignUp({type}) {

 
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [isResponseSubmitted,setIsResponseSubmitted] = useState(false);
    const [showPassword, setShowPassword] = React.useState(false);
    const [termsColor,setTermsColor] = useState('grey');
    const [isChecked, setIsChecked] = useState(false);
const [next,setNext]=useState(false)
const [verify,setVerify]=useState(false)
const [emailClicked, setEmailClicked] = useState(false);
const [tokenClicked, setTokenClicked] = useState(false);
const [passClicked, setPassClicked] = useState(false);
const [btnDisabled, setBtnDisabled] = useState(true);
const [tokenMatch,setTokenMatch] = useState(true);
const[errOnSignin,setErrOnSignin] = useState(false);
const [emailExist,setEmailExist] = useState(false);
const handleChange = (event) => {
        setIsChecked(event.target.checked);
       termsColor === 'grey'?setTermsColor('black'):setTermsColor('grey')
    };


    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
    
    const validate = (values) => {
      const errors = {};
  
      // Validate email
     if(next === false && verify === false){
      if (!values.email) {
        errors.email = 'Required';
        
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
     }

      else if(next === true && verify === false){
        if(!values.token){
          errors.token = 'Token Required';
  
        }
      
       }
      else if(next === true && verify === true){
        if (!values.email) {
          errors.email = 'Required';
          
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        }
        if(!values.password){
          errors.password = 'Set a Paswword';
  
        }
      }
      return errors;
    };

  
    return (
      <div className={style.mainDiv}>
        <h1>{type}</h1>
        {/* {isResponseErrored && (<Alert severity="success"  onClose={() => setIsResponseSubmitted(false)}>Message succesfully sent !</Alert>)} */}
        {( tokenMatch) && (<Alert severity="success"  onClose={() => setIsResponseSubmitted(false)} sx={{display:next === true && verify === true && tokenMatch?'':'none'}}>Email Verified</Alert>)}
        
        {(isResponseSubmitted) && (<Alert severity="success"  onClose={() => setIsResponseSubmitted(false)} sx={{}}>Succesfully Logged In!</Alert>)}
        <Formik
          initialValues={{
            email: '',
            token:'',
            password:''
          }}
          onSubmit={(values,{ resetForm }) => {
            if(errOnSignin === false){
              resetForm({
                values: {
                  email: '',
                  token:'',
                  password:''
  
                },
              })
              setIsResponseSubmitted(true)
              setTimeout(() => {
                setIsResponseSubmitted(false);
              }, 3000);
            }
           
            
           
           
            console.log(values);
          }}
          validate={validate}
        >{({ errors, touched ,isValid,values}) => (
          
          <Form style={{width:'100%'}}>
            <div className={style.formDiv}>

            <p
style={{
  display:next ===false && verify === false && emailExist ===true?'':'none',width:'40%',textAlign:'center',color:'red',marginTop:'20px',marginBottom:0
}}>Email alredy Exisst</p>
   
            <Field
             
             name="email"
             as={TextField}
            //  id={next === true && verify === true && errOnSignin?"filled-read-only-input":"outlined-basic"}
            //  InputProps={next ===true && verify === true?{
            //   readOnly: true,
            // }:{}}
            id = 'outlined-basic'
            
             label="Email"
             variant="outlined"
             sx={{
               width: '40%',
               marginTop: '20px',
               display: (next ===false && verify === false)?'':'none'
              }}
              onClick={() => {
                setEmailClicked(true);
                setBtnDisabled(!isValid);
              }}
              error={(errors.email && touched.email)}
              helperText={errors.email && touched.email ? errors.email : ''}
              
              />
              {/* {touched.email === false?setbtnDisabled(false):setbtnDisabled(true)}
            */}
<p
style={{
  display:next ===true && verify === true?'':'none',width:'40%',textAlign:'center',marginTop:'20px',marginBottom:0
}}>Note: Confirm your Pasword</p>
   
           <FormControl sx={{ m: 1, width: '40% ' , marginTop:'20px' ,display:next ===true && verify === true?'':'none'}} variant="outlined" error={(errors.password && touched.password)}
           helperText={errors.password && touched.password ? errors.password : ''}>
          <InputLabel htmlFor="outlined-adornment-password"
           >Password</InputLabel>
          <Field
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            name = 'password'
            as = {OutlinedInput}
            onClick={() => {
              setPassClicked(true);
              setBtnDisabled(!isValid);
            }}
            error={(errors.password && touched.password)}
            helperText={errors.password && touched.password ? errors.password : ''}
            
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
<p
style={{
  display:next ===true && verify === false?'':'none',width:'40%',textAlign:'center'
}}>Note: We have sent you a verification email to {values.email} kindly check it and verify your email. Enter the token below that we have sent to you via email</p>
        <Field
             
             name="token"
             as={TextField}
          label="Token"
          id="outlined-start-adornment"
          sx={{ m: 1, width: '40%' , display:next ===true && verify === false?'':'none'}}
          onClick={() => {
            setTokenClicked(true);
            setBtnDisabled(!isValid);
          }}
          error={(errors.token && touched.token)}
          helperText={errors.token && touched.token ? errors.token : ''}
          
          InputProps={{
            startAdornment: <InputAdornment position="start">B-</InputAdornment>,
          }}
          
        />
          
       <p
style={{
  display:verify ===false && next ===true && !tokenMatch?'':'none',width:'40%',color:'red',textAlign:'center'
}}>Tokens not matched</p>
   
  <div className={style.row} style={{
    display:next === true && verify === true?'flex':'none'
  }}>
    <Checkbox {...label} 
      checked={isChecked}
      onChange={handleChange}
    />
    <p style={{ color: termsColor }}>I agree with the terms and conditions</p>
  </div>

           <div className={style.row}>
          <Link to={'/login'}> <Button variant="contained" 
            
           
            sx={{
              marginTop: '20px',
              marginBottom:' 40px',
              marginLeft:'10px',
              fontWeight:'bold',
              color:'white',
              border:'2px rgb(0, 51, 102) solid',
              width:'150px',
              display:emailExist && next === false && verify ===false?'':'none'
            }}
            >
              Login
            </Button></Link>
           <Button   variant="contained" 
           disabled={!isValid || btnDisabled}
            onClick={()=>{
              
              const sendToken = {
                email:values.email,
               
              };
              
            axios.post('http://localhost:3333/user/sendToken', sendToken, {
              headers: {
                'Content-Type': 'application/json',
                // Add any other headers if needed
              },
            })
              .then(response => {
                if(response.status!==409 || response.status!==410 || response.status!==520){
                  setNext(true);
                  setBtnDisabled(true);
                }
              })
              .catch(error => {
                if(error.response && ((error.response.data.message === 'email already exist') || (error.response.data.message ==="You are a blocked user") || error.response.data.message ===("internal server error"))){
                  setVerify(false);
                  setNext(false)
                  setEmailExist(true)
                }
                console.error('Error:', error);
              });
            }}
            sx={{
              marginTop: '20px',
              marginBottom:' 40px',
              marginLeft:'10px',
              fontWeight:'bold',
              color:'white',
              border:'2px rgb(0, 51, 102) solid',
              width:'100px',
              display:next ===false && verify === false?'':'none'
            }}
            >
              Next
            </Button>
           </div>
           <div className={style.row}>
           <Button variant="contained" 
            
             onClick={()=>{
               setVerify(false)
               setNext(false)
           setEmailExist(false)
setTokenMatch(true)
             }}
            sx={{
              marginTop: '20px',
              marginBottom:' 40px',
              marginLeft:'10px',
              fontWeight:'bold',
              color:'white',
              border:'2px rgb(0, 51, 102) solid',
              width:'150px',
              display:next === true && verify ===false?'':'none'
            }}
            >
              Back
            </Button>
           <Button variant="contained" 
             disabled={!isValid || btnDisabled}
             onClick={()=>{
              axios.get('http://localhost:3333/user/verifyToken',{
              
               headers: {
                  'Authorization': `${values.email} ${values.token}`,
                  // Add any other headers if needed
                },
              })
                .then(response => {
               if(values.token === response.data.checkToken.token){
                setVerify(true);
                setBtnDisabled(true);
                console.log('matched')
             
                
               }
              
                })
                .catch(error => {
                  if(error.response && error.response.status !== 200){
                      
                setVerify(false);
                setBtnDisabled(false);
               setTokenMatch(false)
               alert(error.response.data.message)
                  }
                  console.error('Error:', error);
                });
                 
            
          
            
             }}
            sx={{
              marginTop: '20px',
              marginBottom:' 40px',
              marginLeft:'10px',
              fontWeight:'bold',
              color:'white',
              border:'2px rgb(0, 51, 102) solid',
              width:'150px',
              display:next ===true && verify === false?'':'none'
            }}
            >
              Verify Email
            </Button>
           </div>
            <Link to={'/'}>
              <Button type='submit' variant="contained" 
             disabled={(!isValid || btnDisabled || !isChecked )}
             onClick={()=>{
              axios.post('http://localhost:3333/user/signup',
              {email:values.email,
                password:values.password
              }, {
                headers: {
                  'Content-Type': 'application/json',
                  // Add any other headers if needed
                },
              })
                .then(response => {
               if(response.status === 200){
          
                console.log('matched')
             
                
               }
              
                })
                .catch(error => {
                  if(error.response && error.response.status !== 200){
                    setVerify(true);
                    setBtnDisabled(false);
                   setErrOnSignin(true)
                     alert(error.response.data.message)
                  }
                  console.error('Error:', error);
                });
                 
            
          
            
             }}
            sx={{
              marginTop: '20px',
              marginBottom:' 40px',
              marginLeft:'10px',
              fontWeight:'bold',
              color:'white',
              border:'2px rgb(0, 51, 102) solid',
              width:'150px',
              display:next ===true && verify === true ?'':'none'
            }}
            >
              Signin
            </Button>
            </Link>
            </div>
          </Form>)}
        </Formik>
      </div>
    );
  }

