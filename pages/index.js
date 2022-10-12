import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import React, { useState, useRef, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>PayTic Connect</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="px-2 px-sm-4 px-lg-5">

          <Container fluid className="vh-100 d-flex align-items-center px-0">
            <Row className="vh-80">
              <Col lg={6}>
               <h1 className="">
               A smarter way to manage card programs
               </h1>
              </Col>
            </Row>
          </Container>

      </main>
      <Footer />
    </div>
  )
}
