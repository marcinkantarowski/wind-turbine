import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilListRich,
  cilSpeedometer,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },

  {
    component: CNavTitle,
    name: 'Lists',
  },
  {
    component: CNavItem,
    name: 'Wind Turbines',
    to: 'wind-turbines',
    icon: <CIcon icon={cilListRich} customClassName="nav-icon" />,
  },
]

export default _nav
