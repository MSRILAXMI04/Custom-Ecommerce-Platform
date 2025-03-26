import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
             <div className="container-fluid">
                <a className="navbar-brand" href="#" style={{ fontPalette:"dark",fontFamily:"initial", fontVariant: "no-common-ligatures"}}>
                  LIORA
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="#" >
                        
                        <img src="https:encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPErOPPQjwEQUuIlydPEx93z23-hkAOxaVKDZBZcp44j26WVD1r7WRqLN2QE2ZJU-pjdM&usqp=CAU" width="65" height="45" alt="Brand logo"/>
                          
                        </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#" style={{ fontFamily: "initial" }}>
                    Glam Stop.<span> Shop Now in LIORA.</span>
                    </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ fontFamily: "initial" }}>
                        Shop by Category
                      </a>
                      <ul className="dropdown-menu" style={{ fontFamily: "initial"}}>
                        <li><a className="dropdown-item" href="#">Women's Fashion</a></li>
                        <li><a className="dropdown-item" href="#">Men's Fashion</a></li>                  
                        <li><hr className="dropdown-divider" /> </li>
                        <li><a className="dropdown-item" href="#">Others</a></li>
                      </ul>
                    </li>
                    {/* <li className="nav-item">
                      <a className="nav-link disabled" aria-disabled="true" style={{ fontFamily: "initial"}}> Disabled</a>
                    </li> */}
                  </ul>
                  <form className="d-flex" style={{ width: "700px", fontFamily: "initial" }} role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                  </form>
                </div>
         </div>
       </nav>

    </>
  );
}

export default App;
