import { Link } from "react-router-dom"

const Header = () => {
  return (
    <>

<div className="container">
  <header className="border-bottom lh-1 py-3">
    <div className="row flex-nowrap justify-content-between align-items-center">
      <div className="col-4 pt-1">
        <a className="link-secondary" href="#">Subscribe</a>
      </div>
      <div className="col-4 text-center">
        <Link className="blog-header-logo text-body-emphasis text-decoration-none" to="/">Large</Link>
      </div>
      <div className="col-4 d-flex justify-content-end align-items-center">
        <a className="link-secondary" href="#" aria-label="Search">
        
        </a>
        <a className="btn btn-sm btn-outline-secondary" href="#">Sign up</a>
      </div>
    </div>
  </header>


      <div className='nav-scroller py-1 mb-3 border-bottom'>
        <nav className='nav nav-underline justify-content-between'>
          <Link className='nav-item nav-link link-body-emphasis ' to='/'>
            Home
          </Link>
          <Link className='nav-item nav-link link-body-emphasis' to='/rutas'>
            rutas
          </Link>
          <Link className='nav-item nav-link link-body-emphasis' to='/formularios'>
            Formularios
          </Link>
          <Link className='nav-item nav-link link-body-emphasis' to='/style'>
            Style component
          </Link>

          <Link className="nav-item nav-link link-body-emphasis" to='/hooks'> Hooks</Link>


          
        </nav>
      </div>
      </div>
    </>
  )
}

export default Header
