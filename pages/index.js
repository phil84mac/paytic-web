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
      <div className="bg-shape-bottom">
      <main className>
        
        <section id="hero" className="bg-shape-top px-0 py-lg-4">
          <Container fluid className="px-xl-5 py-5 px-4 px-lg-5 bg-hero">
            <div className="px-xl-5 py-5">
            <Row className="vh-65 mb-4 px-xl-5 pt-3">
              <Col lg={6} className="mb-md-5">
               <h1 className="mt-0">
               A smarter way to manage card programs
               </h1>
              </Col>
              <Col lg={6} className="mt-auto multiply">
               <p className="lead text-muted border-top pt-3">
               We help payment card issuers (banks, credit unions & fintechs) modernize their program management functions including reconciliation, chargebacks and compliance via an easy to use, secure SaaS solution. 
               </p>
               </Col>
            </Row>
            <Row className="mt-xs-5">
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
          <Container fluid className="px-xl-5 px-4 px-lg-5 py-5">
            <div className="px-xl-5 py-5">
            <Row className="px-xl-5 py-3">
              <Col xxl={9} className="">
                <h6 className="text-muted pt-3 mb-4 border-top">
                  How it works
                </h6>
                <h2 className="mb-3 mb-5">
                  PayTic enables its clients to focus on growing their business
                </h2>
                <Image src="/app-feature-placeholder.png" className="w-100 drop-shadow border-radius"/>
              </Col>
              <Col xxl={3} className="d-flex align-items-center">
                  <Row className="ps-xxl-4 g-4 pt-5 pt-xxl-0">
                    <Col sm={4} xxl={12}>
                      <div className="brand-card p-4">
                        <h4>
                        Collect and Organize Transaction Data
                        </h4>
                        <p className="text-muted">
                        Reconcile payments, remove blind spots and help with regulatory compliance
                        </p>
                      </div>
                    </Col>
                    <Col sm={4} xxl={12}>
                      <div className="brand-card p-4">
                        <h4>
                        Automate Critical Processes
                        </h4>
                        <p className="text-muted">
                        Free up time for more value-add activities and manage your program across functions
                        </p>
                      </div>
                    </Col>
                    <Col sm={4} xxl={12}>
                      <div className="brand-card p-4">
                        <h4>
                        Apply Dashboards and Actionable Intel
                        </h4>
                        <p className="text-muted">
                        With more oversight, you will be more confident in launching and scaling card programs
                        </p>
                      </div>
                    </Col> 
                  </Row>
              </Col>
            </Row>
            </div>
          </Container>
        </section>

        <section id="who-its-for">
          <Container fluid className="px-xl-5 px-4 px-lg-5 py-5">
            <div className="px-xl-5 py-5">
            <Row className="px-xl-5 py-3">
              <Col md={6} className="d-flex align-items-center">
                <Image src="/paytic-infographic.svg" className="w-100 d-none d-md-block pe-lg-5"/>
              </Col>
              <Col md={6} className="d-flex align-items-center">
                <div>
                  <h6 className="text-muted pt-3 mb-4 border-top">
                    Who it's for
                  </h6>
                  <h3 className="mb-3 mb-5">
                  Connect your Data, Automate Processes
                  </h3>
                  <Image src="/paytic-infographic.svg" className="w-100 d-md-none pt-3 pb-5"/>
                  <p className="text-muted lead">
                  While the cardholder & acquirer-facing side of the payments ecosystem has seen significant technology innovation, the issuer-facing or back-office side has remained largely stagnant. To get the work done, there's generally a lack of expertise, silos of data and tedious manual work. PayTic Connect connects your data and automates processes, to give you more time to focus on your business.
                  </p>
                </div>
              </Col>
            </Row>
            </div>
          </Container>
        </section>
        
      </main>
      
      <Footer />
      </div>
      </>
  )
}
