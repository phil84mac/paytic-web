import React, { useState, useEffect, MouseEvent, Component, useRef} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <div className="px-lg-5 w-100 d-none d-lg-block top-nav py-3">
      <Container fluid className="px-xl-5">
          <Row className="px-xl-5">
            <Col xs={12} className=" d-flex align-items-center justify-content-between">
        
              <div className="pntr d-flex align-items-center">
                <Link href="/">
                  <Image fluid src="/paytic-logo-green.svg" className="w-60" alt="PayTic Logo"/>
                </Link>
              </div>
                
              <div className="d-flex align-items-center">
                <Button href="#how-it-works" variant="link" className="px-3 mx-2 text-decoration-none text-uppercase">
                  How it works
                </Button>
                <Button href="#who-its-for" variant="link" className="px-3 mx-2 text-decoration-none text-uppercase">
                  Who it's for
                </Button>
                <Button href="#about" variant="link" className="px-3 ms-2 me-3 text-decoration-none text-uppercase">
                  About
                </Button>
                <Button href="https://payticconnect-21545779.hubspotpagebuilder.com/see-a-demo" className="ms-3 text-decoration-none text-uppercase">
                  Book a demo
                </Button>
              </div>
            </Col>
          </Row>
      </Container>
    </div>

    <div className="px-4 w-100 d-lg-none top-nav py-3" id="home">
      <Container fluid className="px-0">
          <Row className="">
            <Col xs={12} className=" d-flex align-items-center justify-content-between header-pad">
        
              <div className="pntr d-flex align-items-center">
                <Link href="/">
                  <Image fluid src="/paytic-logo-green.svg" className="w-60" alt="PayTic Logo"/>
                </Link>
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
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body >
          <div className="p-1 d-flex align-items-start flex-column bd-highlight h-100">
                <Button href="#how-it-works" onClick={handleClose} variant="link" className="w-100 px-0 my-3 text-decoration-none text-uppercase ">
                  How it works
                </Button>
                <Button href="#who-its-for" onClick={handleClose} variant="link" className="w-100 px-0 my-3 text-decoration-none text-uppercase ">
                  Who it's for
                </Button>
                <Button href="#about" onClick={handleClose} variant="link" className="w-100 px-0 my-3 text-decoration-none text-uppercase ">
                  About
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
