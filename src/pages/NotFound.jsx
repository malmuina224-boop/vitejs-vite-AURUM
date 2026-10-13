import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'
export default function NotFound(){ return <main className="grid min-h-screen place-items-center bg-aurum-cream p-6 text-center"><div><p className="font-display text-8xl text-aurum-gold">404</p><h1 className="mt-3 font-display text-3xl text-aurum-chocolate">Página no encontrada</h1><Link to="/"><Button className="mt-6">Volver al inicio</Button></Link></div></main> }
