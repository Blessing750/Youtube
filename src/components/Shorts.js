import data from "./Shorts.json";

function Shorts() {
    console.log(data);

    return (
<div className="row">
  <div className="col-md-2"></div>
            {data.map((data) => {
                const url = "https://www.youtube.com/embed/" + data.id;
                return (
  <div className="col-md-2">
    <iframe width="200" height="300" 
    src={url} 
    title="YouTube video player" frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media;
    gyroscope; picture-in-picture;web-share"allowfullscreen className="low"></iframe>
    <h6 className="wed">{data.name}</h6> 
    <h6 className="wed">{data.views}</h6>
   </div>
  
       )
        }
            
            )} 

</div>
    )}

export default Shorts

  