import React from 'react';
import { Link } from 'react-router-dom';

function Navbarr() {
  return (<>
    <div   className=' bg-amber-200  flex m-6 gap-7 img font-serif ' >
      <Link to="/home"><p>Home</p></Link>
      <Link to="/contact"><p>Contact</p></Link>
      <Link to="/about"><p>About</p></Link>

    </div>
  </>
  );
}

export default Navbarr;
