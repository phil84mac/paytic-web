import React, { useState, useEffect, MouseEvent, Component, useRef} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

export default function Footer() {
  return (
    <>
      <footer className="vh-40 d-flex align-items-end">
        <div className="px-3 px-lg-5 w-100 py-3">
        <Container fluid className="px-xl-5">
          <Row className="px-xl-5">
            <Col xs={12} className=" d-flex align-items-center justify-content-between">
        
              <div className="pntr d-flex align-items-center">
                <Link href="/">
                  <Image fluid src="/paytic-logo-black.svg" className="w-60" alt="PayTic Logo"/>
                </Link>
              </div>
                
              <div className="d-flex align-items-center">
                <Button href="#how-it-works" variant="link" className="px-3 mx-2 text-decoration-none text-uppercase dark-grey d-none d-lg-block">
                  How it works
                </Button>
                <Button href="#who-its-for" variant="link" className="px-3 mx-2 text-decoration-none text-uppercase dark-grey d-none d-lg-block">
                  The why of paytic
                </Button>
                <Button href="#about" variant="link" className="px-3 ms-2 me-3 text-decoration-none text-uppercase dark-grey d-none d-lg-block">
                  About
                </Button>
                <Button href="https://payticconnect-21545779.hubspotpagebuilder.com/see-a-demo" variant="dark" className="ms-3 text-decoration-none text-uppercase">
                  Book a demo
                </Button>
              </div>
            </Col>
          </Row>
      </Container>
        </div>
      </footer>
    </>
  )
}
