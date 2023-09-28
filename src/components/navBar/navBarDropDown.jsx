// "use client"
// import React, { useRef } from 'react'
import NavBarLinks from './NavBarLinks'
import ThemeChanger from '../Provider/ThemChanger'

const NavBarDropDown = () => {

    // const open = useRef(undefined)

    // const changeMode = () => {
    //     open.current.open = !open.current.open
    //     console.log(!open.current.open)
    // }
    const secondWay = <details className="dropdown mb-32">
        <summary className="m-1 btn">open or close</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-neutral text-neutral-content rounded-box w-52">
            <NavBarLinks></NavBarLinks>
            <div className=' ms-3'>
                <ThemeChanger></ThemeChanger>
            </div>

        </ul>
    </details>

    return (



        <details className="dropdown "  >
            <summary className="m-1 btn btn-ghost lg:hidden"  >

                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-neutral text-neutral-content rounded-box w-52">
                <NavBarLinks></NavBarLinks>
                <div className=' ms-3'>
                    <ThemeChanger></ThemeChanger>
                </div>
            </ul>
        </details>
    )
}

export default NavBarDropDown

// <div div className="dropdown" >
//     <label tabIndex={0} className="btn btn-ghost lg:hidden">
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//     </label>
//     <ul tabIndex={0} className="menu menu-sm dropdown-content bg-neutral text-neutral-content mt-3 z-[1] p-2 shadow  rounded-box w-52">
//         <NavBarLinks></NavBarLinks>
//         <div className=' ms-3'>
//             <ThemeChanger></ThemeChanger>
//         </div>

//     </ul>
// </div >