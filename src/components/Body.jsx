import MidSection from "./Home/MidSection";
import TopSection from "./Home/TopSection";

export default function Body() {
  return (
    <main className="max-w-[1280px] mx-auto p-6 text-center">
      <TopSection/>
      <MidSection/>
    </main>
  )
}
