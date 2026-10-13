export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const variants = { primary: 'bg-aurum-gold text-aurum-ink hover:bg-aurum-gold-dark hover:text-white shadow-lg shadow-amber-900/10', secondary: 'border border-aurum-gold text-aurum-chocolate hover:bg-aurum-gold hover:text-white', dark: 'bg-aurum-chocolate text-white hover:bg-aurum-ink' }
  return <button className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${className}`} {...props}>{children}</button>
}
