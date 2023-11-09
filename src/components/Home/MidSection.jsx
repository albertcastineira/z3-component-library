import { Icon } from '@iconify/react';

export default function MidSection() {
    return (
        <section className="mid-section my-[40vh] grid grid-cols-3 gap-6">
            <div>
                <h1 className="align-baseline inline-flex text-5xl text-yellow-400 text-yellow-shadow">
                    <Icon icon="tdesign:component-layout" />
                </h1>
                <h1 className="m-6 font-bold text-white text-3xl">
                    Don&apos;t waste time starting from scratch
                </h1>
                <p className="text-[#888585] text-md m-0">
                    Use components already created fully responsive to save you time when building your project.
                </p>
            </div>
            <div>
                <h1 className="align-baseline inline-flex text-5xl text-yellow-400">
                    <Icon icon="mdi:color" />
                </h1>
                <h1 className="m-6 font-bold text-white text-3xl">
                    Independent <br /> color palette 
                </h1>
                <p className="text-[#888585] text-md m-0">
                    Our components are made to be independent to the color palette. We base the style on the simplicity.
                </p>
            </div>
            <div>
                <h1 className="align-baseline inline-flex text-5xl text-yellow-400">
                    <Icon icon="gridicons:customize" />
                </h1>
                <h1 className="m-6 font-bold text-white text-3xl">
                    Highly <br /> customizable
                </h1>
                <p className="text-[#888585] text-md m-0">
                    Z3 is built on top of Tailwind CSS so you can customize everything using utility classes.
                </p>
            </div>
        </section>
    );
}
