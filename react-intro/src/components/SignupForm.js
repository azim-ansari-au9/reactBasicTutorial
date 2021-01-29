import './SignupForm.css';
import React from 'react';
const SignupForm = (props) => {
    const { title, formInfo, error, onSubmit, changeHandler } = props;
    
    return (
        <form onSubmit={onSubmit} style={{border:'1px solid #ccc'}}>
            <div className="container">
                <h1>{title || 'SignUp'}</h1>
                <p>Please fill in this form to create an account.</p>
                <hr />
                <label forhtml="email"><b>Email</b></label>
                <input
                    type="text"
                    placeholder="Enter Email"
                    name={formInfo.email.name}
                    value={formInfo.email.value}
                    onChange={(e) => changeHandler(e.target.name,e.target.value)}
                />
                <span>{formInfo.email.error}</span><br /><br />

                <label forhtml="psw"><b>Password</b></label>
                <input
                    type="password"
                    placeholder="Enter Password"
                    name={formInfo.password.name}
                    value={formInfo.password.value}
                    onChange={(e) => changeHandler(e.target.name,e.target.value)}
                />
                <span>{formInfo.password.error}</span><br /><br />

                <label forhtml="psw-repeat"><b>Repeat Password</b></label>
                <input
                    type="password"
                    placeholder="Repeat Password"
                    name={formInfo.repeat_password.name}
                    value={formInfo.repeat_password.value}
                    onChange={(e) => changeHandler(e.target.name,e.target.value)}
                />

                <label forhtml="image"><b>Profile Image</b></label>
                <input
                    type="file"
                    placeholder="Profile Image"
                    name={formInfo.image.name}
                    value={formInfo.image.value}
                    onChange={(e) => {
                        changeHandler(e.target.name,e.target.files[0])
                    }}
                />

                <label>
                    <input
                        checked={formInfo.terms.value}
                        name={formInfo.terms.name}
                        type="radio"
                        style={{marginBottom:'15px'}}
                        onChange={(e) => changeHandler(e.target.name,e.target.checked)}
                    /> 
                    I accept the terms & policies
                </label>
                <span>{formInfo.terms.error}</span><br /><br />
                
                <p>By creating an account you agree to our <a href="/" style={{color:'dodgerblue'}}>Terms & Privacy</a>.</p>

                <div className="clearfix">
                    <button disabled={error} type="submit" className="signupbtn">Sign Up</button>
                </div>
            </div>
        </form>
    );
};

export default React.memo(SignupForm);
