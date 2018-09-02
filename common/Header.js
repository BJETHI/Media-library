import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import style from '../static/style';

const Header = () => (
  <div className="text-center title">
    <Head>
      <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
    </Head>
    <nav className="navbar navbar-default">
      <Link href='/'>Home</Link>
      {" | "}
      <Link href="/library">Library</Link>
    </nav>
    <style global jsx>{style}</style>
  </div>
);

export default Header;