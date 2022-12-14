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

  const [showVideo, setShowVideo] = useState(false);

  const handleCloseVideo = () => setShowVideo(false);
  const handleShowVideo = () => setShowVideo(true);

  const [showCareer1, setShowCareer1] = useState(false);

  const handleCloseCareer1 = () => setShowCareer1(false);
  const handleShowCareer1 = () => setShowCareer1(true);

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
            <Row className="vh-70 mb-4 px-xl-5 pt-md-3">
              <Col md={6} className="mb-md-5">
               <h1 className="mt-0">
               A smarter way to manage card programs
               </h1>
              </Col>
              <Col md={6} className="mt-auto multiply">
               <p className="lead text-muted border-top pt-3">
               We help payment card issuers (banks, credit unions & fintechs) modernize their program management functions including reconciliation, chargebacks and compliance via an easy to use, secure SaaS solution. 
               </p>
               </Col>
            </Row>
            <Row className="mt-xs-5">
              <Col xs={12} className="d-flex justify-content-center mb-3">
                <Button href="https://payticconnect-21545779.hubspotpagebuilder.com/see-a-demo" className="w-100 d-md-none">
                  BOOK A DEMO
                </Button>
              </Col>
              <Col xs={12} className="d-flex justify-content-center">
                <Button href="#how-it-works" variant="secondary" className="w-100 d-md-none arrow-down">
                  LEARN MORE
                </Button>
              </Col>
              <Col xs={12} className="d-flex justify-content-center">
                <Button href="#how-it-works" variant="secondary" className="d-none d-md-block arrow-down">
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
                  <h2 className="mb-4">
                  Connect your Data, Automate Processes
                  </h2>
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

        <Modal show={showVideo} onHide={handleCloseVideo} size="lg" centered>
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

        <section id="about-us">
          <Container fluid className="px-xl-5 px-4 px-lg-5 py-5">
            <div className="px-xl-5 py-5">
            <Row className="px-xl-5 py-3">
              <Col xs={12} className="mb-5">
                  <h6 className="text-muted pt-3 mb-4 border-top">
                    About Us
                  </h6>
                  <h2 className="">
                  Empowering Payment Program Managers to Modernize Their Back-Office
                </h2>
              </Col>
              <Col lg={4} xxl={3} className="mb-4 mb-lg-0">
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
              <Col lg={8} xxl={9} id="leadership-team">
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
            <Row className="px-xl-5 py-3 mt-4">
                <Col lg={8} xxl={9} id="news">
                    <h6 className="text-muted pt-3 mb-4 border-top">
                      NEWS
                    </h6>
                    <div className="border-radius border-grey p-4 mb-5">
                      <Row>
                        <Col md={5}>
                          <Image src="/PayTicSign.png" className="w-100 mb-4 mb-md-0" alt="PayTic Sign"/>
                        </Col>
                        <Col md={7}>
                          <div className="d-flex align-items-start flex-column bd-highlight h-100">
                            <a></a>
                            <h3 className="">
                            Build Ventures leads C$2.95m funding of fintech startup PayTic
                            </h3>
                            <p className="text-muted small mb-4"> 
                            Source: Venture Capital Journal
                            </p>
                            <Button href="https://www.venturecapitaljournal.com/?p=20000003657824" target="_blank" variant="secondary" className="mt-auto px-3 text-decoration-none text-uppercase">
                            READ ARTICLE
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    </div>
                </Col>
                <Col lg={4} xxl={3} id="careers">
                    <h6 className="text-muted pt-3 mb-4 border-top">
                      CAREERS
                    </h6>
                    <div className="d-flex align-items-start flex-column bd-highlight border-radius border-grey p-4">
                      <h4>
                      Director of Product
                      </h4>
                      <p className="text-muted small">
                      We are currently looking for an experienced product leader to help direct the product
                      strategy and roadmap, manage product and UX team, drive and enforce agile development
                      principles and work cross-functionally with all teams to push products forward.
                      </p>
                      <Button onClick={handleShowCareer1} variant="secondary" className="mt-auto px-3 text-decoration-none text-uppercase">
                      LEARN MORE
                      </Button>
                    </div>
                </Col>
              </Row>
            </div>
          </Container>
        </section>

        <Modal show={showCareer1} onHide={handleCloseCareer1} scrollable size="lg" centered>
          <Modal.Header closeButton>
            <Modal.Title className="h6 text-muted">
            CAREERS
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <h3>
                Director of Product
              </h3>
              <p className="text-muted">
              PayTic Inc is a fast-growing SaaS company that offers an innovative product, which helps banks,
              FinTechs and credit unions modernize their back-office payment programs and grow their
              business. We are currently looking for an experienced product leader to help direct the product
              strategy and roadmap, manage product and UX team, drive and enforce agile development
              principles and work cross-functionally with all teams to push products forward. The Director of
              Product reports to the CPO and will be a member of the senior management team.
              </p>
              <hr />
              <Row>
                <Col md={6}>
                  <h5>
                  Key Responsibilities
                  </h5>
                  <ul className="text-muted small">
                    <li>
                    Assist with development of the product roadmap and strategy
                    </li>
                    <li>
                    Manage new members of the product team and partner with engineering to prioritize
                    development, following agile principles
                    </li>
                    <li>
                    Direct a cross-functional product portfolio process, working collaboratively with
                    engineering, client success and the executive team
                    </li>
                    <li>
                    Balance resource allocation between immediate opportunities that will drive short term
                    adoption and revenue, against longer term strategic initiatives
                    </li>
                    <li>
                    Understand, identify, and balance a product that meets the demands of multiple client
                    types (banks, FinTechs, credit unions) and market segments
                    </li>
                  </ul>
                </Col>
                <Col md={6}>
                <h5>
                  Qualifications
                  </h5>
                  <ul className="text-muted small">
                    <li>
                    As the ideal candidate, you are a leader with at least 5+ years of experience in a product
                    management role including 3+ years as a product owner in a scrum or agile
                    development model
                    </li>
                    <li>
                    You can demonstrate a record of ???ideation to execution??? in a SaaS environment and
                    have experience in B2B SaaS business models
                    </li>
                    <li>
                    You are someone who has direct experience with end-to-end product lifecycles in agile
                    development environments
                    </li>
                    <li>
                    You are data-driven, highly motivated to delight the end user, and have a track record of
                    identifying user challenges and turning them into business opportunities
                    </li>
                    <li>
                    Experience in payments industry is highly valuable
                    </li>
                  </ul>
                </Col>
              </Row>
              <hr className="mt-0"/>
              <p className="text-muted small regular">
              PayTic is an organization with a vision; revolutionize the back-office of payment program
              management. We understand that better workplaces are built around respect; respecting the
              client, respecting the product, and most importantly, respecting and supporting each other. We
              offer competitive salaries, flexible hours, generous vacation days, personal time off when needed and
              will equip you with whatever gear you need.
              </p>
              <hr />
              <p className="medium">
              Apply now by emailing your resume and cover letter to <a href="mailto:info@payticconnect.com" className="green medium">info@payticconnect.com</a>
              </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="dark" onClick={handleCloseCareer1}>
              CLOSE
            </Button>
          </Modal.Footer>
        </Modal>
        
      </main>
      
      <Footer />
      </div>
      </>
  )
}
