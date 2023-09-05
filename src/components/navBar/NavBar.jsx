import Link from 'next/link'
import NavBarLinks from './NavBarLinks'
import NavBarDropDown from './navBarDropDown'
import { Montserrat } from 'next/font/google'
import Btn from '../elements/Btn'
import ThemeChanger from '@/components/Provider/ThemChanger'


const montserrat = Montserrat({ subsets: ['latin'], weight: ["300"] })

const NavBar = () => {


    return (
        <>
            <div className="navbar bg-neutral text-neutral-content  " >

                <div className="navbar-start">
                    <NavBarDropDown />
                    <Link href={'/'}
                        className=" btn btn-ghost normal-case text-l   "
                    >موقع الجامعات السورية الخاصة</Link>
                </div>
                <div>
                </div>



                <div className="navbar-end hidden lg:flex me-10  ">
                    <ul className="menu menu-horizontal px-3 opacity-80 hover:opacity-100">
                        <NavBarLinks />
                    </ul>
                    <ThemeChanger></ThemeChanger>
                </div>

            </div >
        </>
    )
}

export default NavBar
