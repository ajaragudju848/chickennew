"use client"

import { Button } from "@/components/ui/button"
import { Download, Gamepad2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative py-16 sm:py-20 md:py-28 lg:py-32 bg-gradient-to-b from-[#171a29] via-[#1a1d2e] to-[#171a29] overflow-hidden">
      {/* Декоративные элементы фона */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/banner.png" // или casino-background.webp
          alt="VOX Casino Background"
          fill
          className="object-cover object-center"
          quality={100}
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Основной контент */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">


          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white drop-shadow-lg">Chicken Road 2 Best Crash Game: Your Choice </span>
            <span className="bg-gradient-to-r from-[#d67413] via-[#e68a29] to-[#d67413] bg-clip-text text-transparent animate-gradient">
              in Pakistan
            </span>
          </h1>

          

          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Discover the secrets to success in Chicken Road 2 InOut Game in Pakistan! Compare, choose and explore whether this popular earning game is real or fake. 

 <span className="text-[#d67413] font-semibold">Start playing now!</span>
          </p>

          {/* Основные кнопки */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
  <Button
    size="lg"
    className="gap-3 bg-gradient-to-r from-[#d67413] to-[#b3590d] hover:from-[#e68a29] hover:to-[#d67413] text-white font-bold text-lg px-8 py-6 rounded-xl shadow-[0_10px_40px_rgba(214,116,19,0.4)] hover:shadow-[0_15px_50px_rgba(214,116,19,0.6)] transition-all duration-300 hover:scale-105 group"
    asChild
  >
    <Link href="/play">
      <Download className="h-5 w-5" />
      Download Now
    </Link>
  </Button>

  <Button
    size="lg"
    variant="outline"
    className="gap-3 border-2 border-[#d67413] bg-white text-[#d67413] hover:bg-[#d67413]/10 hover:border-[#e68a29] hover:text-white font-semibold text-lg px-8 py-6 rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
    asChild
  >
    <Link href="/play">
      <Gamepad2 className="h-5 w-5" />
      Try Demo Version
    </Link>
  </Button>
</div>
          

          
        </div>
      </div>

      {/* Анимация для gradient текста */}
      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  )
}