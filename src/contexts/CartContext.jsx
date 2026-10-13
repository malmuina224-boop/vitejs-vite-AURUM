import { createContext, useEffect, useMemo, useState } from 'react'

export const CartContext = createContext(null)
export function CartProvider({ children }) {
  const [items, setItems] = useState(() => JSON.parse(localStorage.getItem('aurum_cart') || '[]'))
  useEffect(() => localStorage.setItem('aurum_cart', JSON.stringify(items)), [items])
  const addItem = (product) => setItems(prev => {
    const found = prev.find(item => item.id === product.id)
    return found ? prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item) : [...prev, { ...product, quantity: 1 }]
  })
  const removeItem = id => setItems(prev => prev.filter(item => item.id !== id))
  const changeQuantity = (id, quantity) => setItems(prev => prev.map(item => item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item))
  const clearCart = () => setItems([])
  const count = items.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const value = useMemo(() => ({ items, addItem, removeItem, changeQuantity, clearCart, count, subtotal }), [items, count, subtotal])
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
