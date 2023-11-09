export default function TopSection() {
    return (
        <section className="top-section my-[15vh]">
            <div className="chip rounded-2xl p-3 border-[#888585] border text-[#888585] w-2/4 mx-auto">
                Z3 is still in a very early phase of development.
                <a href="" className="text-yellow-400 font-semibold ml-2">
                    Read more
                </a>
            </div>
            <h1 className="m-12 font-bold text-white text-5xl">
                Component library focused on <br /> the <span className="text-yellow-400 text-yellow-shadow">lightning</span> and <span className="text-yellow-400 font-extrabold">simplicity</span>
            </h1>
            <p className="text-[#888585] text-md my-4">
                Build your website faster, using prefabricated components and
                <br /> customizing them according to your needs
            </p>
            <button className="my-6 bg-yellow-400 px-4 py-2 rounded-md mx-4 font-bold box-yellow-shadow">
                Read the docs
            </button>
            <button className="my-6 text-white px-4 py-2 rounded-md mx-4 font-bold">
                Download
            </button>
        </section>
    );
}
