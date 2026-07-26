import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Button from './Button'
import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/home'
import Contact from './pages/contact'
import News from './pages/news'

function App() {
  const [page, setPage] = useState(1);

  const renderPage = () => {
    switch(page) {
      case 1:
        return <Home />

      case 2:
        // Shop
        return "Page not found";
        break;

      case 3:
        // News
        return <News />

      case 4:
        // about
        return "Page not found";
        break;

      case 5:
        // contact
        return <Contact />

      default:
        // 404
        return "Page not found";
    }
  }

  return (
    <>
     <div className="flex flex-col justify-center items-center">
       <div className="w-[90%]">
      {/* header */}
      <Header setP={setPage} />

      { renderPage() }

      <Footer />
      
       </div>
     </div>
    </>
  )
}

export default App
