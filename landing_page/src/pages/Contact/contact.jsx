import React from "react";
function Contact() {

    function FormSubmit() {
        window.alert("Message Sent Successfully!!");
    }
    return (
        <>
            <div className="form-body" style={{
                textAlign: 'center',
                position: "relative",
                top: '20px',
            }} >
                <h1>Send Message</h1>
                <form onSubmit={FormSubmit}>
                    {/* <label>Name:</label><br></br> */}
                    <input type="text"
                        placeholder="Enter Your Name:"
                        style={{
                            height: '30px',
                            width: '400px',
                            fontSize: '15px'
                        }}
                        required></input><br></br><br></br>
                    {/* <label>Email ID:</label><br></br> */}
                    <input type="email"
                        placeholder="Enter Email:"
                        style={{
                            height: '30px',
                            width: '400px',
                            fontSize: '15px'
                        }}
                        required></input><br></br><br></br>
                    {/* <label>Description:</label><br></br> */}
                    <input
                        type="text"
                        placeholder="Enter Description:"
                        style={{

                            height: '100px',
                            width: '400px',
                            fontSize: '15px',
                            top: '0px'
                        }} required></input><br></br><br></br>
                    <button type="submit"
                        style={{
                            height: "40px",
                            width: '410px',
                            fontSize: "20px",
                            color: 'white',
                            backgroundColor: " rgb(16, 177, 241)",
                            border: "0px",
                            borderRadius: '5px',
                            cursor: 'pointer'
                        }}
                    >Send</button>
                </form>
            </div>
        </>
    )
}
export default Contact