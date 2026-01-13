"use client"

import { Button } from "@/components/ui/button"
import { Download, Gamepad2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Hero() {

  const handleDownloadClick = () => {
    if (typeof window !== "undefined" && (window as any).fbq) {
      ;(window as any).fbq("trackCustom", "DownloadNow")
    }
  }

  return (
    <section className="relative py-16 sm:py-20 md:py-28 lg:py-32 bg-gradient-to-b from-[#171a29] to-[#171a29] overflow-hidden">

      {/* фон */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/banner.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* контент */}
      <div className="relative z-10 flex flex-col items-center text-center gap-6">

        <h1 className="text-4xl font-bold text-white">
          Chicken Road 2
        </h1>

        <p className="text-lg text-gray-300 max-w-xl">
          Start playing now and test your luck
        </p>

        <div className="flex flex-col sm:flex-row gap-4">

          <Button
            size="lg"
            onClick={handleDownloadClick}
            className="gap-3 bg-gradient-to-r from-[#d67413] to-[#b3590d] text-white font-bold px-8 py-6 rounded-xl"
            asChild
          >
            <Link href="/play">
              <Download className="h-5 w-5" />
              Download Now
            </Link>
          </Button>

          <Button size="lg" variant="outline" asChild>
            <Link href="/play">
              <Gamepad2 className="h-5 w-5" />
              Try Demo Version
            </Link>
          </Button>

        </div>
      </div>
    </section>
  )
}
