import React, { Component } from 'react'
import Comment from './Comment'
import Search from './Search'

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      isSearch: false
    }
    this.addMessage = this.addMessage.bind(this)
    this.searchMessage = this.searchMessage.bind(this)
    this.clear = this.clear.bind(this)
    this.change = this.change.bind(this)
    // this.bj = 0
    this.result = []
  }
  addMessage(obj) {
    console.log(obj.value);
    let data = {
      content: obj.value,
      date: (new Date()).toString()
    }
    this.setState(() => {
      // this.bj++
      return this.state.data.push(data)
    })
  }
  clear(dom) {
    console.log(1, this)
    this.setState({ isSearch: false })
    dom.value = null
    dom.focus()
  }
  // a () {
  //   let bj = 0
  //   return () => {
  //     if (bj === this.bj) return
  //     this.date = this.state.map((item, index) => {

  //     })
  //   }
  // }
  // b = this.a()

  searchMessage(input) {
    let value = input.value
    let re = new RegExp(value, 'g')
    this.result = []
    this.setState({ isSearch: true })
    this.state.data.map((item, index) => {
      if (item.date.match(re) || item.content.match(re)) {
        this.result.push(index)
      }
    })
    console.log(this.result, re, value)

  }
  change(input) {
    let value = input.value
    if (!value) {
      this.setState({ isSearch: false })
    }
  }
  // getContent() {
  //   let content
  //   this.state.map(items => {
  //   })
  // }
  render() {
    let a = []
    a = this.state.data.map((items, index) => {
      if (this.state.isSearch && this.result.indexOf(index) === -1) {
      } else {
        return (
          < li key={index}>
            <div>{items.content}</div>
            <div>{items.date}</div>
          </li >
        )
      }
    })
    return (
      <div className='main' >
        <div>点击搜索会显示和当前搜索结果匹配的列表，点击提交会将内容以及时间提交到列表。只有当搜索框为空或者点击x的时候，才会显示全部列表</div>
        <Search change={this.change} clear={this.clear} searchMessage={this.searchMessage}></Search>
        <ul>
          {a}
        </ul>
        <Comment addMessage={this.addMessage} ></Comment>
      </div>
    )
  }
}
