import React from 'react'

function Cards({item }) {
    
  return (
    <>
    <div>
    <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?t=st=1724258104~exp=1724261704~hmac=363d8b97b18658dfc1648067c67fb4d5c50a0a36715977a4f6bf23092c0d474a&w=740"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions  justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="badge badge-outline hover:text-pink-500">Buy Now</div>
    </div>
  </div>
</div>
    </div>

    </>
  )
}

export default Cards