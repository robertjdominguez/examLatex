import React, { useState } from "react"
import styled from "styled-components"
import PageHeader from "../layout/pageHeader"
import PageFooter from "../layout/pageFooter"

import Layout from "../layout/layout"

var Latex = require("react-latex")

const WeightedMult = () => {
  // State
  const [input, setInput] = useState({})
  const [final, setFinal] = useState(null)
  const [message, setMessage] = useState(null)

  //   Calc
  const calcTest = () => {
    setFinal(
      Math.round(((input.m * input.p) / (100 * input.m + 100 * input.n)) * 100)
    )
    final <= 20
      ? setMessage("With the above values, you're good!")
      : setMessage(
          "This exam is worth more than 20%. You need to adjust the number of tests for which this will count."
        )
  }

  //   Elegant AF change handler for inputs
  const handleInputChange = e => {
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    })
  }

  return (
    <div>
      <Layout>
        <PageHeader />
        <SolutionHeading>
          2. Let's get your sorted - Weighted: Multiple Tests
        </SolutionHeading>
        <Rationale>
          <h3>i. Rationale</h3>
          <p>
            Suppose tests count <i>P</i> percent of the final, and you’re giving{" "}
            <i> N</i> equally weighted tests throughout the semester, and your
            exam is going to be worth <i>M</i>-times as much as a regular test.
            Then the percentage of the semester grade for which your final exam
            counts is
          </p>
          <LaTeX>
            <Latex displayMode={true}>$$(MP) \div (100M + 100N)$$</Latex>
          </LaTeX>
        </Rationale>
        <Inputs>
          <h3>ii. I don't care: give me the numbers!</h3>
          <ol>
            <li>
              Currently, what’s the weight (percentage) of your tests?{" "}
              <input type="number" name="p" onChange={handleInputChange} />
            </li>
            <li>
              How many weighted tests are you giving this semester?{" "}
              <input type="number" name="n" onChange={handleInputChange} />
            </li>
            <li>
              How many times more do you want this exam to count?{" "}
              <input type="number" name="m" onChange={handleInputChange} />
            </li>
          </ol>
          {input.m != null ? (
            <button onClick={calcTest}>Calculate</button>
          ) : (
            <div />
          )}
        </Inputs>
        {/* TODO: Hide based on inputs above */}
        <SolutionText style={final != null ? { opacity: 1 } : { opacity: 0 }}>
          <h3>iii. What do I do?</h3>
          <p>
            Based on the information you entered, your exam should count for{" "}
            <strong>{final}%</strong> of the final grade. {message}
          </p>
        </SolutionText>
        <PageFooter />
      </Layout>
    </div>
  )
}

export default WeightedMult

const SolutionHeading = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 10px;
`

const Rationale = styled.div`
  display: grid;
  h3 {
    font-size: 1.2rem;
    font-weight: 400;
    margin-top: 10px;
  }
`

const LaTeX = styled.div`
  margin-top: 60px;
  margin-bottom: 60px;
  place-self: center;
`

const Inputs = styled.div`
  display: grid;
  h3 {
    font-size: 1.2rem;
    font-weight: 400;
    margin-top: 10px;
  }

  ol {
    list-style-type: lower-alpha;
    padding-left: 10;
  }

  input {
    font-family: "Old Standard TT", serif;
    font-size: 1rem;
    margin-left: 10px;
    border: none;
    border-bottom: solid 1px black;
  }

  button {
    border: solid 1px black;
    font-family: "Old Standard TT", serif;
    font-size: 1.2rem;
    background-color: transparent;
    place-self: end;
    padding-right: 40px;
    padding-left: 40px;
    padding-top: 10px;
    padding-bottom: 10px;
    transition: ease-in-out 0.3s;
    cursor: pointer;

    &:hover {
      background: black;
      color: white;
    }
  }
`

const SolutionText = styled.div`
  display: grid;
  margin-top: 60px;
  transition: ease-in-out 0.3s;
  h3 {
    font-size: 1.2rem;
    font-weight: 400;
    margin-top: 10px;
  }

  strong {
    font-weight: 800;
  }
`
