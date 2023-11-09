import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="max-w-[1024px] mx-auto mt-2 p-6">
        <section className="grid grid-cols-1 md:grid-cols-2">
            <div className="logo text-center md:text-left">
                <h1 className="font-bold text-4xl text-yellow-400 md:mt-2 px-2 text-yellow-shadow">
                <Link to={`/`}>Z3</Link>
                </h1>
            </div>
            <nav className="text-center md:text-center text-sm md:text-md p-3 font-light">
                <ul className="list-none text-white">
                <li className="inline mx-3 md:mx-6">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="inline mx-3 md:mx-6">
                        <Link to="/components">Components</Link>
                    </li>
                    <li className="inline mx-3 md:mx-6">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="inline mx-3 md:mx-6">
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li className="inline mx-3 md:mx-6 bg-yellow-400 text-black rounded font-semibold p-2">
                        0.0.1
                    </li>
                </ul>
            </nav>
        </section>
    </header>
  )
}
