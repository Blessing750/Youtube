import React, { useState, useEffect } from 'react';

function FeaturedVideos() {

const getData=()=>{
    fetch('videos.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
}
    
     useEffect(()=>{
    getData()
  },[])

    return (
<div className="row">
  <div className="col-md-1"></div>
  <div className="col-md-4">
    <iframe width="340" height="250" src="https://www.youtube.com/embed/Mw_5eEoPIHk"
     title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
     clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
     allowfullscreen className="nay"></iframe>
     <h6 className="come">Kizz Daniel X Asake</h6>
     <h6 className="come">900 views</h6>
    </div>
    <div className="col-md-3">
     <iframe width="350" height="250" src="https://www.youtube.com/embed/M6326knSuD0"
      title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;
       clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
       allowfullscreen className="note"></iframe>
       <h6 className="come">THE INHERITANCE Kiekie </h6>
       <h6 className="come">1M views</h6>
      </div>
      <div className="col-md-4">
      <iframe width="340" height="250" src="https://www.youtube.com/embed/aDIkv6FHPOM"
       title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
       clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
       allowfullscreen className="notess"></iframe>
       <h6 className="come">Asake X Zinolesky X Naira</h6>
       <h6 className="come">600 views</h6>
      </div>
</div>
    )}


export default FeaturedVideos