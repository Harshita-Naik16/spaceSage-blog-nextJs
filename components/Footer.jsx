import { FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";
import Link from "next/link";

const Footer = () => {
    const style ={

    }

  return (
    <footer className="border-t mt-10 border-slate-300 text-slate-400">
      <div className="container mx-auto p-10 flex justify-between items-center">
        <p>&#169; Copyright {new Date().getFullYear()} by SpaceSage. Design inspired by @CreativeDesignsGuru</p>
        <a href="https://github.com/Harshita-Naik16/Harshita-Naik16" target="_blank" className="hover:text-slate-500 transition-all ease-in duration-100">
            <FaGithub size="1.5rem"/>
        </a>
      </div>
    </footer>
  )
}

export default Footer
