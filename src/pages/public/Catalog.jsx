import { Search, SlidersHorizontal } from 'lucide-react'
import { useMemo, useState } from 'react'
import ProductGrid from '../../components/product/ProductGrid'
import SectionTitle from '../../components/ui/SectionTitle'
import { categories, products } from '../../data/products'
export default function Catalog() {
 const [category, setCategory] = useState('Todos'); const [query, setQuery] = useState('')
 const filtered = useMemo(() => products.filter(p => (category === 'Todos' || p.category === category) && p.name.toLowerCase().includes(query.toLowerCase())), [category, query])
 return <section className="aurum-container py-14"><SectionTitle eyebrow="Tienda" title="Catálogo AURUM" text="Encuentra la creación perfecta para celebrar, compartir o regalar."/><div className="mt-10 flex flex-col gap-4 rounded-3xl border border-stone-200 bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between"><div className="relative flex-1"><Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={18}/><input value={query} onChange={e => setQuery(e.target.value)} className="w-full rounded-full bg-stone-100 py-3 pl-11 pr-4 outline-none focus:ring-2 focus:ring-aurum-gold/40" placeholder="Buscar productos..."/></div><div className="flex items-center gap-2 overflow-auto"><SlidersHorizontal className="shrink-0 text-aurum-gold-dark"/>{categories.map(item => <button key={item} onClick={() => setCategory(item)} className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium ${category === item ? 'bg-aurum-chocolate text-white' : 'bg-stone-100 text-stone-600 hover:bg-aurum-blush'}`}>{item}</button>)}</div></div><p className="my-6 text-sm text-stone-500">{filtered.length} productos encontrados</p><ProductGrid products={filtered}/></section>
}
