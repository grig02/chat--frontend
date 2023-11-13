import React, { useState } from 'react'
import Message from '../Message/Message'

const Content = () => {
    const messages = useState([
        "message1",
        "message2",
    ])
    return (
        <div>{
            messages.map(message => (
                <Message text={message} />
            ))
        }</div>
    )
}

export default Content