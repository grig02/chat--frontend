import React from 'react'
import dayjs from 'dayjs'
import classnames from 'classnames'
import './Message.css'

const Message = ({message: {text, unix, left}}) => {
  return (
    <div className={classnames('message-wrapper', {
      'message--right': !left,
    })}>
      <div className={classnames('message')}>
        <div>{text}</div>
        <div>{dayjs.unix(unix).format('YYYY/MM/DD HH:mm:ss')}</div>
      </div>
    </div>
  )
}

export default Message
