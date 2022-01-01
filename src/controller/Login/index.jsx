import React from 'react';
import { Col, Row, Typography, Form, Toast, Button } from '@douyinfe/semi-ui';

const { Title } = Typography;

const handleSubmit = (values) => {
    // 跳转到主页面
};

export class Login extends React.Component {

    componentDidMount() {
        console.log("componentDidMount");
        let localStorage = window.localStorage
        // if (localStorage.islogin === '1') {
        //     this.props .replace('/main')
        // }
    }

    render() {
        return (
            <div className="grid" style={{height:'100%', background:'#eee'}}>
                <Row>
                    <Col span={6} offset={9}>
                        <Title heading={3} style={{margin: '8px 0'}} >Flint Admin</Title>
                        <div style={{background:"white", padding: 10}}>
                            <Form onSubmit={values => handleSubmit(values)}>
                                {({formState, values, formApi}) => (
                                    <>
                                        <Form.Input field='phone' label='手机号' style={{ width: '100%' }} placeholder='Enter your phone number'></Form.Input>
                                        <Form.Input field='password' label='密码' style={{ width: '100%' }} placeholder='Enter your password'></Form.Input>

                                        {/*<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>*/}
                                            <Button htmlType='submit' type="primary">登录</Button>
                                        {/*</div>*/}
                                    </>
                                )}
                            </Form>
                        </div>

                    </Col>
                </Row>
            </div>
        );
    }
}