import React, {Component} from "react"
import { render } from "react-dom"
import { Router, Link } from "@reach/router"

export class Archives extends Component{
  render() {
    return (
        <div>
          <h4>Archives</h4>
          <nav>
            <Link to="/Archives"></Link>
          </nav>
        </div>
    )
  }
}

export default Archives;