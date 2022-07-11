import React, { useState } from 'react';
import './Order.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';


export default function Order() {

  const[formSent, setFormSent] = useState(false) ;

  return (
    <>
      <Formik
        
        initialValues={{
          name:'',
          email:'',
          celphone:'',
          message:''
        }}
        
        validate={(val)=>{
          let errors = {};

          if(!val.name){
            errors.name='Please enter a name'
          }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(val.name)){
            errors.name = 'The name can only contain letters and spaces'
          }      
          if(!val.email){
            errors.email='Please enter an email'
          }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(val.email)){
            errors.email = 'Please enter a valid email'
          }

          if(!val.celphone){
            errors.celphone='Please enter a celphone number'
          }else if(!/^\d{0,20}$/.test(val.celphone)){
            errors.celphone = 'Please enter a valid celphone number'
          }

          if(!/^[a-zA-Z0-9 ]{0,50}?$/.test(val.message)){
            errors.message = 'maximum 50 alphanumeric characters'
          }
          
          return errors;
        }}

        onSubmit={(val, {resetForm})=>{
          resetForm();
          console.log('submitted form')
          setFormSent(true)
          setTimeout(()=> setFormSent(false), 5000)
        }}     
      >
        {({ errors })=>(
          <Form className='formulario' > 
           
            <div>
              <label htmlFor='namex'>* Name</label>
              <Field 
                type='text' 
                id='namex' 
                name='name' 
                placeholder='Frederick Gales'             
              />
              <ErrorMessage name='name' component={()=>( <div className='error'>{errors.name}</div> ) }/>     
            </div>
           
            <div>
              <label htmlFor='emailx'>* Email  </label>
              <Field 
                type='email' 
                id='emailx' 
                name='email' 
                placeholder='frederick@gmail.com'
              />
              <ErrorMessage name='email' component={()=>( <div className='error'>{errors.email}</div> ) }/>
            </div>
           
            <div>
              <label htmlFor='cel'>* Celphone</label>
              <Field
                type='text' 
                id='cel' 
                name='celphone' 
                placeholder='117895658525'
              />
              <ErrorMessage name='celphone' component={()=>( <div className='error'>{errors.celphone}</div> ) }/>
            </div>
           
           <div>
             <label htmlFor='messagex'>Message </label>
             <Field
              name='message'
              as='textarea'
              placeholder='your message...'
              style={{resize:'none'}}
             />
             <ErrorMessage name='message' component={()=>( <div className='error'>{errors.message}</div> ) }/>
           </div>

            <button type='submit'>Send</button>
            <br />
            {!formSent ? 
            <p style={{color:'red', fontSize:'.7rem'}}>* obligatory field </p>
            :
            <p style={{color:'green'}} className='exito'>Form sent successfully</p>
            }
          </Form>
        )}
      </Formik>

    </>
  )
}
