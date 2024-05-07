import Link from 'next/link'

const NavBarLinks = () => {

    //map for the  nav links
    const links = [
        {
            id: 1,
            name: "الرئيسية",
            href: "/",
        },
        {
            id: 2,
            name: "الجامعات",
            href: "/unis",
        },
        {
            id: 3,
            name: "إستشارات",
            href: "/consulting",
        },
        {
            id: 4,
            name: "حول الموقع ",
            href: "/about",
        },
    ];

    return (
        <>
            {links.map(link => <li key={link.div}>
                <Link className="mx-2 text-base font-bold" href={link.href} > {link.name}</ Link></li>)}
        </>
    )
}

export default NavBarLinks
