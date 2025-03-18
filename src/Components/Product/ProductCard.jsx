import React from 'react'

const ProductCard = ({product}) => {
    const { name, category, description, price, image, rating, sell, size } =
    product;
  return (
    <div>
        <a href="#" className="group relative block bg-black h-[300px]">
  <img
    alt=""
    src={image}
    className="absolute inset-0 h-[300px] w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
  />

  <div className="relative p-4 sm:p-6 lg:p-8">
    <p className="text-sm font-medium uppercase tracking-widest text-pink-500">{category}</p>

    <p className="text-xl font-bold text-white sm:text-2xl">{name}</p>
    <p className="text-xl font-bold text-white sm:text-2xl">{price}</p>

    <div className="mt-20 ">
      <div
        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <p className="text-sm text-white">
{description}
        </p>
      </div>
    </div>
  </div>
</a>
    </div>
  )
}

export default ProductCard