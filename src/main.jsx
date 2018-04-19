import React, { Component } from 'react'
import Comment from './Comment'
import Search from './Search'

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = { data: [] }
    this.addMessage = this.addMessage.bind(this)
    this.searchMessage = this.searchMessage.bind(this)
  }
  addMessage(obj) {
    console.log(obj.value);

    let data = {
      content: obj.value,
      date: (new Date()).toString()
    }
    this.setState(() => {
      return this.state.data.push(data)
    })
  }
  searchMessage(inputMessage) {
    // TDDO
  }
  // getContent() {
  //   let content
  //   this.state.map(items => {
  //   })
  // }
  render() {
    let a = []
    a = this.state.data.map((items, index) => {
      return (
        <li key={index}>
          <div>{items.content}</div>
          <div>{items.date}</div>
        </li>
      )
    })
    return (
      <div className='main'>
        <Search searchMessage={this.searchMessage}></Search>
        <ul>
          {a}
        </ul>
        <Comment addMessage={this.addMessage} ></Comment>
      </div>
    )
  }
}
