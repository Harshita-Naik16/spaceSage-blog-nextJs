'use client';
import Link from "next/link";
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  const navList = [
    
    {
      name: 'Blog',
      link: '/all-posts'
    },
    {
      name: 'Mystery',
      link: '/mystery'
    },
    {
      name: 'Exploration',
      link: '/exploration'
    },
    {
      name: 'History',
      link: '/history'
    },
  ]

  return (
    <header className="sticky top-0 bg-slate-800">
      <nav className="lg:container mx-auto px-4 py-4 sm:py-8 sm:px-8 flex flex-col sm:flex-row justify-between items-center">

        <Link href='/' className='logo'>
            <span className="gradient-accent text-3xl sm:text-5xl font-bold">SpaceSage</span>
        </Link>

        <ul className="nav-menu flex justify-between items-center py-2 gap-6 md:gap-10 text-sm sm:text-base font-bold">

          {navList.map((item, index) => (
            <Link href={item.link} key={index}>
              <li className={`${pathname === item.link ? "bg-slate-600" : ""} hover:bg-slate-600 p-2 rounded-2xl transition ease-in duration-200`} >
                  {item.name}
              </li>
            </Link>
          ))}

        </ul>
      </nav>
    </header>
  )
}

export default Header


