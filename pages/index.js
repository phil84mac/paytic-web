import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import React, { useState, useRef, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

export default function Home() {
  return (
      <>
      <Head>
        <title>PayTic Connect</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      
      <main className>
        
        <section id="hero" className="bg-shape-top px-0">
          <Container fluid className="vh-100 px-xl-5 py-5 px-4 px-lg-5 bg-hero">
            <div className="px-xl-5 py-5">
            <Row className="vh-65 mb-4 px-xl-5 py-3">
              <Col lg={6} className="mb-5">
               <h1 className="mt-0">
               A smarter way to manage card programs
               </h1>
              </Col>
              <Col lg={6} className="mt-auto multiply">
               <p className="lead border-top pt-3">
               We help payment card issuers (banks, credit unions & fintechs) modernize their program management functions including reconciliation, chargebacks and compliance via an easy to use, secure SaaS solution. 
               </p>
               </Col>
            </Row>
            <Row>
              <Col xs={12} className="d-flex justify-content-center mb-3">
                <Button href="/" className="w-100 d-lg-none">
                  BOOK A DEMO
                </Button>
              </Col>
              <Col xs={12} className="d-flex justify-content-center">
                <Button href="/" variant="secondary" className="w-100 d-lg-none arrow-down">
                  LEARN MORE
                </Button>
              </Col>
              <Col xs={12} className="d-flex justify-content-center">
                <Button href="/" variant="secondary" className="d-none d-lg-block arrow-down">
                  LEARN MORE
                </Button>
              </Col>
            </Row>  
            </div>
          </Container>
        </section>

        <section id="how-it-works">
          <Container fluid className="vh-100 px-xl-5 px-4 px-lg-5 py-5">
            <div className="px-xl-5 py-5">
            <Row className="px-xl-5 py-3">
              <Col lg={9} className="">
                <h6>

                </h6>
                <h2>
                  
                </h2>

              </Col>
              <Col lg={3} className="">

               </Col>
            </Row>
            </div>
          </Container>
        </section>
        
      </main>

      <Footer />
      </>
  )
}
