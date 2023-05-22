import React from  "react"

export default function App(){
    return (
        <div Style="background-color:red" className="container">
        <div className="logon-box">
            <div className="top-logon-box">I-Test CBT</div>
            <div className="bottom-logon-box">
                
                <form className="logon-form">
                    <input placeholder="Enter your email"></input>
                    <label></label>
                    <br />

                    <input placeholder="Enter your password"></input>
                    <label></label>
                    <br />

                    <button>Login</button>
                </form>
 
              
            </div>
        </div>    
        </div>
    )
} 