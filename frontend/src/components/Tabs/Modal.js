import React from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { DeleteOutlined,GithubOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { Button } from 'antd';
const ModalCom = ({modal,toggle ,handleDeletePost, post }) => {
 
  return (
    <div>  
        <Modal isOpen={modal} toggle={toggle} >
    <ModalHeader toggle={toggle}><GithubOutlined /></ModalHeader>
    <ModalBody>
        Bạn có muốn xoá bài viết
    </ModalBody>
    <ModalFooter>
        <Button type="primary" danger onClick={()=>handleDeletePost(post._id)}>
            Delete
        </Button>
        <Button color="secondary" onClick={toggle}>
            Cancel
        </Button>

    </ModalFooter>
</Modal></div>
  )
}

export default ModalCom