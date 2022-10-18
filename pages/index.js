import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import React, { useState, useRef, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';

export default function Home() {

  const [show, setShowVideo] = useState(false);

  const handleCloseVideo = () => setShowVideo(false);
  const handleShowVideo = () => setShowVideo(true);

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
                <Button href="https://payticconnect-21545779.hubspotpagebuilder.com/see-a-demo" className="w-100 d-lg-none">
                  BOOK A DEMO
                </Button>
              </Col>
              <Col xs={12} className="d-flex justify-content-center">
                <Button href="#how-it-works" variant="secondary" className="w-100 d-lg-none arrow-down">
                  LEARN MORE
                </Button>
              </Col>
              <Col xs={12} className="d-flex justify-content-center">
                <Button href="#how-it-works" variant="secondary" className="d-none d-lg-block arrow-down">
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
                <video className="w-100 drop-shadow border-radius" autoPlay loop muted >
                  <source src="/paytic-video-clip.mp4" type='video/mp4' />
                </video>
              </Col>
              <Col xxl={3} className="">
                  <Row className="ps-xxl-4 g-4 pt-5 pt-xxl-0 sticky-cards">
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
              <Col lg={6} className="d-flex align-items-center justify-content-center">
                <div>
                  <Image src="/paytic-infographic.svg" className="w-100 d-none d-lg-block mt-3"/>
                </div>
              </Col>
              <Col lg={6} className="d-flex align-items-center">
                <div>
                  <h6 className="text-muted pt-3 mb-4 border-top">
                    Why it works
                  </h6>
                  <h3 className="mb-4">
                  Connect your Data, Automate Processes
                  </h3>
                  <p className="text-muted mb-4">
                  While the cardholder & acquirer-facing side of the payments ecosystem has seen significant technology innovation, the issuer-facing or back-office side has remained largely stagnant. To get the work done, there's generally a lack of expertise, silos of data and tedious manual work. <span className="bold">PayTic Connect</span> connects your data and automates processes, to give you more time to focus on your business.
                  </p>
                  <Image src="/paytic-infographic.svg" className="w-100 d-lg-none pt-3 pb-5"/>
                  <Table striped="columns" className="mb-4 border-top">
                    <thead>
                      <tr>
                        <th className="w-50 regular">Features</th>
                        <th className="w-50 green medium">Benefits</th>
                      </tr>
                    </thead>
                    <tbody className="dark-grey">
                      <tr className="small text-muted">
                        <td>
                          <Row>
                            <Col xs={10}>
                              <p className="m-0 p-0">
                              Automation of critical processes relayed to reconciliation, fraud monitoring and chargebacks
                              </p>
                            </Col>
                            <Col xs={2} className="d-flex align-items-center justify-content-end">
                              <div>
                                <Image src="/chevron-right.svg" className="w-50" />
                              </div>
                            </Col>
                          </Row>
                        </td>
                        <td className="align-middle">Free up time for more value-add activities and your card program more <span className="semi-bold ">efficiently</span></td>
                      </tr>
                      <tr className="small text-muted">
                        <td>
                        <Row>
                            <Col xs={10}>
                              <p className="m-0 p-0">
                              Embedded transitioning of cross-functional processed within one system of record
                              </p>
                            </Col>
                            <Col xs={2} className="d-flex align-items-center justify-content-end">
                              <div>
                                <Image src="/chevron-right.svg" className="w-50" />
                              </div>
                            </Col>
                          </Row>
                          </td>
                        <td className="align-middle">Remove blind spots and help with regulatory <span className="semi-bold ">compliance</span></td>
                      </tr>
                      <tr className="small text-muted">
                        <td>
                        <Row>
                            <Col xs={10}>
                              <p className="m-0 p-0">
                              Omni-channel program management solution already integrated with processors and payment networks
                              </p>
                            </Col>
                            <Col xs={2} className="d-flex align-items-center justify-content-end">
                              <div>
                                <Image src="/chevron-right.svg" className="w-50" />
                              </div>
                            </Col>
                          </Row>
                          </td>
                        <td className="align-middle">Increase your <span className="semi-bold ">capacity</span> to launch and scale new payment programs</td>
                      </tr>
                      <tr className="small text-muted">
                        <td>
                          <Row>
                            <Col xs={10}>
                              <p className="m-0 p-0">
                              A Saas, scalable approach to providing an end-to-end solution
                              </p>
                            </Col>
                            <Col xs={2} className="d-flex align-items-center justify-content-end">
                              <div>
                                <Image src="/chevron-right.svg" className="w-50" />
                              </div>
                            </Col>
                          </Row> 
                        </td>
                        <td className="align-middle">Allow us to focus on the technology, while you focus on business <span className="semi-bold ">outcomes</span></td>
                      </tr>
                    </tbody>
                  </Table>               
                  <Button href="https://payticconnect-21545779.hubspotpagebuilder.com/see-a-demo" className="w-100 mb-3 d-none">
                    BOOK A DEMO
                  </Button>
                  <Button onClick={handleShowVideo} className="w-100 video mt-2">
                    WATCH VIDEO
                  </Button>
                </div>
              </Col>
            </Row>
            </div>
          </Container>
        </section>

        <Modal show={show} onHide={handleCloseVideo} size="lg" centered>
          <Modal.Header closeButton>
            <Modal.Title className="h6 text-muted">
            Watch video
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="">
              <div class="embed-responsive vh-40 d-flex align-items-center justify-content-center">
                <iframe class="embed-responsive-item w-100 h-100" src="https://www.youtube.com/embed/Mo2oNkcBB2c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="dark" onClick={handleCloseVideo}>
              CLOSE
            </Button>
          </Modal.Footer>
        </Modal>

        <section id="about">
          <Container fluid className="px-xl-5 px-4 px-lg-5 py-5">
            <div className="px-xl-5 py-5">
            <Row className="px-xl-5 py-3">
              <Col xs={12} className="mb-5">
                  <h6 className="text-muted pt-3 mb-4 border-top">
                    About
                  </h6>
                  <h2 className="">
                  Empowering Payment Program Managers to Modernize Their Back-Office
                </h2>
              </Col>
              <Col lg={4} xl={3} className="mb-5 mb-lg-0">
                <div className="sticky">
                <h6 className="gold-text medium pt-3 mb-3 border-top-gold">
                    OUR MISSION
                  </h6>
                  <p className="lead ">
                Help banks, credit unions, and fintech companies modernize their payment program management functions via SaaS product
                </p>
                  <p className="text-muted">
                We worked closely with many issuers and program managers over the past decade. We learned from you, and we want to give back. Contrary to all other industries, we learned that there is a lack of dedicated solutions that answer the complex needs of payments management. We believe that easing the processes will enable our partners to scale and bring more disruptive products to the market.
                </p>
                </div>
              </Col>
              <Col lg={8} xl={9} className="">
              <h6 className="green medium pt-3 mb-4 border-top-green">
                    LEADERSHIP TEAM
              </h6>
                <Row className="g-4">
                <Col xs={12}>
                    <div className="border-grey border-radius p-4">
                      <Row>
                        <Col md={3}>
                          <Image src="/Imad_idy.png" className="w-100 mb-4 mb-md-0"/>
                        </Col>
                        <Col md={9} className="d-flex align-items-center">
                          <div>
                            <h4 className="mb-0">
                            Imad Boumahdi
                            </h4>
                            <p className="">
                            Founder & CEO
                            </p>
                            <p className="text-muted pe-xl-5">
                            Imad founded PayTic in 2020 to power the industry with dedicated technologies that help BIN sponsors and their affiliates in complying with the industry standards and managing their day-to-day operations including chargebacks, frauds, customer support, reconciliation, and more. He has 15+ years experience in Payment Cards Processing including credit, debit, prepaid cards, mobile payments, and processing operations.
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div className="border-grey border-radius p-4">
                      <Row>
                        <Col md={3}>
                          <Image src="/GLAW_idg.png" className="w-100 mb-4 mb-md-0"/>
                        </Col>
                        <Col md={9} className="d-flex align-items-center">
                          <div>
                            <h4 className="mb-0">
                            Gerry Lawless
                            </h4>
                            <p className="">
                            Chief Product Officer
                            </p>
                            <p className="text-muted pe-xl-5">
                            Gerry is responsible for product strategy, product marketing and product management. Over the span of 20 years, Gerry has held various product leadership roles at iWave and IBM. He has a passion for solving client problems with technology, and he has helped build several award-winning products.
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div className="border-grey border-radius p-4">
                      <Row>
                        <Col md={3}>
                          <Image src="/DSC_0562_idy.png" className="w-100 mb-4 mb-md-0"/>
                        </Col>
                        <Col md={9} className="d-flex align-items-center">
                          <div>
                            <h4 className="mb-0">
                            Ayyoub Rqibi
                            </h4>
                            <p className="">
                            VP of Client Success
                            </p>
                            <p className="text-muted pe-xl-5">
                            Ayyoub is responsible for ensuring that PayTic's clients are getting maximum value from their SaaS subscription.  Before PayTic Ayyoub managed payment programs for over 50 banks and financial institutions in Europe, Asia, and Americas. He has worked closely with executives at these institutions to monitor performance, improve processes, and optimize their operations.
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div className="border-grey border-radius p-4">
                      <Row>
                        <Col md={3}>
                          <Image src="/laila.png" className="w-100 mb-4 mb-md-0"/>
                        </Col>
                        <Col md={9} className="d-flex align-items-center">
                          <div>
                            <h4 className="mb-0">
                            Laila Fetjah
                            </h4>
                            <p className="">
                            CTO
                            </p>
                            <p className="text-muted pe-xl-5">
                            Laila is responsible for the development, security and the scalability of the PayTic product. Laila holds a doctorate in computer science and a master's degree in computer systems from the University of Quebec in Montreal. She has worked as an IT manager/director at several IT service companies and as a University professor at Hassan II University in Morocco.                            </p>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
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
