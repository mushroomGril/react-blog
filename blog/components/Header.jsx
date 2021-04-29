import React, { Component } from 'react'
import styles from '../styles/Header.module.css'
import {Row,Col,Menu} from 'antd'
import {SmileOutlined,YoutubeOutlined, HomeOutlined} from '@ant-design/icons'

export class Header extends Component {
    render() {
        return (
            <div className={styles.header}>
              <Row type="flex" justify="center">
                 <Col  xs={24} sm={24} md={10} lg={15} xl={12}>
                    <span className={styles.headerLogo}>小肥羊</span>
                    <span className={styles.headerTxt}>专注前端开发,学无止境。</span>
                 </Col>
                 <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
                    <Menu className={styles.antMenu}  mode="horizontal">
                        <Menu.Item className={styles.antMenuItem} key="home" >
                            < HomeOutlined/>
                            首页
                        </Menu.Item>
                        <Menu.Item className={styles.antMenuItem} key="video">
                            <YoutubeOutlined />
                            视频
                        </Menu.Item>
                        <Menu.Item className={styles.antMenuItem} key="life">
                            <SmileOutlined  rotate={180}/>
                            生活
                        </Menu.Item>
                    </Menu>
                </Col>
              </Row>
            </div>
        )
    }
}

export default Header
