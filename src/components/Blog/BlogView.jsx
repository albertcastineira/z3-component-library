import Header from "../Header";
import Footer from "../Footer";
import React from 'react'

export default function BlogView() {
  return (
    <>
        <Header/>
        <main className="max-w-[1024px] mx-auto p-6 text-center text-white">
            <h1>Blog</h1>
        </main>
        <Footer/>
    </>
  )
}
