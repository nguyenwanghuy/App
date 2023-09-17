import React, { useContext } from 'react'
import { Button } from 'antd';
import { CheckCircleTwoTone } from '@ant-design/icons';
import '../Tabs/ContentRight.css'
import Comment from './Comment';
import { PostContext } from '../../context/PostContext.js';
const ContentRight = () => {
    const { allPost } = useContext(PostContext)

    return (
        <div>
            <p style={{
                fontSize: '25px',
                lineHeight: '20px',
                fontWeight: 700
            }}>
                Câu hỏi đã được trả lời
            </p>
            <div className='contain-right'>
              
                {allPost?.map((post, index) => (
                    <>
                      <div key={index} className='contain-right-top'>
                    <Button style={{ borderRadius: '20px' }} type="primary" ghost>
                        Lớp 12 ▪ {post.title}
                    </Button>
                    <Button style={{ marginLeft: '1%', borderRadius: '20px' }} type="primary" danger ghost>
                        Hỏi nhanh
                    </Button>
                    <Button style={{ marginLeft: '50%', fontWeight: '500', fontSize: '20px' }} type="link" block>
                        <CheckCircleTwoTone />  Gia sư đã trả lời
                    </Button>

                </div>
                    <div key={post._id}>
                        <p style={{ opacity: 0.3 }}>🕙 {post.updatedAt}</p>
                        <p style={{ marginLeft: '20px',fontSize:'18px'}}>{post.content}</p>
                       <div style={{  objectFit: "cover",  }}> <img style={{ marginLeft: '20%', objectFit: "cover" }} src={post.image} width={700} height={700} /></div>
                    </div>
                    </>
                ))}

                <Button style={{ marginLeft: '50%', background: "#4086ff", marginTop: '20px' }} type="primary" >
                    Primary
                </Button>
                <Comment />
            </div>
        </div>
    )
}

export default ContentRight