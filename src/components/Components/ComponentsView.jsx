import Header from "../Header";
import Footer from "../Footer";
import React from 'react'

export default function ComponentsView() {
  return (
    <>
        <Header/>
        <main className="max-w-[1024px] mx-auto p-6 text-center text-white">
            <h1>Components</h1>
        </main>
        <Footer/>
    </>
  )
}
