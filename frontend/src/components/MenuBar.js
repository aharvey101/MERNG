import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

export default function MenuBar() {
  const pathname = window.location.pathname
  const path = pathname === '/' ? 'home' : pathname.substr(1)
  const [activeItem, setActiveItem] = useState(path)
  // about
  const handleItemClick = (e, { name }) => setActiveItem(name)

  return (
    <div>
      <Menu pointing secondary size="huge">
        <Menu.Item
          name="home"
          active={activeItem === 'home'}
          onClick={handleItemClick}
          as={Link}
          to="/"
        />

        <Menu.Menu position="right">
          <Menu.Item
            name="Login"
            active={activeItem === 'Login'}
            onClick={handleItemClick}
            as={Link}
            to="/Login"
          />
          <Menu.Item
            name="Register"
            active={activeItem === 'Register'}
            onClick={handleItemClick}
            as={Link}
            to="/Register"
          />
          <Menu.Item
            name="logout"
            active={activeItem === 'logout'}
            onClick={handleItemClick}
            as={Link}
            to="/Logout"
          />
        </Menu.Menu>
      </Menu>
    </div>
  )
}
