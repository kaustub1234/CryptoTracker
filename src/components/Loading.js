import React from 'react'
import './Loading.css'
import img from './bitlogo.png'

const Loading = () => {
    return (
        <>
            <div className='backdrop'></div>
            <img src={img} class="rotate linear infinite" width="200" height="200" />
        </>
    )
}

export default Loading