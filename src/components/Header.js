function Header() {
    return (
        <div className="row rw">
  <div className="col-md-1">
      <i className="fa fa-bars hi"></i>
  </div>
  <div className="col-md-2">
      <i className="fa fa-youtube hello"></i><b>YouTube</b><sup>NG</sup>
  </div>
  <div className="col-md-6">
  <div className="search">
  <form action="#">
      <input type="text"placeholder=" Search" name="search"/>
      <i className="fa fa-search sea"></i>
      <i className="fa fa-microphone mic"></i> 
  </form>  
  </div>
  </div>
  <div className="col-md-1"></div>
  <div className="col-md-2">
      <i className="fa fa-folder-plus fold"></i>
      <i className="fa fa-bell be"></i>
      <button className="b">B</button>
  </div>
  </div>
    )}

    export default Header