import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { track } from './services/analytics'
import DemoTour from './components/DemoTour'
import BusinessLayout from './business/BusinessLayout'
import AuthGate from './business/AuthGate'
import Dashboard from './business/pages/Dashboard'
import Orders from './business/pages/Orders'
import Customers from './business/pages/Customers'
import BProducts from './business/pages/Products'
import Invoices from './business/pages/Invoices'
import Marketing from './business/pages/Marketing'
import Insights from './business/pages/Insights'
import QRPage from './business/pages/QRPage'
import Conclusion from './business/pages/Conclusion'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppFloatButton from './components/WhatsAppFloatButton'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import About from './pages/About'
import Contact from './pages/Contact'

function Shop() {
  const { pathname } = useLocation()
  useEffect(() => { const m = pathname.match(/^\/produits\/(.+)$/); if (m) track('view', { product: decodeURIComponent(m[1]) }) }, [pathname])
  return (
    <div className="flex min-h-screen flex-col bg-bg font-body text-ink">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produits" element={<Products />} />
          <Route path="/produits/:id" element={<ProductDetail />} />
          <Route path="/panier" element={<Cart />} />
          <Route path="/commande" element={<Checkout />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloatButton />
    </div>
  )
}

export default function App() {
  const { pathname } = useLocation()
  const biz = pathname.startsWith('/business')
  return (
    <>
      {biz ? (
        <Routes>
          <Route path="/business" element={<AuthGate><BusinessLayout /></AuthGate>}>
            <Route index element={<Dashboard />} />
            <Route path="commandes" element={<Orders />} />
            <Route path="clients" element={<Customers />} />
            <Route path="produits" element={<BProducts />} />
            <Route path="factures" element={<Invoices />} />
            <Route path="marketing" element={<Marketing />} />
            <Route path="insights" element={<Insights />} />
            <Route path="qr" element={<QRPage />} />
            <Route path="conclusion" element={<Conclusion />} />
          </Route>
        </Routes>
      ) : <Shop />}
      <DemoTour />
    </>
  )
}
