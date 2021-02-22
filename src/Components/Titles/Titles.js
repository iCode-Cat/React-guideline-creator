import React from 'react'
import {useState, useRef} from 'react'
import Title from './Title/Title'
import './Titles.scss'
function Titles() {

    const [title, setTitle] = useState([])
    console.log(title);
    //Title input value
    const titleValue = useRef(null);

    return (
        <section className="titles-container">
        <input ref={titleValue} type="text" className="titles-input"/>
        <button onClick={()=>{setTitle([...title, titleValue.current.value])}}>ADD</button>
        {title ? title.map((titles)=>(<Title key={Math.random()*999} titles={titles} />)) : '' }
    
        </section>
    )
}

export default Titles
