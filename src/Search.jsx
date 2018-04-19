import React from 'react'
import icon from './iconfont/iconfont.css'
import css from './Search.css'

const Search = props => {
  return (
    <div className='input'>
      <i className='iconfont icon-sousuo' ></i>
      <input type="text" className='input' />
      <i className='iconfont icon-guanbi' ></i>
    </div>
  )
}

export default Search