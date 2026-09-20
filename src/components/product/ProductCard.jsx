import { Link } from 'react-router-dom';
import { useStore } from '../../context/StoreContext';
import Rating from '../common/Rating';
import { formatPrice } from '../../utils/formatPrice';
import { calculateDiscount } from '../../utils/calculateDiscount';

const swatchColor = (color) => color === 'Ivory' || color === 'Cream' || color === 'Ecru' || color === 'Pearl' || color === 'White' ? '#f3f0e8' : color === 'Black' || color === 'Espresso' || color === 'Charcoal' || color === 'Navy' ? '#27282a' : color === 'Sage' || color === 'Olive' ? '#75816d' : color === 'Cherry' || color === 'Red' ? '#a2282c' : '#7b9cba';

export default function ProductCard({ product }) {
  const { wish, toggleWishlist, addToCart } = useStore();
  return <article className="product-card"><div className="product-image"><Link to={`/product/${product.id}`}><img loading="lazy" src={product.img} alt={product.name}/></Link>{product.tag && <em>{product.tag}</em>}<button className={`heart ${wish.includes(product.id) ? 'saved' : ''}`} onClick={() => toggleWishlist(product.id)} aria-label="Toggle wishlist">♥</button><button className="quick-add" onClick={() => addToCart(product)}>Add to bag</button></div><div className="product-info"><p>{product.gender} / {product.category}</p><div className="product-line"><Link to={`/product/${product.id}`}>{product.name}</Link><Rating product={product}/></div><strong>{formatPrice(product.price)}</strong> <del>{formatPrice(product.originalPrice)}</del> <span className="discount">{calculateDiscount(product.price, product.originalPrice)}% off</span><div className="swatches">{product.colors.map((color) => <i key={color} title={color} style={{background: swatchColor(color)}}/>)}</div></div></article>;
}
