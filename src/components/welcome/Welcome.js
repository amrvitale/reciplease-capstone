import React from 'react'
import './Welcome.css'

class Signup extends React.Component {
    render () {
       
        return (
            <div className="welcomePage">
                <div className="welcomeHero">
                    <h1 className="welcomeHeader">Welcome to Reciplease</h1> 
                    
               </div>

                <section className="about">
                    <h2>About Reciplease</h2>
                    <h2 className="welcomeTag">We're a Community of Home Cooks and Recipe Lovers</h2>
                    <p>Reciplease is a public recipebox. <br /> Break out your favorite, timeless recipes and share with friends and family!</p>
                </section> 
            </div>
        );
    }
}
export default Signup;
