import React from 'react';
import { Button } from 'reactstrap';


const SignUp = () => {
    return(
        <div className="signupBodyClass">
        <form>
        <input type="email" placeholder="Email" />
        <br />
        <br />
        <input type="password" placeholder="Password"/>
        <br />
             <br />
        <input type="password" placeholder="Retype Password"/>
        <br />
             <br />
        <input type="text" placeholder="Full Name"/>
        <br />
             <br />
        <input type="telephone" placeholder="Phone Number"/>
        <br />
             <br />
        <Button>Sign Up</Button>   
        </form>     
        </div>
    )
}

export default SignUp;