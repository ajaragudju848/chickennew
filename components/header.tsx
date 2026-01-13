"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Crown, Trophy, Menu, X, Shield, Star, Coins } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-accent/30 bg-white backdrop-blur-xl supports-[backdrop-filter]:bg-white shadow-[0_4px_20px_rgba(214,116,19,0.3)]">
      <div className="container mx-auto flex h-16 sm:h-20 items-center justify-between px-4 sm:px-6">
        {/* Логотип и название */}
        <div className="flex items-center gap-3 sm:gap-6">
          <div className="flex items-center gap-2 sm:gap-3">
  {/* Логотип */}
  <div className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 flex-shrink-0">
    <img 
      src="/lg.webp" 
      alt="Chicken Road 2 Logo"
      className="h-full w-full object-contain"
    />
  </div>
  
  {/* <div className="flex flex-col">
    <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-tight">
      VOX Casino
    </h1>
    <div className="flex items-center gap-1">
      <Shield className="h-3 w-3 text-[#d67413]" />
      <span className="text-xs text-gray-300">Licencjonowane kasyno</span>
    </div>
  </div> */}
</div>

          {/* Навигация для десктопа */}
          <nav className="hidden lg:flex items-center gap-1">
            <a
              href="#overview"
              className="px-4 py-2 text-sm font-medium text-black hover:text-[#d67413] transition-colors duration-200 hover:bg-white/5 rounded-lg flex items-center gap-2"
            >
              Overview
            </a>
            <a
              href="#comparison"
              className="px-4 py-2 text-sm font-medium text-black hover:text-[#d67413] transition-colors duration-200 hover:bg-white/5 rounded-lg flex items-center gap-2"
            >
              Comparison
            </a>
            <a
              href="#guide"
              className="px-4 py-2 text-sm font-medium text-black hover:text-[#d67413] transition-colors duration-200 hover:bg-white/5 rounded-lg flex items-center gap-2"
            >
              Guide
            </a>
            <a
              href="#reviews"
              className="px-4 py-2 text-sm font-medium text-black hover:text-[#d67413] transition-colors duration-200 hover:bg-white/5 rounded-lg flex items-center gap-2"
            >
              Reviews
            </a>
            <a
              href="#faq"
              className="px-4 py-2 text-sm font-medium text-black hover:text-[#d67413] transition-colors duration-200 hover:bg-white/5 rounded-lg flex items-center gap-2"
            >
              FAQ
            </a>
          </nav>
        </div>

        {/* Кнопки справа */}
        <div className="flex items-center gap-3">
          {/* Кнопка регистрации */}
          {/* <Button className="hidden sm:flex gap-2 bg-gradient-to-r from-[#d67413] to-[#b3590d] hover:from-[#e68a29] hover:to-[#d67413] text-white font-bold shadow-lg hover:shadow-[0_0_20px_rgba(214,116,19,0.4)] transition-all duration-300 hover:scale-105 border border-[#d67413]/40 px-6 py-2 rounded-lg">
            <Crown className="h-4 w-4" />
            <span className="hidden md:inline">Zarejestruj się</span>
            <span className="md:hidden">Rejestracja</span>
          </Button>
          
          <Button variant="outline" className="hidden bg-white sm:flex gap-2 border-[#d67413] text-[#d67413] hover:bg-black/10 hover:text-white font-medium px-4 py-2 rounded-lg">
            Zaloguj się
          </Button>

          
          <Button size="sm" className="sm:hidden bg-gradient-to-r from-[#d67413] to-[#b3590d] text-white font-bold px-4">
            Bonus +500 zł
          </Button> */}
          
          {/* Мобильное меню */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden text-black hover:bg-white/10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Мобильное меню */}
      {mobileMenuOpen && (
        <nav className="lg:hidden border-t border-[#d67413]/20 bg-white backdrop-blur-xl">
          <div className="container mx-auto px-4 py-3 flex flex-col gap-1">
            <a
              href="#overview"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 text-black hover:text-[#d67413] transition-colors font-medium hover:bg-white/5 rounded-lg flex items-center gap-3"
            >
              Overview
            </a>
            <a
              href="#comparison"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 text-black hover:text-[#d67413] transition-colors font-medium hover:bg-white/5 rounded-lg flex items-center gap-3"
            >
              Comparison
            </a>
            <a
              href="#guide"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 text-black hover:text-[#d67413] transition-colors font-medium hover:bg-white/5 rounded-lg flex items-center gap-3"
            >
              Guide
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 text-black hover:text-[#d67413] transition-colors font-medium hover:bg-white/5 rounded-lg"
            >
              Reviews
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 text-black hover:text-[#d67413] transition-colors font-medium hover:bg-white/5 rounded-lg"
            >
              FAQ
            </a>
            
            {/* <div className="flex gap-3 mt-4 px-4">
              <Button className="flex-1 bg-gradient-to-r from-[#d67413] to-[#b3590d] text-white font-bold py-3">
                Rejestracja
              </Button>
              <Button variant="outline" className="flex-1 border-[#d67413] bg-white text-[#d67413] py-3">
                Logowanie
              </Button>
            </div> */}
          </div>
        </nav>
      )}

      {/* Дополнительная строка с гарантиями */}
      {/* <div className="hidden lg:block border-t border-[#d67413]/10 bg-[#1d2036]/80">
        <div className="container mx-auto px-6 py-2">
          <div className="flex items-center justify-center gap-6 text-xs text-gray-300">
            <div className="flex items-center gap-2">
              <Shield className="h-3 w-3 text-[#d67413]" />
              <span>Licencja Curacao</span>
            </div>
            <div className="h-3 w-px bg-[#d67413]/30"></div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span>SSL Szyfrowanie</span>
            </div>
            <div className="h-3 w-px bg-[#d67413]/30"></div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-blue-500"></div>
              <span>Odpowiedzialna gra</span>
            </div>
            <div className="h-3 w-px bg-[#d67413]/30"></div>
            <div className="flex items-center gap-2">
              <Crown className="h-3 w-3 text-[#d67413]" />
              <span>18+ Tylko dla pełnoletnich</span>
            </div>
          </div>
        </div>
      </div> */}
    </header>
  )
}