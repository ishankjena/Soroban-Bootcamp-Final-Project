import React from 'react'
import { ConnectButton } from '../web3/ConnectButton'

const Navbar = () => {
  return (
    <div className="grid grid-cols-2 place-content-between">
      <h1 className="text-2xl font-bold m-5">Event Ticket Manager</h1>
      <ConnectButton />
    </div>
  )
}

export default Navbar
