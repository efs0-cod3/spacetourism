import React, {useState} from 'react'

export default function MobileNavbar() {
    const [show,setShow] = useState(false)

        function showMenu(){
            setShow(prevValue => !prevValue)
            console.log(show)
        }

    return (
        <nav className='navbar'>
            <img  src='/assets/shared/logo.svg' alt='logo-img'/>
            <div className='mobile'>
                <img onClick={showMenu} className={show ? 'hidden-ham' : "ham-icon"} src='/assets/shared/icon-hamburger.svg' alt='manu-icon'/>
                <div className={'backg ' + (show ? 'show-menu' : 'hide-menu')}>
                    <img className='close-icon' onClick={showMenu} src='/assets/shared/icon-close.svg' alt='manu-icon'/>
                    <ul className='mobile_menu--list'>
                        <li><span className='bld'>00</span>Home</li>
                        <li><span className='bld'>01</span> Destination</li>
                        <li><span className='bld'>02</span>Crew</li>
                        <li><span className='bld'>03</span>Technology</li>
                    </ul>
                </div>
            </div>
        </nav>
    )

}