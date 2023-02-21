import {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import LoginComponent from './loginComponent'

const  NavbarComponent = () =>  {

  const [displayShow, setDisplayShow] = useState<Boolean>(false);

  const loginHandle = () => {
    setDisplayShow(true)
    console.log("call fn trigger !")
  }

  return (
    <>
        <Navbar className='navbar' style={{ marginTop: '30px' }}>
          <Container>
            <Navbar.Brand >
              <img 
                src='/public/images/farmer.png'
                width='30'
                height='30'
                className='d-inline-block align-top'
                alt='nav-logo-brand'
              />
            </Navbar.Brand>
            <Nav className='me-auto'> 
              <Nav.Link href='#home'>หน้าหลัก</Nav.Link>
              <Nav.Link href='#projectDetail'>ข้อมูลโครงการ</Nav.Link>
              <Nav.Link href='#productList'>ผลผลิตในโครงการ</Nav.Link>
              <Nav.Link href='#comment'>ข้อเสนอแนะ</Nav.Link>
            </Nav>
          <Form className="d-flex">
            <Button variant="outline-dark" onClick={loginHandle} >เข้าสู่ระบบ</Button>
          </Form>
          </Container>
        </Navbar>
        <LoginComponent value={displayShow} />
    </>
  )
}

export default NavbarComponent