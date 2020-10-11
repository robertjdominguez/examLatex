import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { motion } from "framer-motion"

import Layout from "../components/layout/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import PageFooter from "../components/layout/pageFooter"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Heading initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h1>The Weight of Exams?</h1>
      <h3>The Math People</h3>
      <h4>The Altamont School</h4>
      <h3>October 13, 2020</h3>
    </Heading>
    <Abstract initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h4>Abstract</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cum
        libero quia tempore corporis id in, illo obcaecati necessitatibus
        excepturi consequuntur suscipit sequi similique fugiat esse sit itaque
        modi velit minima facilis eum minus vero accusantium! Officia nihil
        ipsam, consectetur fugiat quibusdam recusandae quidem? Odit, labore
        error recusandae expedita eius commodi quisquam obcaecati illo cumque
        delectus, laudantium, explicabo atque tenetur possimus soluta quaerat!
        Sequi eius cumque, eum et quam ea. Architecto nisi ab, eaque, officiis
        velit quaerat eligendi, qui voluptates suscipit recusandae commodi sint!
        Possimus eligendi excepturi id voluptatum veritatis iusto dolorem, sint
        obcaecati repudiandae vel incidunt consequatur magnam omnis? Dolorum,
        consectetur animi? Sequi eius cumque, eum et quam ea. Architecto nisi
        ab, eaque, officiis velit quaerat eligendi, qui voluptates suscipit
        recusandae commodi sint! Possimus eligendi excepturi id voluptatum
        veritatis iusto dolorem, sint obcaecati repudiandae vel incidunt
        consequatur magnam omnis? Dolorum, consectetur animi?
      </p>
      <Button to="/decisions">Help Me</Button>
    </Abstract>
    <PageFooter />
  </Layout>
)

export default IndexPage

const Heading = styled(motion.div)`
  display: grid;
  text-align: center;
  padding-top: 10vh;
  h1 {
    /* font-size: 4.5rem; */
    font-size: 2.5em;
    font-weight: 800;
  }

  h3 {
    /* font-size: 2.75rem; */
    font-size: 1.5em;
    font-weight: 800;
    margin-top: 0;
  }

  h4 {
    /* font-size: 1.5rem; */
    font-size: 1em;
    font-weight: 600;
    margin-top: 0;
  }
`

const Abstract = styled(motion.div)`
  display: grid;
  margin-top: 10vh;
  h4 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 0;
    place-self: center;
  }

  p {
    font-size: 0.8rem;
  }
`
const Button = styled(Link)`
  display: grid;
  margin-top: 5vh;
  border: solid 1px black;
  text-decoration: none;
  color: black;
  font-size: 0.8rem;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
  transition: ease-in-out 0.3s;
  max-width: 50%;
  place-self: center;

  &:hover {
    color: white;
    background: black;
  }
`
