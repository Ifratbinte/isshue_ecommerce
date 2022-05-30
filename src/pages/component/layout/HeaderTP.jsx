import React from 'react'
import HeaderTop from './headerAction/headerTop';
import HeaderMiddle from './headerAction/headerMiddle';
import HeaderBottom from './headerAction/headerBottom'

function HeaderTP() {
    
  return (
    <header className="header-section">
        <HeaderTop />
        <HeaderMiddle />
        <HeaderBottom />
    </header>
  )
}
export default HeaderTP;
