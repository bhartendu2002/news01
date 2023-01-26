import React from 'react'
import "./newsitems.css"




const NewsItems = ({title, descriptiom, url,urlToImage}) => {
  return (
    <div className='card news-item' style={{backgroundColor:'black', width: "48rem", marginBottom:'40px', marginTop:'1em' }}>
    <img style={{width:'35em', height:'20em'}} className='card-img-top news-img' src={urlToImage} alt={urlToImage}/>
        <div className='card-body news-item'>
            <h5 className='card-title font-weight-bold'><a style={{color:'white'}} href={url}>{title}</a></h5>
            <p className='card-text'>{descriptiom}</p>
            </div>
        </div>
  )
}

export default NewsItems
