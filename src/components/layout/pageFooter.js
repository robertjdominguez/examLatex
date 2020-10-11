import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const PageFooter = () => (
  <Heading>
    <h4>
      <Link to="/">Start Over</Link>
    </h4>
    <h4>October 2020</h4>
    <h4>
      <Link to="https://www.dominguezdev.com" target="_blank">
        Built by...
      </Link>
    </h4>
  </Heading>
)

export default PageFooter

const Heading = styled.div`
  display: grid;
  margin-top: 10vh;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;
  border-top: solid 1px black;

  h4 {
    font-size: 0.5rem;
    margin-top: 10px;
  }

  a {
    text-decoration: none;
    color: black;
    border-bottom: solid 1px transparent;
    transition: ease-in-out 0.3s;

    &:hover {
      border-bottom: solid 1px black;
    }
  }
`
