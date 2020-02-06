import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import SignIn from './SignIn.js';
import SignUp from './SignUp.js';

class LoginPage extends React.Component{
    constructor(props){
        super(props);
        this.loginStatus = this.loginStatus.bind(this);
        this.state = {
            lvalue : false
        }
    }

    loginStatus = () => {
            this.setState(()=>{
                return{
                    lvalue : true
                };
            })
        
    };
    render()
    {
        return(
            <Router>
            <div className="signinClass">
            <Link to="/signin">Sign In</Link>
            </div>
            <div className="signupClass">
            <Link to="/signup">Sign Up</Link>
            </div>
            <Switch>
            <Route path="/signin">
                <SignIn loginState={this.loginStatus}/>
            </Route>
            <Route path="/signup">
                <SignUp />
            </Route>
            </Switch>
            </Router>
        )
    }
}



export default LoginPage;