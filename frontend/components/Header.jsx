import React from 'react'

class Header extends React.Component {
  render () {
    return (
      <header className='header'>
        <h1 className=''>Currency Calculator</h1>
        <ul className='links group'>
          <li>
            <a
              href='https://github.com/stevendikowitz/ExchangeCalc'
              target='_blank'>
              GitHub Repo
            </a>
          </li>
          <li>
            <a href='http://stevendikowitz.com/' target='_blank'>stevendikowitz.com</a>
          </li>
        </ul>
      </header>
    )
  }
}

export default Header
