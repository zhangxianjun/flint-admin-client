import React, { PureComponent } from 'react';
import { Col, Row, Typography, Form, Toast, Button } from '@douyinfe/semi-ui';
// import { HttpUtil } from '../../service/HttpUtil';
import { useNavigate as navigate } from 'react-router-dom';


const { Title } = Typography;

const handleSubmit = (values) => {

    console.log("==============");
    // 跳转到主页面
    let localStorage = window.localStorage;
    localStorage.isLogin = '1';
    // HttpUtil.post();
    navigate("/main", {"replace": true});

    console.log("==============");
    
};

export class Todo extends PureComponent {

    componentDidMount() {
        console.log("componentDidMount");
        // let localStorage = window.localStorage
        // if (localStorage.isLogin === '1') {
        //     this.props.history.replace('/main');
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