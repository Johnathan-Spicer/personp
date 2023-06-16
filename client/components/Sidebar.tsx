function Sidebar () {
  return (
   <nav>
    <ul>
      <li>
        <a href="#" className="logo"></a>
          <img src="/Johnathanlogo.png" alt="" />
          <span className="nav-item">Code Info</span>
      </li>
      <li><a href="#">
        <i className="fas fa-home"></i>  
        <span className="nav-item">Home</span>
      </a></li>
      <li><a href="#">
      <i className="fas fa-user"></i>  
        <span className="nav-item">User</span>  
      </a></li>
      <li><a href="#">
       <i className="fas fa-wallet"></i>  
       <span className="nav-item">Wallet</span>  
      </a></li>
      <li><a href="#">
        <i className="fas fa-chart-bar"></i>  
        <span className="nav-item">Analytics</span>  
      </a></li>
      <li><a href="#">
        <i className="fas fa-tasks"></i>  
        <span className="nav-item">Tasks</span>  
      </a></li>
    </ul>
   </nav>
  )
}

export default Sidebar