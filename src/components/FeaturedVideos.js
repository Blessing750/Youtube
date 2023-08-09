import data from "./videos.json";


function FeaturedVideos() {
    console.log(data);

    return (
<div className="row">
  <div className="col-md-1"></div>
            {data.map((data) => {
                const url = "https://www.youtube.com/embed/" + data.id;
                return(
            <div className="col-md-3">
     <iframe width="350" height="250" src={url}
      title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;
       clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
       allowfullscreen className="note"></iframe>
       <h6 className="come">{data.name} </h6>
                        <h6 className="come">{data.views}</h6>
      </div>
                    )
            }
            
            )}

</div>
    )}


export default FeaturedVideos