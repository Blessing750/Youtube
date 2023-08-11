import './App.css';
import Categories from './components/Categories';
import Header from './components/Header';
import FeaturedVideos from './components/FeaturedVideos';
import Shorts from './components/Shorts';
import OtherVideos from './components/OtherVideos';
import OtherVideos2 from './components/OtherVideos2';
// import Video from './components/Video';

function App() {
  return (
    <div className="App">
     <div className="container-fluid">
     <Header/>
  <div className="row rw1">
  <div className="col-md-1">
    <i className="fa fa-home hm"></i><p className="para">Home</p>
    <i className="fa fa-bolt cle"></i><p className="sho">Shorts</p>
  <i className="fa fa-video cle"></i><p>Subscription</p>
  <i className="fa fa-video cle"></i><p className="sho">Library</p>
 
  </div>
  
  <Categories/>
  </div>

<FeaturedVideos/>
<hr />
<div className="row">
  <div className="col-md-1"></div>
  <div className="col-md-11">
  <i className="fa fa-bolt bot"></i><p className="short">Shorts</p>
</div>
</div>
<Shorts/>

    
<hr />

<OtherVideos/>

<OtherVideos2/>


<div className="row">
  <div className="col-md-1"></div>
  <div className="col-md-4">
    <iframe width="340" height="250" src="https://www.youtube.com/embed/MHAAm1G4O9E"
    title="YouTube video player" frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
    gyroscope; picture-in-picture; web-share" allowfullscreen className="nay"></iframe>
    <h6 className="come">THE ROBBER | Funnybros Comedy | Jnr Pope</h6>
   <h6 className="come">165k views . 4 month ago</h6>
  </div>
  <div className="col-md-3">
    <iframe width="340" height="250" src="https://www.youtube.com/embed/Lh_rgSwRFYU"
    title="YouTube video player" frameborder="0" allow="accelerometer; 
    autoplay; clipboard-write; encrypted-media; gyroscope;
    picture-in-picture; web-share" allowfullscreen className="note"></iframe>
    <h6 className="come">Kiriku the master planner</h6>
   <h6 className="come">275k subscribers</h6>
  </div>
  <div className="col-md-4">
    <iframe width="340" height="250" src="https://www.youtube.com/embed/xl60Gqj_9Q8"
    title="YouTube video player" frameborder="0" allow="accelerometer; 
    autoplay; clipboard-write; encrypted-media; gyroscope;
    picture-in-picture; web-share" allowfullscreen className="notess"></iframe>
    <h6 className="come">Gwagwalada refix Brodashaggi</h6>
   <h6 className="come">372k views . 2 weeks ago</h6>
  </div>
</div>

<hr/>
<div className="row">
<div className="col-md-1"></div>
<div className="col-md-11">
<h5>Breaking News</h5>
</div>
</div>
<div className="row">
  <div className="col-md-1"></div>
  <div className="col-md-4">
    <iframe width="340" height="250" src="https://www.youtube.com/embed/fjdP7U0IEUQ"
    title="YouTube video player" frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
    gyroscope; picture-in-picture; web-share" allowfullscreen className="nay"></iframe>
    <h6 className="come">President Tinubu Shakes</h6>
    <h6 className="come">Sahara TV</h6>
   <h6 className="come">618k Subscribers . 7 Hours ago</h6>
  </div>
  <div className="col-md-3">
    <iframe width="340" height="250" src="https://www.youtube.com/embed/39386z7_HMc"
    title="YouTube video player" frameborder="0" allow="accelerometer; 
    autoplay; clipboard-write; encrypted-media; gyroscope;
    picture-in-picture; web-share" allowfullscreen className="note"></iframe>
  <h6 className="come">WATCH: Acting IGP Egbetokun Arrives Police Headquaters In Abuja</h6>
  <h6 className="come">TVC News Nigeria</h6>
   <h6 className="come">35k views . 18 hours ago</h6>
  </div>
  <div className="col-md-4">
    <iframe width="340" height="250" src="https://www.youtube.com/embed/YS5tkIgBpiA"
    title="YouTube video player" frameborder="0" allow="accelerometer; 
    autoplay; clipboard-write; encrypted-media; gyroscope;
    picture-in-picture; web-share" allowfullscreen className="notess"></iframe>
    <h6 className="come">WATCH: Moment President Tinubu</h6>
    <h6 className="come">TVC News Nigeria</h6>
   <h6 className="come">10k views . 17 weeks ago</h6>
  </div>
</div>
</div>
</div>
    
  );
}

export default App;
