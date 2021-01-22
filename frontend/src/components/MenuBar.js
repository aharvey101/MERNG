import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'

export default function MenuBar() {
  const [activeItem, setActiveItem] = useState('')

  const handleItemClick = (e, { name }) => setActiveItem({ activeItem: name })

  return (
    <div>
      <Menu pointing secondary>
        <Menu.Item
          name="home"
          active={activeItem === 'home'}
          onClick={handleItemClick}
        />

        <Menu.Menu position="right">
          <Menu.Item
            name="Login"
            active={activeItem === 'Login'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name="Register"
            active={activeItem === 'Register'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name="logout"
            active={activeItem === 'logout'}
            onClick={handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    </div>
  )
}
