import './login.css';
import { Person, GoogleIcon } from '@material-ui/icons';




function Login() {
  return (
    <>
    <div className="mainLoginContainer">
        <div className="topHeaderContainer">
            <p>hey, plese login</p>
            <Person className='loginItem' />
        </div>
       <div className="signUpContainerItems">
          <p>sign up</p>
          <p>registration</p>
       </div>
       <div className="signUpItems">
         <input type="text" className="inputContainer" placeholder='Enter your username' />
         <input type="text" className="inputContainer" placeholder='Enter your password' />
         <button className="loginContainer">Login</button>
         <p className="lostPasswordContainer">lost password</p>
       </div>
         <div className="socialMediaLoginItems">
           <button className="socialMediaLogin">Login with facebook</button>
         <button className="socialMediaLogin">Login with google</button>
         </div>
         <div className="demoLogin">
           <h3 className="demoHeader">demo:</h3>
           <p className="demoItems">user Login</p>
           <p className="demoItems">instruction login</p>
         </div>

    </div>
    </>
  );
}

export default Login;
