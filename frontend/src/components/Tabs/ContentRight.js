import React from 'react'
import { Button } from 'antd';
import {  CheckCircleTwoTone } from '@ant-design/icons';
import '../Tabs/ContentRight.css'
import Comment from './Comment';
const ContentRight = () => {
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
                <div className='contain-right-top'>
                    <Button style={{borderRadius:'20px'}} type="primary" ghost>
                        Lớp 12 ▪ Toán
                    </Button>
                    <Button style={{marginLeft:'1%',borderRadius:'20px'}} type="primary" danger ghost>
                       Hỏi nhanh
                    </Button>
                    <Button style={{marginLeft:'50%',fontWeight:'500',fontSize:'20px'}} type="link" block>
                    <CheckCircleTwoTone />  Gia sư đã trả lời
                    </Button>
                    
                </div>
                <p style={{opacity:0.3}}>🕙 11:49,09/09/2023</p>
                <p>Giải chi tiết giúp em bài này với ạ, ngoài cách đặt t= , rồi vẽ đường -t/2. Nếu không còn cách nào nữa thì giải giúp em cách này với đặt f'(-2)=1, f'(4)=-2,f'(1)=2</p>
                <img style={{marginLeft:'20%'}}  src="https://static.colearn.vn:8413/v1.0/upload/qa/image/09092023/colearn-MUqGUY.jpg" width={700} height={700} />  
                <Button style={{marginLeft:'50%',background:"#4086ff",marginTop:'20px'}} type="primary" >
            Primary
          </Button>
                <Comment/>
            </div>
        </div>
    )
}

export default ContentRight