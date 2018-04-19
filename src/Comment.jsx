import React from 'react'
import commment from './comment.css'

class Comment extends React.Component {
  constructor(props) {
    super(props)
    this.clear = this.clear.bind(this)
  }
  clear() {
    this.textarea.value = ''
  }
  render() {
    return (
      <div>
        <textarea className='textarea' name="" id="" cols="30" rows="10" ref={textarea => { this.textarea = textarea }} ></textarea>
        <button className='button' onClick={() => { this.props.addMessage(this.textarea); this.clear(); }}>提交</button>
      </div>
    )
  }
}

export default Comment
