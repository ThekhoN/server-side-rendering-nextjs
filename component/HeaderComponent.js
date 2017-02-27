import React from 'react'
import Head from 'next/head'

const HeaderComponent = ({title}) => (<Head>
    <title>{title}</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <link rel="stylesheet" href="https://unpkg.com/purecss@0.6.1/build/pure-min.css" />
</Head>)

export default HeaderComponent
