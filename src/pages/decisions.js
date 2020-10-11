import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import PageHeader from "../components/layout/pageHeader"
import PageFooter from "../components/layout/pageFooter"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const decisions = () => (
  <Layout>
    <PageHeader />
    <Heading>
      <h1 style={{ gridColumn: `1 / -1` }}>1. Weighted or Total Points?</h1>
      <Choice>
        <h2>i. Weighted: multiple tests</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
          minus excepturi laudantium quas, sed quo. Itaque cupiditate eum,
          veritatis commodi excepturi est nostrum ducimus non obcaecati illum.
          Doloribus, assumenda voluptas?
        </p>
        <Button to="/weighted-multiple">It me</Button>
      </Choice>
      <Choice>
        <h2>ii. Weighted: specific percentage</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
          minus excepturi laudantium quas, sed quo. Itaque cupiditate eum,
          veritatis commodi excepturi est nostrum ducimus non obcaecati illum.
          Doloribus, assumenda voluptas?
        </p>
        <Button
          to="/solution"
          state={{ choice: "Weighted: specific percentage" }}
        >
          It me
        </Button>
      </Choice>
      <Choice>
        <h2>iii. Total points: multiple tests</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
          minus excepturi laudantium quas, sed quo. Itaque cupiditate eum,
          veritatis commodi excepturi est nostrum ducimus non obcaecati illum.
          Doloribus, assumenda voluptas?
        </p>
        <Button to="/solution" state={{ choice: "Total: multiple tests" }}>
          It me
        </Button>
      </Choice>
      <Choice>
        <h2>iv. Total points: specific percentage</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
          minus excepturi laudantium quas, sed quo. Itaque cupiditate eum,
          veritatis commodi excepturi est nostrum ducimus non obcaecati illum.
          Doloribus, assumenda voluptas?
        </p>
        <Button to="/solution" state={{ choice: "Total: specific percentage" }}>
          It me
        </Button>
      </Choice>
    </Heading>
    <PageFooter />
  </Layout>
)

export default decisions

const Heading = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  padding-top: 10vh;
  h1 {
    font-size: 1.2rem;
    font-weight: 800;
    margin-bottom: 0;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`

const Choice = styled.div`
  display: grid;
  margin-bottom: 5vh;
  align-content: space-between;
  h1 {
    font-size: 1rem;
    font-weight: 800;
  }

  h2 {
    font-size: 1rem;
    font-weight: 400;
    margin-top: 10px;
  }

  p {
    font-size: 0.8rem;
  }
`

const Button = styled(Link)`
  display: grid;
  margin-top: 5vh;
  font-size: 0.8rem;
  border: solid 1px black;
  text-decoration: none;
  color: black;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
  transition: ease-in-out 0.3s;
  max-width: 50%;
  place-self: left;

  &:hover {
    color: white;
    background: black;
  }
`
