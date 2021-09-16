import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import CountrySelect from './Country'
const Form = () => {
    return (
        <div>
            <form>
  <div class="form-group">
    <label >First Name</label>
    <input type="text" class="form-control"   />
 </div>
<br/>
 <div class="form-group">
    <label >Last Name</label>
    <input type="text" class="form-control"   />
 </div>
 <br/>
 <div class="form-group">
    <label for="exampleFormControlTextarea1">Address</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <br/>
  <div class="form-group">
    <label >Country</label>
    <br/>
    <CountrySelect/>

    
 </div>

 <br/>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    
  </div>
  <br/>
  <div class="form-group">
    <label >Phone-Number</label>
    <input type="number" class="form-control"  placeholder="Enter number"/>
    
  </div>
  <br/>
 
  <button type="submit" class="btn btn-primary">Submit FeedBack</button>
</form>
        </div>
    )
}

export default Form
