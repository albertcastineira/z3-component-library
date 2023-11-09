export default function Header() {
  return (
    <header className="max-w-[1280px] mx-auto mt-2 p-6">
        <section className="grid grid-cols-2">
            <div className="logo">
                <h1 className="font-bold text-4xl text-yellow-400 text-yellow-shadow">
                    Z3
                </h1>
            </div>
            <nav className="text-end text-md align-middle p-3 font-light">
                <ul className="list-none text-white">
                    <li className="inline mx-6">
                        Components
                    </li>
                    <li className="inline mx-6">
                        About
                    </li>
                    <li className="inline mx-6">
                        Updates
                    </li>
                    <li className="inline mx-6 bg-yellow-400 text-black rounded font-semibold p-2">
                        0.0.1
                    </li>
                </ul>
            </nav>
        </section>
    </header>
  )
}
