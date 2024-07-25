import Link from "next/link"
import RegisterLogin from "./RegisterLogin"

const Navbar = () => {

    return (
     <div>
<nav className="navbar  navbar-expand-lg bg-body-tertiary" data-bs-theme="">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand" href="#">Care Finder</a>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link  href="/" className="nav-link" aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
        <Link  href="/about" className="nav-link" aria-current="page">About</Link>
        </li>
        <li className="nav-item">
        <Link  href="/profile" className="nav-link" aria-current="page">Profile</Link>
        </li>
      </ul>
     <RegisterLogin />
    </div>
  </div>
</nav>

    </div>
    )
}
export default Navbar