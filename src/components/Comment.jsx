import React from 'react'

function Comment({ comment }) {
    let options = ['Reply','Give Award','Share','Report','Save']
  return (
      <div style={{ marginLeft:'20px'}}>
          <p>{comment.author} - {comment.points} points  - {comment.timestamp}</p>
          <h4>{comment.body}</h4>
          <div style={{display:"flex",marginTop:'-20px'}}>
              {options.map((item, i) => <p style={{ padding: '10px' }} key={i}>{item}</p>)}
          </div>

         {comment.replies?.map((item)=><Comment key={item.id} comment={item}/>)}
         
          
    </div>
  )
}

export default Comment