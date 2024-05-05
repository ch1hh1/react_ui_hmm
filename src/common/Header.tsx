import Link from 'next/link'
import React from 'react'

const headerStyle: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-between',
}


const Header: React.FC = () => {
  return (
    <div style={headerStyle}>
      <h1>React? UI? hmm...</h1>
      <Link href='../' style={{ paddingRight: '32px' }}>トップへ</Link>
    </div >
  )
}

export default Header
