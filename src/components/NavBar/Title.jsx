import React from 'react'
import { Link } from "@reach/router"
import { Nav } from "react-bootstrap";

function Title() {
  return (
    <div>
      <Nav>
        <Link className="nav-title ml-auto mr-auto" to="/">
          <h1 className="title">Digital Orders</h1>
        </Link>
      </Nav>
    </div>
  )
}

export default Title;