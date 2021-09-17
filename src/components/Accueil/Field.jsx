import React from 'react'

export default function Field({ name, price, surface, owner }) {
  return (
    <li className="item">
      <div className="product-info">
        <span className="product-title">
          {name}
          <span className="badge badge-info float-right">{price.toLocaleString('fr', { maximumFractionDigits: 2 })} Ar</span><br />
          <span className="badge badge-info float-right">{surface.toLocaleString('fr', { maximumFractionDigits: 2 })} m²</span>
        </span>
        <span className="product-description">propritaire : {owner.lastName} {owner.firstName}</span>
      </div>
    </li>
  )
}
