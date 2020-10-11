import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import { motion } from "framer-motion"

import PageHeader from "../components/layout/pageHeader"
import PageFooter from "../components/layout/pageFooter"

import Layout from "../components/layout/layout"

var Latex = require("react-latex")

const WeightedMult = () => {
  // State
  const [input, setInput] = useState({})
  const [final, setFinal] = useState(null)
  const [message, setMessage] = useState(null)

  // Formula
  const formula = `$$\\dfrac{(100 - P)R}{100}$$`

  //   Calc
  const calcTest = () => {
    setFinal(Math.round(((100 - input.p) * input.r) / 100))
  }

  // useEffect to check/update state for message
  useEffect(() => {
    setMessage(`This category should be reset in your gradebook to ${final}%.`)
  }, [final, message])

  //   Elegant AF change handler for inputs
  const handleInputChange = e => {
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    })
  }

  return (
    <div>
      <Helmet>
        <link
          href="//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.css"
          rel="stylesheet"
        />
      </Helmet>
      <Layout>
        <PageHeader />
        <Container
          initial={{ opacity: 0, x: 1000 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <SolutionHeading>
            2. Let's get your sorted - Weighted: Specific Percentage
          </SolutionHeading>
          <Rationale>
            <h3>i. Rationale</h3>
            <p>
              For this scenario, you'll need to add an additional assignment
              category to your gradebook (presumably called Exam). You'll make
              your exam worth <i>P</i> percent of your grade. For all other
              categories, if the previous percentage was <i>R</i>, the new
              percentage should be
            </p>
            <LaTeX>
              <Latex displayMode={true}>{formula}</Latex>
            </LaTeX>
          </Rationale>
          <Inputs>
            <h3>ii. I don't care: give me the numbers!</h3>
            <ol>
              <li>
                For what percent do you want your exam to count?{" "}
                <input type="number" name="p" onChange={handleInputChange} />
              </li>
              <li>
                Choose a category from your gradebook: what was it worth?{" "}
                <input type="number" name="r" onChange={handleInputChange} />
              </li>
            </ol>
            {input.r != null ? (
              <button onClick={calcTest}>Calculate</button>
            ) : (
              <div />
            )}
          </Inputs>
          {/* TODO: Hide based on inputs above */}
          <SolutionText style={final != null ? { opacity: 1 } : { opacity: 0 }}>
            <h3>iii. What do I do?</h3>
            <p>
              {message} You're going to need to repeat this process for your
              other gradebook categories.
            </p>
          </SolutionText>
        </Container>
        <PageFooter />
      </Layout>
    </div>
  )
}

export default WeightedMult

const Container = styled(motion.div)`
  p {
    color: black;
  }
`

const SolutionHeading = styled.h2`
  font-size: 1rem;
  font-weight: 800;
  margin-top: 10px;
`

const Rationale = styled.div`
  display: grid;
  h3 {
    font-size: 0.9rem;
    font-weight: 400;
    margin-top: 10px;
  }
  p {
    font-size: 0.8rem;
  }
`

const LaTeX = styled.div`
  margin-top: 5vh;
  margin-bottom: 5vh;
  place-self: center;
  font-size: 0.75rem;
`

const Inputs = styled.div`
  display: grid;
  h3 {
    font-size: 0.9em;
    font-weight: 400;
    margin-top: 10px;
  }

  ol {
    list-style-type: lower-alpha;
    padding-left: 10;

    li {
      font-size: 0.8rem;
    }
  }

  input {
    font-family: "Old Standard TT", serif;
    font-size: 0.8rem;
    margin-left: 10px;
    border: none;
    border-bottom: solid 1px black;
  }

  button {
    border: solid 1px black;
    font-family: "Old Standard TT", serif;
    font-size: 0.75rem;
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
    font-size: 0.75rem;
    font-weight: 400;
    margin-top: 10px;
  }

  p {
    font-size: 0.8rem;
  }

  strong {
    font-weight: 800;
  }
`
