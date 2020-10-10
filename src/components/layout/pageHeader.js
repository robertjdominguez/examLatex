import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const PageHeader = () => (
  <Heading>
    <h4>The Weight of Exams?</h4>
    <h4>October 2020</h4>
    <h4>Vol. XVI, No. 1</h4>
  </Heading>
)

export default PageHeader

const Heading = styled.div`
  display: grid;
  margin-bottom: 10vh;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;
  border-bottom: solid 1px black;

  h4 {
    font-size: 1rem;
  }
`
