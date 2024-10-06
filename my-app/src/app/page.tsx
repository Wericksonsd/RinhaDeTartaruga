import Cards from "./assets/Card"

export default function Home() {

  return (
    <div className="h-screen w-screen p-3 flex flex-col">
      <header className="w-full h-[12vh] bg-amber-500 flex flex-col items-center justify-center">
        <span className="font-extrabold text-2xl text-stone-900">CAÇA AOS</span>
        <span className="font-extrabold text-6xl text-stone-900">BIOMAS</span>
      </header>
      <main className="w-full h-full bg-slate-600 flex items-center justify-center">
        <Cards></Cards>
      </main>
      <footer className="w-full h-fit bg-teal-600">
        <div className="h-16"></div>
      </footer>
    </div>
  )

}