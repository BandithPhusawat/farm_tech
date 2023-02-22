import {useState, useEffect} from 'react'
import { NavDropdown, Container, Navbar,Nav, Form, Button } from 'react-bootstrap';

import LoginComponent from './loginComponent'

const  NavbarComponent = () =>  {

  const [displayShow, setDisplayShow] = useState<Boolean>(false);

  const loginHandle = () => {
    setDisplayShow(true)
    console.log("call fn trigger !")
  }

  return (
    <>
        <Navbar className='navbar' style={{ marginTop: '30px' }} expand='lg'>
          <Container fluid>
          <Navbar.Brand >
              <img 
                src='/public/images/farmer.png'
                width='40'
                height='40'
                className='d-inline-block align-top'
                alt='nav-logo-brand'
              />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id="navbarScroll">
                <Nav 
                  className='me-auto my-2 my-lg-0'
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                > 
                  <Nav.Link href='#home'>หน้าหลัก</Nav.Link>
                  <Nav.Link href='#projectDetail'>ข้อมูลโครงการ</Nav.Link>
                  <Nav.Link href='#productList'>ผลผลิตในโครงการ</Nav.Link>
                  <Nav.Link href='#comment'>ข้อเสนอแนะ</Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <Button variant="outline-dark" onClick={loginHandle} >เข้าสู่ระบบ</Button>
                </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <LoginComponent value={displayShow} />
    </>
  )
}

export default NavbarComponent