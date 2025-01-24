import "../Styles/Navbar.css"

function Navbar(){
    return(

        <>
        <header class="navbar">
    <div class="logo"><img class="one" src="photo/logo.png" alt=""/>Positivus</div>
    <nav>
      <ul class="nav-links">
        <li><a href="pages/about-us.html">About Us</a></li>
        <li><a href="pages/services.html">Services</a></li>
        <li><a href="pages/user-case.html">Use Cases</a></li>
        <li><a href="pages/Pricing.html">Pricing</a></li>
        <li><a href="pages/blog.html">Blog</a></li>
      </ul>
    </nav>
    <button class="quote-btn">Request a Quote</button>
  </header>

        
        </>
    )
}
export default Navbar;