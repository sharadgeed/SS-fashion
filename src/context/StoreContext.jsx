import { createContext, useContext, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const StoreContext = createContext(null);

export function StoreProvider({ children }) {
  const [cart, setCart] = useLocalStorage('atelier-cart', []);
  const [wish, setWish] = useLocalStorage('atelier-wish', []);
  const [toast, setToast] = useState('');
  const notify = (message) => { setToast(message); window.setTimeout(() => setToast(''), 2500); };
  const addToCart = (product, size = product.sizes[0], color = product.colors[0]) => {
    setCart((items) => {
      const existing = items.find((item) => item.id === product.id && item.size === size && item.color === color);
      return existing ? items.map((item) => item === existing ? {...item, qty: item.qty + 1} : item) : [...items, {...product, size, color, qty: 1}];
    });
    notify('Added to your bag');
  };
  const toggleWishlist = (id) => {
    setWish((items) => items.includes(id) ? items.filter((item) => item !== id) : [...items, id]);
    notify(wish.includes(id) ? 'Removed from wishlist' : 'Saved to wishlist');
  };
  return <StoreContext.Provider value={{cart, setCart, wish, addToCart, toggleWishlist, notify}}>{children}{toast && <div className="toast">{toast}</div>}</StoreContext.Provider>;
}

export const useStore = () => useContext(StoreContext);
