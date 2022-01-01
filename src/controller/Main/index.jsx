import React, { useMemo }from 'react';
import {Layout, Nav, Button, Breadcrumb, Skeleton, Avatar} from '@douyinfe/semi-ui';
import {
    IconBell,
    IconHelpCircle,
    IconUser,
    IconStar,
    IconUserGroup,
    IconSetting,
    IconSemiLogo
} from '@douyinfe/semi-icons';

const {Header, Sider, Content} = Layout;

// const items = useMemo(() => [
//     { itemKey: 'user', text: '用户管理', icon: <IconUser /> },
//     { itemKey: 'union', text: '公会中心', icon: <IconStar /> },
//     {
//         itemKey: 'union-management',
//         text: '公会管理',
//         icon: <IconUserGroup />,
//         items: ['公告设置', '公会查询', '信息录入']
//     },
//     {
//         text: '任务平台',
//         icon: <IconSetting />,
//         itemKey: 'job',
//         items: ['任务管理', '用户任务查询'],
//     },
// ], []);


export class Main extends React.Component {

    render() {
        return (
            <Layout style={{border: '1px solid var(--semi-color-border)'}}>
                <Header style={{backgroundColor: 'var(--semi-color-bg-1)'}}>
                    <div>
                        <Nav mode="horizontal" defaultSelectedKeys={['Home']}>
                            <Nav.Header>
                                <IconSemiLogo style={{width: '96px', height: '36px', fontSize: 36}}/>
                            </Nav.Header>
                            <span
                                style={{
                                    color: 'var(--semi-color-text-2)',
                                }}
                            >
                            <span
                                style={{
                                    marginRight: '24px',
                                    color: 'var(--semi-color-text-0)',
                                    fontWeight: '600',
                                }}
                            >
                                模版推荐
                            </span>
                            <span style={{marginRight: '24px'}}>所有模版</span>
                            <span>我的模版</span>
                        </span>
                            <Nav.Footer>
                                <Button
                                    theme="borderless"
                                    icon={<IconBell size="large"/>}
                                    style={{
                                        color: 'var(--semi-color-text-2)',
                                        marginRight: '12px',
                                    }}
                                />
                                <Button
                                    theme="borderless"
                                    icon={<IconHelpCircle size="large"/>}
                                    style={{
                                        color: 'var(--semi-color-text-2)',
                                        marginRight: '12px',
                                    }}
                                />
                                <Avatar color="orange" size="small">
                                    YJ
                                </Avatar>
                            </Nav.Footer>
                        </Nav>
                    </div>
                </Header>
                <Layout>
                    <Sider style={{backgroundColor: 'var(--semi-color-bg-1)'}}>
                        <Nav
                            style={{maxWidth: 220, height: '100%'}}
                            defaultSelectedKeys={['Home']}
                            items={[
                                {
                                    itemKey: 'home', text: '首页', icon: <IconUser />,
                                    items: ['今日待办']
                                },
                                {
                                    itemKey: 'product', text: '产品', icon: <IconStar />,
                                    items: ['产品原型', '标注切图', '原型反馈']
                                },
                                {
                                    itemKey: 'dev', text: '开发', icon: <IconStar />,
                                    items: ['开发计划', '流程设计', '接口文档', '部署文档', '源码管理']
                                },
                                {
                                    itemKey: 'test', text: '测试', icon: <IconStar />,
                                    items: ['测试用例', 'BUG系统']
                                },
                                {
                                    itemKey: 'pro', text: '生产', icon: <IconStar />,
                                    items: ['服务架构', '账号系统', '脚本管理', '终端系统', '主机监控', '部署文档']
                                },
                                {
                                    itemKey: 'sys', text: '系统', icon: <IconStar />,
                                    items: ['用户管理', '权限管理', '外链列表']
                                },
                            ]}
                            footer={{
                                collapseButton: true,
                            }}
                        />
                    </Sider>
                    <Content
                        style={{
                            padding: '24px',
                            backgroundColor: 'var(--semi-color-bg-0)',
                        }}
                    >
                        <Breadcrumb
                            style={{
                                marginBottom: '24px',
                            }}
                            routes={['首页', '当这个页面标题很长时需要省略', '上一页', '详情页']}
                        />
                        <div
                            style={{
                                borderRadius: '10px',
                                border: '1px solid var(--semi-color-border)',
                                height: '376px',
                                padding: '32px',
                            }}
                        >
                            <Skeleton placeholder={<Skeleton.Paragraph rows={2}/>} loading={true}>
                                <p>Hi, Bytedance dance dance.</p>
                                <p>Hi, Bytedance dance dance.</p>
                            </Skeleton>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        );
    };
}