import Cart from './Cart'

import logo from './Logo.svg'

export default function Header() {
  return (
    <>
      <div id="header">
        <div className="header-container">
          <div className="logo-container">
            <img className="img-itself" src={logo} alt="Brand Logo" />
          </div>
          <Cart />
        </div>
      </div>
    </>
  )
}
