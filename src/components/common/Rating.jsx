export default function Rating({ product }) { return <span className="rating">★ {product.rating} <small>({product.reviews})</small></span>; }
