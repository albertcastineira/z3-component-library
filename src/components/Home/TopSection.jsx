import { Icon } from '@iconify/react'
import { Link } from "react-router-dom"

export default function TopSection() {
    return (
        <section className="top-section">
            <div className="chip rounded-2xl text-xs md:text-md w-3/4 md:w-2/4 md:font-md p-3 border-[#888585] border text-[#888585] mx-auto">
                Z3 is still in a very early phase of development.
                <a href="" className="text-yellow-400 font-semibold ml-2">
                    Read more
                </a>
            </div>
            <h1 className="m-12 font-bold text-white text-4xl md:text-5xl md:px-[10vw]">
                Component library focused on the <span className="text-yellow-400 text-yellow-shadow">lightning</span> and <span className="text-yellow-400 font-extrabold">simplicity</span>
            </h1>
            <p className="text-[#888585] text-md my-4">
                Build your website faster, using prefabricated components and
                <br /> customizing them according to your needs
            </p>
            <Link to="/components">
                <button className="my-6 bg-yellow-400 px-4 py-2 rounded-md mx-4 font-bold box-yellow-shadow">
                    Browse components
                </button>
            </Link>
            
            <span className="text-white flex justify-center items-center text-xl my-10">
                <Icon icon="uiw:down" />
            </span>
        </section>
    );
}
