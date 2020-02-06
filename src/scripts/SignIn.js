import React from 'react';
import { Button } from 'reactstrap';

const SignIn = (loginState) => {
    return(
        <div className = "signinBodyClass">
        <form>
             <label>
            <input type="text" name="name" placeholder="Email" />
             </label>
             <br />
             <br />
             <label>
            <input type="password" name="password" placeholder="Password" />
            </label>
            <br />
            <br />
            {
                console.log(loginState)
            }
        <Button on>Sign In</Button>      
        </form>  
        </div>
    )
}

export default SignIn;