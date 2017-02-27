import React from 'react'
import Link from 'next/link'
import HeaderComponent from '../component/HeaderComponent'

export default()=> (
  <div style={{ padding: '2em','boxSizing': 'box-border' }}>
    <HeaderComponent title='Next.js About Magic'/>
    <h2>This is the About page. . .</h2>
    <br/>
    <p>
      Well this is some fun project trying to implement server side rendering using react + routing.<br/>
      Still need to implement a state container using redux...<br/>
      Server-side rendering magic, without tears.
      <br/>
      <img src='https://i.imgur.com/YsbKHg1.jpg'/>
      <br/>
      <img src='https://s-media-cache-ak0.pinimg.com/originals/31/89/5b/31895b26cadef100f49526147f3bc1f3.jpg'/>
    </p>

    <br/>
    Click <Link href="/" prefetch><a>here</a></Link> to go back to the Home page
  </div>
)
