import React from 'react'
import { Link } from 'react-router-dom'

class Signup extends React.Component {
    render () {
        const loginStyle = {
            fontWeight: 'bold',
            fontSize: '25px',
        }
        return (
            <div>
               <section className="welcome">
                    <h1>Welcome to Reciplease, a Community of Home Cooks and Recipe Lovers</h1>
               </section>
            
                <section className="about">
                    <h2>About Reciplease</h2>
                    <p>Reciplease is a public recipebox. Break out your favorite, timeless recipes and share with friends and family!</p>
                </section>

                <section className="signup">
                    <h2>Join the Reciplease Community - Create an Account</h2>
                    <div className="firstName">
                        <label htmlFor="first-name">First Name:</label>
                        <input type="text" name="first-name" id="first-name"></input>
                    </div>

                    <div className="lastName">
                        <label htmlFor="last-name">Last Name:</label>
                        <input type="text" name="last-name" id="last-name"></input>
                    </div>

                    <div className="userEmail">
                        <label htmlFor="email">Email:</label>
                        <input type="text" name="email" id="email"></input>
                    </div>

                    <div className="userPass">  
                        <label htmlFor="password">Password:</label>
                        <input type="text" name="password" id="password"></input>
                    </div>
                    <div className="submitBtn">
                        <button type="submit">Sign Up</button>
                    </div>
                    <Link to="./login">
                        <p style={loginStyle}>Already have an account? Login</p>
                    </Link>
                </section>
            </div>
        );
    }
}
export default Signup;
