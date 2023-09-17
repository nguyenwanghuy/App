import React from 'react';
import {  MailOutlined,CalculatorTwoTone,FormOutlined,TranslationOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import ContentRight from './ContentRight';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('Tất cả', 'sub1', <MailOutlined />, [
    getItem('Toán', '1', <CalculatorTwoTone />),
    getItem('Tiếng Việt', '2', <FormOutlined />),
    getItem('Tiếng Anh', '3',<TranslationOutlined />),
   
  ]),
  
];

// submenu keys of first level

const Tabnavi = () => {
  return (
   <>
   <div style={{
    width: '100%',
    display:'flex',
    justifyContent: "space-between",
    padding:'30px',
    }}>
   <Menu
      mode="inline"
      style={{
        width: 256,
       
        borderRadius: '16px',
        fontWeight: 450,
        fontSize: "1rem"
      }}
      items={items}
    />
     <div style={{
      flex: 1,
     marginLeft: '30px',
     }}>
     <ContentRight/>
     </div>
   </div>
    
   </>
   
  );
};
export default Tabnavi;


