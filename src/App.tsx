import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, type ReactNode } from "react"
import { ScrollProgress } from "./components/ScrollProgress"
import { WhatsAppWidget } from "./components/WhatsAppWidget"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import ServerError from "./pages/ServerError"
import Offline from "./pages/Offline"
import Maintenance from "./pages/Maintenance"
import MentionsLegales from "./pages/MentionsLegales"
import Confidentialite from "./pages/Confidentialite"
import Cgu from "./pages/Cgu"

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
      {children}
    </motion.div>
  )
}

export default function App() {
  const location = useLocation()
  const isHome = location.pathname === "/"

  return (
    <>
      {isHome && <ScrollProgress />}
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />
          <Route
            path="/mentions-legales"
            element={
              <PageTransition>
                <MentionsLegales />
              </PageTransition>
            }
          />
          <Route
            path="/confidentialite"
            element={
              <PageTransition>
                <Confidentialite />
              </PageTransition>
            }
          />
          <Route
            path="/cgu"
            element={
              <PageTransition>
                <Cgu />
              </PageTransition>
            }
          />
          <Route
            path="/500"
            element={
              <PageTransition>
                <ServerError />
              </PageTransition>
            }
          />
          <Route
            path="/offline"
            element={
              <PageTransition>
                <Offline />
              </PageTransition>
            }
          />
          <Route
            path="/maintenance"
            element={
              <PageTransition>
                <Maintenance />
              </PageTransition>
            }
          />
          <Route
            path="*"
            element={
              <PageTransition>
                <NotFound />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>
      <WhatsAppWidget />
    </>
  )
}
