import React from  "react"

export default function App(){

    const [firstscreen, setfirstscreen] = React.useState(true)

    function userLogon(e){

        e.preventDefault()

        const email = "hi"
        const password = "he"



        if (email == "hi" && password == "he")
        {
            setfirstscreen((prevfirstscreen) => prevfirstscreen == false)
        }
    }

    return (
        <div Style="background-color:red" className="container">
        <div className="logon-box">
            <div className="top-logon-box"><h2>I-Test CBT</h2></div>
            <div className="bottom-logon-box">
                
                <form className="logon-form">
                    <input type="text" id="email" name="email" placeholder="Enter your email" className="logon-input"></input>
                    <label></label>
                    <br />

                    <input type="password" id="password" name="password" placeholder="Enter your password" className="logon-input"></input>
                    <label></label>
                    <br />

                    <button onClick={userLogon}>Login</button>
                </form>
 
              
            </div>
        </div>    
        </div>
    )
} 