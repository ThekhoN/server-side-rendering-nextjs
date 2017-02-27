import React, {Component} from 'react'
import Link from 'next/link'
import axios from 'axios'
import HeaderComponent from '../component/HeaderComponent'

export default class extends Component {
  static async getInitialProps(){
    const res = await axios.get('http://58b2874a78d2121200bfa8dd.mockapi.io/api/quotes')
    return {data: res.data}
  }
  render(){
    //console.log('this.props:', this.props)
    return (<div style={{ padding: '2em','boxSizing': 'box-border' }}>
      <HeaderComponent title='Next.js Magic Home'/>
      <h2>This is the Home page</h2>
      <br/>
      <p>
          Click <Link href="/about" prefetch><a>here</a></Link> to go to About page and learn more
      </p>
      <div className="pure-g">
            <div className="pure-u-1-3">
              <h1>{`funQuotes (: `}</h1>
              <table className="pure-table">
                <thead>
                  <tr>
                    <th>Author</th>
                    <th>Quote</th>
                    <th>Submitted by:</th>
                    <th>Tags:</th>
                  </tr>
                </thead>
                <tbody>
                {this.props.data.map((quote) => {
                  return (
                      <tr key={quote.id} className='pure-table-odd'>
                        <td>{quote.author}</td>
                        <td>{quote.quote}</td>
                        <td>{quote.submittedBy}</td>
                        <td>{JSON.stringify(quote.tag)}</td>
                      </tr>
                    );
                })}
                </tbody>
              </table>
            </div>
            <div className="pure-u-1-3"></div>
        </div>
    </div>)
  }
}
