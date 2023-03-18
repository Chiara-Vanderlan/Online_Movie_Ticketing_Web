import React from 'react'
import "./topicbox.css"

export default function TopicBox(props) {

  //const topic = "My favourite food is pasta"
  //const item = " and lasagna"

  //const a = 10;
  //const b =20;
  //const c= a+b;
  //const foodprices = { pasta :"600", lasanga : " 1000"}

  return (
    <div>
        <div className ="topicBox">
            <span className = "text">My favourite food is {props.food}</span>
            {props.children}
        </div>
    </div>
  )
}
