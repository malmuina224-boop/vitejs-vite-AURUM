import { Heart, Plus, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import useCart from '../../hooks/useCart'
import ProductVisual from './ProductVisual'
export default function ProductCard({ product }) {
 const { addItem } = useCart()
 return <article className="group overflow-hidden rounded-[1.75rem] border border-stone-200/70 bg-white shadow-sm hover:-translate-y-1 hover:shadow-xl">
  <div className="relative"><Link to={`/producto/${product.slug}`}><ProductVisual product={product} className="h-64" /></Link><button aria-label="Agregar a favoritos" className="absolute right-4 top-4 rounded-full bg-white/90 p-2 text-aurum-chocolate shadow"><Heart size={18}/></button></div>
  <div className="p-5"><div className="flex items-center justify-between gap-3"><span className="text-xs font-semibold uppercase tracking-wider text-aurum-gold-dark">{product.category}</span><span className="flex items-center gap-1 text-sm"><Star size={15} className="fill-aurum-gold text-aurum-gold"/>{product.rating}</span></div><Link to={`/producto/${product.slug}`}><h3 className="mt-2 font-display text-xl font-semibold text-aurum-chocolate group-hover:text-aurum-gold-dark">{product.name}</h3></Link><p className="mt-2 line-clamp-2 text-sm leading-6 text-stone-500">{product.description}</p><div className="mt-5 flex items-center justify-between"><strong className="text-xl text-aurum-chocolate">${product.price.toLocaleString('es-MX')}</strong><button onClick={() => addItem(product)} className="grid h-11 w-11 place-items-center rounded-full bg-aurum-gold text-aurum-ink hover:bg-aurum-chocolate hover:text-white" aria-label={`Agregar ${product.name} al carrito`}><Plus/></button></div></div>
 </article>
}
