import React from 'react'
const cards = [
  { id: 1, 
    title: "Product One",
     description: "This is the description for card one." },
  { id: 2, 
    title: "Product Two",
     description: "This is the description for card two." },
  { id: 3, 
    title: "Product Three", 
    description: "This is the description for card three." },
  { id: 4, 
    title: "Product Four",
     description: "This is the description for card four." },
  { id: 5, 
    title: "Product Five",
     description: "This is the description for card five." },
  { id: 6, 
    title: "Product Six",
     description: "This is the description for card six." },
]

function OtherSomething() {
  return (
    <>
     <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-300 p-5">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-700">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map(card => (
          <div key={card.id}   className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-gray-200"  >
            <h2 className="text-xl font-semibold text-blue-700 mb-2">{card.title}</h2>
            <p className="text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
    
    </>
  )
}

export default OtherSomething
