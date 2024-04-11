const ItemDetail = ({product}) => {
  return (
    <div>
        <h1 className="name-detail">{product.name}</h1>
        <img className="image-detail" src={product.image} />
        <p className="detail-detail">{product.description}</p>
    </div>
  )
}

export default ItemDetail