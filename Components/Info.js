import React from "react"

export default function Info(){
    return (
        <div className="Info">
            <a href="https://ibb.co/yYg21nG"><img className="Info--img" src="https://i.ibb.co/b2NtZgq/aaaa-orng.jpg" alt="aaaa-orng" /></a>
            <h2 className = "Info--Name">Shubham Thakur</h2>
            <h5>Wannabe Developer</h5>
            <div className = "Info--button">
            <button className = "button button1" type="button"><a className = "Info--btn1" href="mailto:stfushubham@gmail.com" target="_blank">Email</a></button>
            <button className = "button button2" type="button"><a className = "Info--btn2" href="https://www.linkedin.com/in/shubhamxthakur/" target="_blank">LinkedIn</a></button> </div>
        </div>
    )
}