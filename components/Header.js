import React, { useState, useEffect, MouseEvent, Component, useRef} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Dropdown from 'react-bootstrap/Dropdown';

export default function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <div className="px-4 px-lg-5 w-100 d-none d-md-block top-nav py-3">
      <Container fluid className="px-xl-5">
          <Row className="px-xl-5">
            <Col xs={12} className=" d-flex align-items-center justify-content-between px-0 px-xl-2">
        
              <div className="pntr d-flex align-items-center px-xl-1">
                <Link href="/">
                  <Image fluid src="/paytic-logo-green.svg" className="w-60" alt="PayTic Logo"/>
                </Link>
              </div>
                
              <div className="d-flex align-items-center px-xl-1">
                <Button href="#how-it-works" variant="link" className="px-3 mx-lg-2 text-decoration-none text-uppercase">
                  How it works
                </Button>
                <Button href="#who-its-for" variant="link" className="px-3 mx-lg-2 text-decoration-none text-uppercase">
                 Why it works
                </Button>
                <Dropdown>
                  <Dropdown.Toggle variant="link" className="px-3 ms-lg-2 me-lg-3 text-decoration-none text-uppercase">
                    ABOUT
                  </Dropdown.Toggle>
 
                  <Dropdown.Menu variant="dark" align="end">
                    <Dropdown.Item href="#about-us">About Us</Dropdown.Item>
                    <Dropdown.Item href="#news">News</Dropdown.Item>
                    <Dropdown.Item href="#careers">Careers</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Button href="https://payticconnect-21545779.hubspotpagebuilder.com/see-a-demo" className="ms-3 text-decoration-none text-uppercase">
                  Book a demo
                </Button>
              </div>
            </Col>
          </Row>
      </Container>
    </div>

    <div className="px-4 w-100 d-md-none top-nav py-3" id="home">
      <Container fluid className="px-0">
          <Row className="">
            <Col xs={12} className=" d-flex align-items-center justify-content-between pe-0">
        
              <div className="pntr d-flex align-items-center">
                <a href="/">
                  <Image fluid src="/paytic-logo-green.svg" className="w-60" alt="PayTic Logo"/>
                </a>
              </div>
                
              <div className="d-flex align-items-center">
                <Button variant="link" onClick={handleShow} className="px-2">
                  <Image fluid src="/menu-button.svg" className="w-60" alt="PayTic Logo"/>
                </Button>
              </div>
            </Col>
          </Row>
      </Container>
    </div>

    <Offcanvas show={show} onHide={handleClose} placement="end" restoreFocus={false}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="h6 text-muted">Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body >
          <div className="p-1 d-flex align-items-start flex-column bd-highlight h-100 ">
                <Button href="#how-it-works" onClick={handleClose} variant="link" className="w-100 menu px-0 my-3 text-decoration-none text-uppercase">
                  How it works
                </Button>
                <Button href="#who-its-for" onClick={handleClose} variant="link" className="w-100 menu px-0 my-3 text-decoration-none text-uppercase ">
                  Why it works
                </Button>
                <Button href="#about-us" onClick={handleClose} variant="link" className="w-100 menu px-0 my-3 text-decoration-none text-uppercase ">
                  About Us
                </Button>
                <Button href="#news" onClick={handleClose} variant="link" className="w-100 menu px-0 my-3 text-decoration-none text-uppercase ">
                  News
                </Button>
                <Button href="#careers" onClick={handleClose} variant="link" className="w-100 menu px-0 my-3 text-decoration-none text-uppercase ">
                  Careers
                </Button>
                <Button href="https://payticconnect-21545779.hubspotpagebuilder.com/see-a-demo" className="mt-auto bd-highlight w-100 text-decoration-none text-uppercase">
                  Book a demo
                </Button>
            </div>
        </Offcanvas.Body>
    </Offcanvas>

    </>
  )
}
