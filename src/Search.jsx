import React from 'react'
import icon from './iconfont/iconfont.css'
import css from './Search.css'

const Search = props => {

  return (
    <div className='input'>
      <i className='iconfont icon-sousuo' onClick={() => { props.searchMessage(this.input) }}></i>
      <input type="text" className='input' onChange={() => { props.change(this.input) }} ref={input => this.input = input} />
      <i className='iconfont icon-guanbi' onClick={() => { props.clear(this.input) }}></i>
    </div >
  )
}

export default Search