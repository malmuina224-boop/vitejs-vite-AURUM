import { MapPin } from 'lucide-react'
import StaticPage from './StaticPage'
const branches=['Centro','Norte','Plaza','Premium']
export default function Branches(){ return <StaticPage eyebrow="Encuéntranos" title="Nuestras sucursales"><div className="grid gap-4 sm:grid-cols-2">{branches.map((name,i)=><article key={name} className="rounded-3xl bg-white p-6 shadow-sm"><MapPin className="text-aurum-gold-dark"/><h2 className="mt-3 font-display text-2xl text-aurum-chocolate">Sucursal {name}</h2><p className="mt-2 text-sm">Dirección demostrativa {i+1}, Ciudad Juárez, Chihuahua.</p></article>)}</div></StaticPage> }
