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
      <footer className="vh-20 d-flex align-items-end">
        <div className="px-3 px-lg-5 w-100 py-3">
        <Container fluid className="px-xl-5">
          <Row className="px-xl-5">
            <Col xs={12} className=" d-flex align-items-center justify-content-between px-2 px-lg-0 px-xl-2">
        
              <div className="pntr d-flex align-items-center">
                <a href="/" className="">
                  <Image fluid src="/paytic-logo-black.svg" className="footer-logo" alt="PayTic Logo"/>
                </a>
              </div>
                
              <div className="d-flex align-items-center">
                <a href="https://mobile.twitter.com/payticconnect" target="_blank" className="p-0 me-3">
                 <Image fluid src="/twitter.svg" className="w-100" alt="Twitter logo button" />
                </a>
                <a href="https://mobile.twitter.com/payticconnect" target="_blank" className="p-0 me-0 me-md-1">
                  <Image fluid src="/linkedIn.svg" className="w-100" alt="Twitter logo button" />
                </a>
                <Button href="https://payticconnect-21545779.hubspotpagebuilder.com/see-a-demo" variant="dark" className="ms-3 text-decoration-none text-uppercase d-none d-sm-block">
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
