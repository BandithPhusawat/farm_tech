import { useState , useEffect } from 'react'

import { Button, Modal, Form, Alert , Container , Card, Image, Col, Row, ButtonGroup} from 'react-bootstrap';

function loginComponent(Props :any) {

    const [usename, setUsername] = useState<String>("");
    const [password, setPassword] = useState<String>("");
    const [errUsename, setErrUsername] = useState<String>('none');
    const [errPassword, setErrPassword] = useState<String>('none');

    const [trigger, setTrigger] = useState<String>('none')
    
    useEffect(() => {
        if(Props.value){
            setTrigger('block')
        }
    })

    function usernameHandler(e: any) {
        setUsername(e.target.value);
    }

    const passwordHandler = (e: any) => {
        setPassword(e.target.value);
    }

    const loginHandler = () => {

        if(!usename || usename == ""){
            console.log("if condition !");
            setErrUsername('show')
            console.log("err msg : "+errUsename)

            return
        }
        if(!password || password != ""){
            return
        }

    }

  return (
    <>
        <Container style={{ display: `${trigger}` , paddingTop:'300px'}} className='login-card'>
            <Row style={{ borderRadius: '1rem', backgroundColor: '#efecf2' , paddingBlock: '30px'}}>
                <Col xs={12} >
                    <Card.Header>
                        <Card.Title ><h2>เข้าสู่ระบบ</h2></Card.Title>
                            <Card.Body>
                        <Form.Group className='md-3' controlId='formUsername' >
                        <Form.Label className='input-login'>Username ( กรอกอีเมลของคุณ )</Form.Label>
                            <Form.Control 
                                    type='email' 
                                    placeholder='email ( อีเมล )' 
                                    style={{ textAlign: 'center' }}
                                    value={ usename || "" }
                                    onChange={ usernameHandler }
                                />
                                <Alert variant='danger' style={{ height: '30px', textAlign: 'center', paddingTop: '1px', display: `${errUsename}` }}>
                                    กรุณากรอกอีเมล์ของคุณ
                                </Alert>
                            </Form.Group>
                            <Form.Group className='md-3' controlId='formPassword' >
                                <Form.Label className='input-login'>Password ( กรอกรหัสผ่านของคุณ )</Form.Label>
                                <Form.Control
                                    type='password'
                                    placeholder='Password ( รหัสผ่าน ) '
                                    style={{ textAlign: 'center' }}
                                    value={ password || ""}
                                    onChange={ passwordHandler }
                                />
                            </Form.Group>
                            </Card.Body>
                            <Card.Footer>
                                <Container style={{ paddingBottom: '10px', paddingTop: '1.5rem' }}>
                                    <div className="col-md-12 text-center">
                                        <Button variant='warning' type='button' onClick={loginHandler}>เข้าสู่ระบบ</Button>
                                    </div>  
                                </Container>
                            </Card.Footer>
                    </Card.Header>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default loginComponent