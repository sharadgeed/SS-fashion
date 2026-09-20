import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useStore } from '../../context/StoreContext';

export default function Header() {
  const { cart } = useStore(); const [open, setOpen] = useState(false); const [query, setQuery] = useState(''); const navigate = useNavigate();
  const submit = (event) => { event.preventDefault(); if (query.trim()) navigate(`/search?q=${encodeURIComponent(query)}`); };
  const count = cart.reduce((total, item) => total + item.qty, 0);
  return <header><div className="topline">COMPLIMENTARY DELIVERY ON ORDERS ABOVE ₹2,999 <span>•</span> EASY 14-DAY RETURNS</div><div className="nav"><button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Open navigation">☰</button><Link className="brand" to="/">ATELIER<span>°</span></Link><nav className={open ? 'open' : ''}>{[['/','Home'],['/men','Men'],['/women','Women'],['/children','Children'],['/new','New Arrivals'],['/sale','Sale']].map(([to, label]) => <NavLink end={to === '/'} key={to} to={to} onClick={() => setOpen(false)}>{label}</NavLink>)}</nav><div className="nav-actions"><form className="search" onSubmit={submit}><input value={query} onChange={(event) => setQuery(event.target.value)} aria-label="Search products" placeholder="Search"/><button aria-label="Submit search">⌕</button></form><Link to="/wishlist" aria-label="Wishlist"><span className="icon">♡</span></Link><Link to="/cart" className="bag" aria-label="Cart"><span className="icon">Bag</span>{count > 0 && <b>{count}</b>}</Link><Link className="profile" to="/support" aria-label="Profile"><span className="icon">◯</span></Link></div></div></header>;
}
