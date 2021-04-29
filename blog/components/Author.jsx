import React, { Component } from 'react'
import {Avatar,Divider} from 'antd'
import {QqOutlined,GithubOutlined,WechatOutlined} from '@ant-design/icons'
import styles from '../styles/Author.module.css'
export class Author extends Component {
    render() {
        return (
            <div className={styles.authorBox}>
            <div> <Avatar size={100} src="./static/images/avator.jpeg"  /></div>
                <div className={styles.authorIntroduction}>
                    头发还在，没光头程序员，专注于WEB和移动前端开发。此地维权无门，此时无能为力，此心随波逐流。
                    <Divider>社交账号</Divider>
                    <Avatar size={28} icon={<GithubOutlined />} className={styles.account}  />
                    <Avatar size={28} icon={<QqOutlined />}  className={styles.account} />
                    <Avatar size={28} icon={<WechatOutlined />}  className={styles.account}  />

                </div>
            </div>           
        )
    }
}

export default Author
