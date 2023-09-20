import React, {useState} from 'react'

const Comment = ({post,children}) => {
  const [content,setContent] =useState('')
  const handleSubmit = (e) => {
      e.preventDefault()
      if(!content.trim()) return;
      console.log(post)
  }
  return (
    
      <form className="comm" post={post} onSubmit={handleSubmit} >
        {children}
      <input type='text' placeholder='add commt'
      value={content} onChange={e=> setContent(e.target.value)}/>
      <button onClick={handleSubmit} style={{background:'red',color:'white'}} type='submit'>
        post
      </button>
      </form>
    
  )
}

export default Comment