import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import WeightedMult from "../components/solutions/weightedMult"

const solution = props => {
  const choice = props.location.state.choice

  if (choice == `Weighted: multiple tests`) {
    return (
      <div>
        <WeightedMult />
      </div>
    )
  } else {
    return <h1>Pass!</h1>
  }
}

export default solution
