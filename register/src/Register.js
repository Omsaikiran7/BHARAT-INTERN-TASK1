import React, { useState } from 'react'
import axios from 'axios'
import swal from 'sweetalert'
const Register = () => {
    const [name,setname] = useState('')
    const [email,setemail] = useState('')
    const [password,setpassword] = useState('')
    const [cpassword,setcpassword] = useState('')

    const submitHandle =(e) =>{
       e.preventDefault();

       axios.post('http://localhost:8000/register',{
         name:name,
         email:email,
         password:password,
         cpassword:cpassword
       }).then((res) =>{
            console.log(res.data)
            if(res.data=="Registration is successfull")
            {
                swal({
                    title: "Registered Successfully",
                    text: "",
                    icon: "success",
                    dangerMode: false,
                  })
            }
            if(res.data== "already existing user")
            {
                alert('already existing user')
            }
            setname('')
            setpassword('')
            setemail('')
            setcpassword('')
       }).catch((err)=>{
        console.log(err)
       })
    }
  return (
    <div>
         <section class="vh-100 bg-image imgs">
  <div class="mask d-flex align-items-center h-100 gradient-custom-3">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
          <div class="card rounded-15" >
            <div class="card-body p-5">
              <h2 class="text-uppercase text-center mb-5">Register</h2>

              <form >

                <div class="form-outline mb-4">
                <label class="form-label" for="form3Example1cg">Your Name</label>
                  <input type="text" id="form3Example1cg" class="form-control form-control-lg" value={name} onChange={(e) =>{setname(e.target.value)}}/>
                 
                </div>

                <div class="form-outline mb-4">
                <label class="form-label" for="form3Example3cg">Your Email</label>
                  <input type="email" id="form3Example3cg" class="form-control form-control-lg" value={email} onChange={(e)=>{setemail(e.target.value)}}/>
                  
                </div>

                <div class="form-outline mb-4">
                <label class="form-label" for="form3Example4cg">Password</label>
                  <input type="password" id="form3Example4cg" class="form-control form-control-lg"value={password} onChange={(e)=>{setpassword(e.target.value)}}/>

                  
                </div>

                <div class="form-outline mb-4">
                <label class="form-label" for="form3Example4cdg">Repeat your password</label>
                  <input type="password" id="form3Example4cdg" class="form-control form-control-lg"value={cpassword} onChange={(e)=>{setcpassword(e.target.value)}} />
                 
                </div>

                <div class="form-check d-flex justify-content-center mb-5">
                  <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                  <label class="form-check-label" for="form2Example3g">
                    I agree all statements in <a href="#!" class="text-body"><u>Terms of service</u></a>
                  </label>
                </div>

                <div class="d-flex justify-content-center">
                  <button type="button"
                    class="btn btn-success btn-block btn-lg gradient-custom-4 text-body" onClick={submitHandle}>Register</button>
                </div>

                <p class="text-center text-muted mt-5 mb-0">Have already an account? <a href="#!"
                    class="fw-bold text-body"><u>Login here</u></a></p>

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Register
