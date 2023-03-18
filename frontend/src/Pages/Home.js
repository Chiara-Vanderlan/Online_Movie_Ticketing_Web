import React from 'react'
//import Content from '../components/Content'

import TopicBox from '../components/TopicBox'

export default function Home() {
  return (
    <div>
        <h1 >HomePage</h1>
        <TopicBox food ="Rice">
          <span >This is the description </span>
        </TopicBox>
        <TopicBox food ="Kottu">
          <button>This is a button</button>
        </TopicBox>
        <TopicBox food ="Rice"><p>ghdshgdsk</p></TopicBox>
        
       
    </div>
  )
}
