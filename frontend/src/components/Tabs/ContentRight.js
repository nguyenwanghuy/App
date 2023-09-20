import React, { useContext, useEffect, useState } from 'react'
import { Button } from 'antd';
import { DeleteOutlined, GithubOutlined } from '@ant-design/icons';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import '../Tabs/ContentRight.css'
import Comment from './Comment';
import { PostContext } from '../../context/PostContext.js';
import authAPI from '../../api/authAPI.js';

import ModalCom from './Modal.js';
import AuthenContext from '../../context/AuthenContext/AuthenContext';
const ContentRight = () => {
    const [allCom, setAllCom] = useState('')
    const [resChange, setResChange] = useState(false)
    const [comData, setComData] = useState(
        {
            comment: ''
        }
    )

  
    useEffect(() => {
        const getAllCom = async () => {
            const res = await authAPI.getAllComments()
            if (res) {
                console.log(res.data.data)
                setAllCom(res.data.data)
            }
            return res
        }
        getAllCom()
    }, [resChange])
    // console.log(comData)
    const handleChangeCom = (e) => {
        setComData({ comment: e.target.value })
    }
    const handleSend = async () => {

        const res = await authAPI.createComment(comData)
        if (res) {
            setResChange(true)
        }
        console.log(res.data.data)
        // setComData(res.data.data)
       
    }

    const { allPost, setAllPost } = useContext(PostContext)



    //modal
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    // delete
    const [deleteP, setDeleteP] = useState()

    const handleDeletePost = async (postId) => {
        // const arr = allPost?.filter(item => {
        //     return (item._id !== postId)
        // })
        // setAllPost([..arr])

        setAllPost(prev => {
            return prev.filter(item => item._id !== postId)
        })
        await authAPI.deletePost(`${postId}`);
        setModal(false)
    }
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

                {allPost?.map((post, index) => {
                    console.log(post)
                    return (
                        <div key={post._id}>
                            <div className='contain-right-top'>
                                <Button style={{ borderRadius: '20px' }} type="primary" ghost>
                                    Lớp 12 ▪ {post.title}
                                </Button>
                                <Button style={{ marginLeft: '1%', borderRadius: '20px' }} type="primary" danger ghost>
                                    Hỏi nhanh
                                </Button>
                                <Button style={{ marginLeft: '50%', fontWeight: '500', fontSize: '20px' }} type="link" block
                                    onClick={() => {
                                        toggle()
                                        setDeleteP(post)
                                    }
                                    }>
                                    <DeleteOutlined />
                                </Button>
                            </div>
                            <div>
                                <p style={{ opacity: 0.3 }}>🕙 {post.updatedAt}</p>
                                <p style={{ marginLeft: '20px', fontSize: '18px' }}>{post.content}</p>
                                <div style={{ objectFit: "cover", }}> <img style={{ marginLeft: '20%', objectFit: "cover" }} src={post.image} width={600} height={600} /></div>
                            </div>
                            <div className="comm" key={post._id} >

                                <div className="comm-item" style={{ display: 'flex' }}>
                                    <input onChange={handleChangeCom} className="comm-ip" type="text" placeholder="Nhập nội dung bình luận (tiếng Việt có dấu)..." />
                                    <button className='btn-sub' onClick={handleSend} style={{ background: '#cb1c22', borderRadius: '5px', color: '#edeeef', marginLeft: '45px', fontSize: 'large', height: '40px' }}>Gửi bình luận</button>
                                </div>
                                {allCom.map((com, index) => {
                                    console.log(com)
                                    return (

                                        <div key={index} className='comm-send'>
                                         <p style={{color:'black'}}>{com.createdAt} :</p>  {com.comment}
                                        </div>
                                    )
                                })

                                }
                            </div>

                        </div>
                    )
                })}

                <ModalCom modal={modal} toggle={toggle}
                    post={deleteP}
                    handleDeletePost={handleDeletePost}
                />


    </div>
    </div>
  );
};

export default ContentRight;
