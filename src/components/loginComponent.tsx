import { useState , useEffect } from 'react'

import { Button, Modal, Form, Alert , Container } from 'react-bootstrap';

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
    <div className="modal show"
        style={{ display: `${trigger}`, position: 'initial' }}
    >
        <Modal.Dialog>
            <Modal.Header 
                style={{
                    display: 'grid',
                    justifyContent: 'center'
                }}
                
            >
                <Modal.Title>
                    กรอกข้อมูลเพื่อเข้าสู่ระบบ
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className='md-3' controlId='formUsername' >
                    <Form.Label className='input-login'>Username ( กรอกอีเมลของคุณ )</Form.Label>
                    <Form.Control 
                        type='email' 
                        placeholder='Username' 
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
                        placeholder='Password'
                        style={{ textAlign: 'center' }}
                        value={ password || ""}
                        onChange={ passwordHandler }
                    />
               </Form.Group>
            </Modal.Body>
                <Container style={{ paddingBottom: '10px' }}>
                    <div className="col-md-12 text-center">
                        <Button variant='warning' type='button' onClick={loginHandler}>เข้าสู่ระบบ</Button>
                    </div>

                </Container>
        </Modal.Dialog>
    </div>
  )
}

export default loginComponent