import { Heart, Menu, Search, ShoppingBag, User, X } from 'lucide-react'
import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import useCart from '../../hooks/useCart'
const links = [['/', 'Inicio'], ['/catalogo', 'Catálogo'], ['/nosotros', 'Nosotros'], ['/sucursales', 'Sucursales'], ['/contacto', 'Contacto']]
export default function Navbar() {
 const [open, setOpen] = useState(false); const { count } = useCart()
 const navClass = ({ isActive }) => `text-sm font-medium ${isActive ? 'text-aurum-gold' : 'text-white/80 hover:text-aurum-gold'}`
 return <header className="sticky top-0 z-50 border-b border-white/10 bg-aurum-chocolate/95 text-white backdrop-blur">
  <div className="aurum-container flex h-20 items-center justify-between"><Link to="/" className="font-display text-2xl font-bold tracking-[.18em] text-aurum-gold">AURUM<span className="block text-[8px] font-sans tracking-[.34em] text-white/60">SWEET ALCHEMY</span></Link>
  <nav className="hidden items-center gap-7 lg:flex">{links.map(([to,label]) => <NavLink key={to} to={to} className={navClass}>{label}</NavLink>)}</nav>
  <div className="flex items-center gap-1"><Link to="/catalogo" aria-label="Buscar" className="rounded-full p-2 hover:bg-white/10"><Search size={20}/></Link><button aria-label="Favoritos" className="hidden rounded-full p-2 hover:bg-white/10 sm:block"><Heart size={20}/></button><Link to="/carrito" aria-label="Carrito" className="relative rounded-full p-2 hover:bg-white/10"><ShoppingBag size={20}/>{count > 0 && <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-aurum-gold px-1 text-[10px] font-bold text-aurum-ink">{count}</span>}</Link><Link to="/login" aria-label="Cuenta" className="hidden rounded-full p-2 hover:bg-white/10 sm:block"><User size={20}/></Link><button onClick={() => setOpen(!open)} className="rounded-full p-2 lg:hidden" aria-label="Abrir menú">{open ? <X/> : <Menu/>}</button></div></div>
  {open && <nav className="border-t border-white/10 px-4 py-5 lg:hidden">{links.map(([to,label]) => <NavLink onClick={() => setOpen(false)} key={to} to={to} className="block rounded-xl px-4 py-3 text-white/80 hover:bg-white/10">{label}</NavLink>)}</nav>}
 </header>
}
