// import type React from "react"
// import type { Metadata } from "next"
// import { Geist, Geist_Mono } from "next/font/google"
// import { Analytics } from "@vercel/analytics/next"
// import "./globals.css"

// const geist = Geist({ subsets: ["latin"] })
// const geistMono = Geist_Mono({ subsets: ["latin"] })

// export const metadata: Metadata = {
//   title: "🥚Chicken Road 2 in Pakistan: Secrets of Success and Game Review InOut!🐔",
//   description: "Discover the secrets to success with Chicken Road 2 InOut Game in Pakistan! Compare, choose, and win in Islamabad and Lahore. Start playing now!",
//   keywords: [
//     "chicken road 2 inout game how choise",
//     "Islamabad chicken road demo",
//     "chicken road 2 inout game in Lahor",
//     "chicken road inout games comparison",
//     "Pakistan chicken road 2 review",
//     "chicken road game review",
//     "chicken road 2 casino Islamabad",
//     "chicken road demo Karachi",
//     "chicken road Pakistan",
//     "chicken road 2 inout game tips",
//     "chicken road 2",
//     "chicken road download"
//   ],
  
//   // Open Graph метаданные
//   openGraph: {
//     title: "Chicken Road 2 in Pakistan: Secrets of Success and Game Review InOut!",
//     description: "Discover the secrets to success in Chicken Road 2 InOut Game in Pakistan! Compare, choose, and win in Islamabad and Lahore. Start playing now!",
//     type: "website",
//     locale: "en_PK",
//   },
  
//   // Twitter Card метаданные
//   twitter: {
//     card: "summary",
//     title: "Chicken Road 2 in Pakistan: Secrets to Success and Game Review by InOut!",
//     description: "Discover the secrets to success in Chicken Road 2 InOut Game in Pakistan! Compare, choose, and win in Islamabad and Lahore. Start playing now!",
//   },
  
//   // SEO настройки
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },
  
//   // Иконки сайта
//   icons: {
//     icon: "/logo.ico",
//     apple: "/logo.ico",
//     shortcut: "/logo.ico",
//   },
  
//   // Дополнительные метаданные
//   authors: [{ name: "InOuts Games" }],
//   category: "Games",
//   classification: "Crash Game",
  
//   // Для PWA (если нужно)
//   manifest: "/manifest.json",
  
//   // Apple specific
//   appleWebApp: {
//     title: "Chicken Road 2 Pakistan",
//     statusBarStyle: "black-translucent",
//   },
  
//   // Дополнительные теги
//   other: {
//     "format-detection": "telephone=no",
//     "theme-color": "#d67413",
//     "msapplication-TileColor": "#d67413",
//   },
// }

// // Структурированные данные для Chicken Road 2
// const structuredData = {
//   "@context": "https://schema.org",
//   "@type": "Product",
//   "name": "Chicken Road 2 in Pakistan: Secrets to Success and Game Review InOut!",
//   "description": "Discover the secrets to success in Chicken Road 2 InOut Game in Pakistan! Compare, choose, and win in Islamabad and Lahore. Start playing now!",
//   "image": "https://www.chicken-road-2.pk/images/chicken-road-2-gameplay.jpg",
//   "brand": {
//     "@type": "Brand",
//     "name": "Experts on Chicken Road 2"
//   },
//   "offers": {
//     "@type": "Offer",
//     "priceCurrency": "USD",
//     "price": "0",
//     "priceValidUntil": "2026-12-31",
//     "availability": "https://schema.org/InStock",
//     "seller": {
//       "@type": "Organization",
//       "name": "Professional resource about chicken road 2"
//     }
//   },
//   "aggregateRating": {
//     "@type": "AggregateRating",
//     "ratingValue": "4.8",
//     "ratingCount": "154",
//     "bestRating": "5",
//     "worstRating": "1"
//   },
//   "review": [
//     {
//       "@type": "Review",
//       "author": {
//         "@type": "Person",
//         "name": "Yusuf Khan"
//       },
//       "reviewRating": {
//         "@type": "Rating",
//         "ratingValue": "4.3",
//         "bestRating": "5"
//       },
//       "reviewBody": "Excellent material, explained in great detail and clearly. Thank you."
//     }
//   ]
// }

// // FAQ структурированные данные
// const faqStructuredData = {
//   "@context": "https://schema.org",
//   "@type": "FAQPage",
//   "mainEntity": [
//     {
//       "@type": "Question",
//       "name": "How to choose Chicken Road 2 InOut Game?",
//       "acceptedAnswer": {
//         "@type": "Answer",
//         "text": "The choice of Chicken Road 2 InOut Game depends on your personal preferences. However, it is important to choose a version of the game that meets the requirements of your device. It is also recommended to read reviews from other users before purchasing."
//       }
//     },
//     {
//       "@type": "Question",
//       "name": "Where can I find a demo version of Chicken Road 2?",
//       "acceptedAnswer": {
//         "@type": "Answer",
//         "text": "A demo version of Chicken Road 2 can be found online. Many websites offer free demo versions of games for download. It is important to ensure that the website is reliable and secure before downloading any files."
//       }
//     },
//     {
//       "@type": "Question",
//       "name": "What comparisons can be made between the different versions of Chicken Road games?",
//       "acceptedAnswer": {
//         "@type": "Answer",
//         "text": "Versions of Chicken Road may differ in coefficient, bonuses, number of levels, and other key features. The choice of a particular version depends mainly on your personal preferences and skill level."
//       }
//     },
//     {
//       "@type": "Question",
//       "name": "Can I play Chicken Road 2 in Pakistan?",
//       "acceptedAnswer": {
//         "@type": "Answer",
//         "text": "Chicken Road 2 is available to play in Pakistan. You can download and play it on your smartphone, tablet, or computer."
//       }
//     },
//     {
//       "@type": "Question",
//       "name": "Where can I read reviews of the game Chicken Road?",
//       "acceptedAnswer": {
//         "@type": "Answer",
//         "text": "Reviews of Chicken Road can be found on many gaming websites and forums. You can also search for reviews on app and game review sites."
//       }
//     },
//     {
//       "@type": "Question",
//       "name": "How to download the Chicken Road game on Phone in Pakistan?",
//       "acceptedAnswer": {
//         "@type": "Answer",
//         "text": "To download Chicken Road on your Phone in Pakistan, you can visit the App Store or Play Market and use the search engine. Once you have found the game, click on the Download or Install button."
//       }
//     }
//   ]
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="en">
//       <head>
//         {/* Канонический URL */}
//         <link rel="canonical" href="https://www.chicken-road-2.pk/" />
        
//         {/* Hreflang для Пакистана */}
//         <link rel="alternate" hrefLang="en-pk" href="https://www.chicken-road-2.pk/" />
//         <link rel="alternate" hrefLang="en" href="https://www.chicken-road-2.pk/" />
//         <link rel="alternate" hrefLang="x-default" href="https://www.chicken-road-2.pk/" />
        
//         {/* Иконка сайта */}
//         <link rel="icon" type="image/x-icon" href="/logo.ico" />
        
//         {/* Структурированные данные для продукта */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
//         />
        
//         {/* Структурированные данные для FAQ */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
//         />
        
//         {/* Google Analytics */}
//         <script async src="https://www.googletagmanager.com/gtag/js?id=G-EV8P96FKL1"></script>
//         <script
//           dangerouslySetInnerHTML={{
//             __html: `
//               window.dataLayer = window.dataLayer || [];
//               function gtag(){dataLayer.push(arguments);}
//               gtag('js', new Date());
//               gtag('config', 'G-EV8P96FKL1');
//             `
//           }}
//         />
        
//         {/* Viewport для мобильных устройств */}
//         <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
//         {/* Дополнительные SEO теги */}
//         <meta name="language" content="English" />
//         <meta name="revisit-after" content="7 days" />
//         <meta name="rating" content="General" />
//         <meta name="copyright" content="Chicken Road 2 Pakistan" />
        
//         {/* Гео-метатеги для Пакистана */}
//         <meta name="geo.region" content="PK" />
//         <meta name="geo.placename" content="Pakistan" />
//       </head>
//       <body>
//         {children}
//         <Analytics />
//       </body>
//     </html>
//   )
// }








import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "🥚Chicken Road 2 in Pakistan: Secrets of Success and Game Review InOut!🐔",
  description: "Discover the secrets to success with Chicken Road 2 InOut Game in Pakistan!",
  robots: { index: true, follow: true },
  icons: {
    icon: "/logo.ico",
    apple: "/logo.ico",
  },
  alternates: {
    canonical: "https://www.chicken-road-2.pk/",
  },
  openGraph: {
    title: "Chicken Road 2 Pakistan",
    description: "Chicken Road 2 review",
    type: "website",
    locale: "en_PK",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${geist.className} ${geistMono.className}`}>
        {children}
        <Analytics />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EV8P96FKL1"
          strategy="afterInteractive"
        />
        <Script
          id="ga"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-EV8P96FKL1');
            `,
          }}
        />

        {/* JSON-LD */}
        <Script
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({ "@context": "https://schema.org" }),
          }}
        />
      </body>
    </html>
  )
}
