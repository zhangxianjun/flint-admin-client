import React, { PureComponent } from 'react';
import { Col, Row, Typography, Form, Toast, Button } from '@douyinfe/semi-ui';
import { HttpUtil } from '../../service/HttpUtil';
import { useNavigate} from 'react-router-dom';


const { Title } = Typography;

function anonyCom(MessCom) {
    return (props) => {
      let navigate = useNavigate();
      return <MessCom {...props} navigate={navigate} />
    }
}

class Login extends PureComponent {
    handleSubmit = () => {
        let navigate = useNavigate();
        // 跳转到主页面
        // let localStorage = window.localStorage;
        // localStorage.isLogin = '1';
        // HttpUtil.post();
        // navigate("/main", {replace:true});
        this.props.navigate("/main", {replace:true})
    
        console.log("2==============");
        
    };


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
                            {/* <Form onSubmit={values => handleSubmit(values)}> */}
                                {/* {({formState, values, formApi}) => ( */}
                                    {/* <> */}
                                        {/* <Form.Input field='phone' label='手机号' style={{ width: '100%' }} placeholder='Enter your phone number'></Form.Input> */}
                                        {/* <Form.Input field='password' label='密码' style={{ width: '100%' }} placeholder='Enter your password'></Form.Input> */}

                                        {/*<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>*/}
                                            <Button htmlType='submit' type="primary" onClick={this.handleSubmit}>登录</Button>
                                        {/*</div>*/}
                                    {/* </> */}
                                {/* )} */}
                            {/* </Form> */}
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default anonyCom(Login);