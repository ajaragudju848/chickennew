// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Coins, Sparkles, AlertTriangle, Target, Clock, BarChart3, DollarSign, Trophy, Gamepad2, Zap, Crown, ChartBar, Dice5, Medal, ShieldCheck } from "lucide-react"
// import { Progress } from "@/components/ui/progress"
// import { Badge } from "@/components/ui/badge"

// export function SlotOverview() {
//   // Данные для таблицы характеристик
//   const slotFeatures = [
//     { feature: "RTP (Zwrot dla gracza)", value: "96.5%", level: "Średni", color: "text-green-500" },
//     { feature: "Zmienność (Volatility)", value: "Wysoka", level: "Wysoki", color: "text-amber-500" },
//     { feature: "Linie wypłat", value: "20", level: "Standard", color: "text-gray-400" },
//     { feature: "Maksymalna wygrana", value: "5000x", level: "Wysoki", color: "text-[#d67413]" },
//     { feature: "Bonus Buy", value: "Dostępny", level: "Tak", color: "text-green-500" },
//     { feature: "Darmowe spiny", value: "Do 20", level: "Średni", color: "text-blue-400" },
//     { feature: "Mnożniki", value: "Do 10x", level: "Wysoki", color: "text-amber-500" },
//     { feature: "Wild Symbol", value: "Tak", level: "Dostępny", color: "text-green-500" },
//   ]

//   // Данные для прогресс-баров
//   const progressData = [
//     { label: "Potencjał wygranych", value: 85, color: "bg-green-500" },
//     { label: "Interesująca grafika", value: 70, color: "bg-blue-500" },
//     { label: "Efekty dźwiękowe", value: 65, color: "bg-[#d67413]" },
//     { label: "Płynność gry", value: 90, color: "bg-cyan-500" },
//     { label: "Częstotliwość bonusów", value: 60, color: "bg-amber-500" },
//   ]

//   // Статистика gier
//   const gameStats = [
//     { label: "Łączna liczba spinów", value: "2,548", icon: <Gamepad2 className="h-5 w-5" />, color: "bg-blue-500/20" },
//     { label: "Średnia wygrana", value: "1.8x", icon: <Coins className="h-5 w-5" />, color: "bg-[#d67413]/20" },
//     { label: "Największa wygrana", value: "245x", icon: <Trophy className="h-5 w-5" />, color: "bg-amber-500/20" },
//     { label: "Aktywowane bonusy", value: "37", icon: <Zap className="h-5 w-5" />, color: "bg-purple-500/20" },
//   ]

//   return (
//     <section id="przeglad" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-[#171a29] via-[#1a1d2e] to-[#171a29]">
//       <div className="container mx-auto px-4">
//         <div className="max-w-6xl mx-auto">
//           {/* Заголовок */}
//           <div className="flex flex-col items-center justify-center gap-4 mb-10 sm:mb-12">
//             <div className="relative">
//               <div className="absolute -inset-4 bg-gradient-to-r from-[#d67413] to-[#b3590d] rounded-full blur-xl opacity-20"></div>
//               <div className="relative flex items-center gap-3">
//                 <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#d67413] to-[#b3590d] flex items-center justify-center shadow-lg shadow-[#d67413]/30">
//                   <Crown className="h-6 w-6 text-white" />
//                 </div>
//                 <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center">
//                   Pełna Analiza Chicken Road
//                 </h2>
//               </div>
//             </div>
//             <p className="text-base text-gray-300 text-center max-w-2xl">
//               Szczegółowy przegląd slotu, statystyki i oceny po intensywnym testowaniu
//             </p>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
//             {/* Основная карточка */}
//             <Card className="lg:col-span-2 border border-white/10 bg-[#1d2036]/60 backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
//               <CardHeader className="border-b border-white/10">
//                 <CardTitle className="flex items-center gap-3 text-xl text-white">
//                   <ChartBar className="h-6 w-6 text-[#d67413]" />
//                   Kluczowe Wskaźniki Wydajności
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="pt-6">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
//                   {gameStats.map((stat, index) => (
//                     <div 
//                       key={index} 
//                       className={`p-4 rounded-xl border border-white/10 ${stat.color} backdrop-blur-sm hover:border-[#d67413]/30 transition-all duration-300 hover:scale-105 hover:shadow-lg`}
//                     >
//                       <div className="flex items-center gap-3 mb-3">
//                         <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
//                           {stat.icon}
//                         </div>
//                         <span className="text-sm font-medium text-gray-300">{stat.label}</span>
//                       </div>
//                       <span className="text-2xl font-bold text-white">{stat.value}</span>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Прогресс-бары */}
//                 <div className="space-y-5 mb-6">
//                   <h4 className="text-lg font-semibold text-white flex items-center gap-3">
//                     <Medal className="h-5 w-5 text-[#d67413]" />
//                     Nasza Ocena Slotu
//                   </h4>
//                   {progressData.map((item, index) => (
//                     <div key={index} className="space-y-2">
//                       <div className="flex justify-between items-center">
//                         <span className="text-sm font-medium text-gray-300">{item.label}</span>
//                         <span className="text-sm font-bold text-white">{item.value}%</span>
//                       </div>
//                       <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
//                         <div 
//                           className={`h-full rounded-full ${item.color} transition-all duration-1000`}
//                           style={{ width: `${item.value}%` }}
//                         />
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Боковая панель */}
//             <Card className="border border-white/10 bg-gradient-to-b from-[#d67413]/5 to-transparent backdrop-blur-sm">
//               <CardHeader className="border-b border-white/10">
//                 <CardTitle className="flex items-center gap-3 text-white">
//                   <AlertTriangle className="h-6 w-6 text-amber-500" />
//                   Informacje Kluczowe
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="pt-6 space-y-4">
//                 <div className="space-y-3">
//                   <div className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-amber-500/10 to-transparent border border-amber-500/20">
//                     <span className="text-sm font-medium text-gray-300">Poziom Ryzyka</span>
//                     <Badge className="bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold">WYSOKI</Badge>
//                   </div>
//                   <div className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-blue-500/10 to-transparent border border-blue-500/20">
//                     <span className="text-sm font-medium text-gray-300">Dla Początkujących</span>
//                     <Badge className="border border-white/20 text-white bg-white/5 font-bold">NIE</Badge>
//                   </div>
//                   <div className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-[#d67413]/10 to-transparent border border-[#d67413]/20">
//                     <span className="text-sm font-medium text-gray-300">Optymalny Czas Gry</span>
//                     <Badge className="bg-gradient-to-r from-[#d67413] to-[#b3590d] text-white font-bold">15-30 min</Badge>
//                   </div>
//                 </div>

//                 <div className="p-4 rounded-lg bg-gradient-to-br from-white/5 to-transparent border border-white/10">
//                   <div className="flex items-center gap-3 mb-3">
//                     <Clock className="h-5 w-5 text-[#d67413]" />
//                     <h4 className="font-semibold text-white">Nasza Rekomendacja</h4>
//                   </div>
//                   <p className="text-sm text-gray-300 leading-relaxed">
//                     Slot dla doświadczonych graczy preferujących wysokie ryzyko. Wymaga większego budżetu i cierpliwości, ale oferuje potencjalnie duże wygrane.
//                   </p>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>

//           {/* Таблица характеристик */}
//           <Card className="mb-8 border border-white/10 bg-[#1d2036]/60 backdrop-blur-sm overflow-hidden">
//             <CardHeader className="bg-gradient-to-r from-[#d67413]/10 to-[#b3590d]/10 border-b border-white/10">
//               <CardTitle className="flex items-center gap-3 text-white">
//                 <Dice5 className="h-6 w-6 text-[#d67413]" />
//                 Specyfikacja Techniczna
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="p-0">
//               <div className="overflow-x-auto">
//                 <table className="w-full">
//                   <thead>
//                     <tr className="bg-white/5 border-b border-white/10">
//                       <th className="text-left p-4 font-semibold text-gray-300">Funkcja</th>
//                       <th className="text-left p-4 font-semibold text-gray-300">Wartość</th>
//                       <th className="text-left p-4 font-semibold text-gray-300">Poziom</th>
//                       <th className="text-left p-4 font-semibold text-gray-300">Ocena</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {slotFeatures.map((item, index) => (
//                       <tr 
//                         key={index} 
//                         className="border-b border-white/5 hover:bg-white/5 transition-colors"
//                       >
//                         <td className="p-4 font-medium text-white">{item.feature}</td>
//                         <td className="p-4 font-bold text-white">{item.value}</td>
//                         <td className="p-4">
//                           <Badge className={`${item.color} border ${item.color.replace('text', 'border')}/20 bg-white/5 font-semibold`}>
//                             {item.level}
//                           </Badge>
//                         </td>
//                         <td className="p-4">
//                           <div className="flex items-center gap-3">
//                             <div className="h-2 w-24 rounded-full bg-white/10 overflow-hidden">
//                               <div 
//                                 className={`h-full rounded-full ${item.color.replace('text', 'bg')}`}
//                                 style={{ width: `${Math.random() * 30 + 70}%` }}
//                               />
//                             </div>
//                             <span className="text-sm font-bold text-white">
//                               {Math.floor(Math.random() * 30 + 70)}%
//                             </span>
//                           </div>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </CardContent>
//           </Card>

//           {/* Секция с изображением и описанием */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
//             <Card className="overflow-hidden border border-white/10 bg-transparent backdrop-blur-sm">
//               <CardContent className="p-0">
//                 <div className="relative h-64 sm:h-80 group">
//                   <div className="absolute inset-0 bg-gradient-to-br from-[#d67413]/20 to-transparent opacity-50"></div>
//                   <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white">
//                     <div className="text-center">
//                       <h3 className="text-2xl sm:text-3xl font-bold mb-3">CHICKEN ROAD</h3>
//                       <p className="text-gray-300 max-w-md">
//                         Kliknij, aby zobaczyć pełną galerię zdjęć i szczegóły gry
//                       </p>
//                     </div>
                    
//                     <div className="flex gap-4 mt-6">
//                       <div className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-[#d67413]/30 transition-colors cursor-pointer">
//                         <Sparkles className="h-5 w-5" />
//                       </div>
//                       <div className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-[#d67413]/30 transition-colors cursor-pointer">
//                         <Coins className="h-5 w-5" />
//                       </div>
//                       <div className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-[#d67413]/30 transition-colors cursor-pointer">
//                         <Trophy className="h-5 w-5" />
//                       </div>
//                     </div>
//                   </div>
                  
//                   {/* Декоративные элементы */}
//                   <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#d67413] to-transparent rounded-full blur-3xl opacity-20"></div>
//                   <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#d67413] to-transparent rounded-full blur-3xl opacity-20"></div>
//                 </div>
//               </CardContent>
//             </Card>

//             <Card className="border border-white/10 bg-[#1d2036]/60 backdrop-blur-sm">
//               <CardHeader className="border-b border-white/10">
//                 <CardTitle className="flex items-center gap-3 text-white">
//                   <Target className="h-6 w-6 text-[#d67413]" />
//                   Doświadczenia Graczy
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="pt-6">
//                 <div className="space-y-4">
//                   <div className="p-4 rounded-lg bg-gradient-to-r from-green-500/10 to-transparent border border-green-500/20">
//                     <div className="flex items-center gap-3 mb-3">
//                       <Trophy className="h-5 w-5 text-green-500" />
//                       <h4 className="font-semibold text-white">Pozytywne Aspekty</h4>
//                     </div>
//                     <ul className="space-y-2 text-sm">
//                       {[
//                         "Wysokie potencjalne wygrane do 5000x",
//                         "Ciekawa mechanika bonusów",
//                         "Szybka i płynna rozgrywka",
//                         "Interesująca tematyka i grafika"
//                       ].map((item, index) => (
//                         <li key={index} className="flex items-center gap-3 text-gray-300">
//                           <div className="h-2 w-2 rounded-full bg-green-500" />
//                           {item}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>

//                   <div className="p-4 rounded-lg bg-gradient-to-r from-amber-500/10 to-transparent border border-amber-500/20">
//                     <div className="flex items-center gap-3 mb-3">
//                       <AlertTriangle className="h-5 w-5 text-amber-500" />
//                       <h4 className="font-semibold text-white">Wyzwania</h4>
//                     </div>
//                     <ul className="space-y-2 text-sm">
//                       {[
//                         "Bardzo wysoka zmienność (volatility)",
//                         "Długie serie bez znaczących wygranych",
//                         "Wymaga większego budżetu i cierpliwości",
//                         "Mniej przyjazny dla początkujących"
//                       ].map((item, index) => (
//                         <li key={index} className="flex items-center gap-3 text-gray-300">
//                           <div className="h-2 w-2 rounded-full bg-amber-500" />
//                           {item}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>

//                 <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-[#d67413]/10 to-[#b3590d]/10 border border-[#d67413]/20">
//                   <div className="flex items-center justify-between mb-3">
//                     <h4 className="font-semibold text-white">Ogólna Ocena</h4>
//                     <Badge className="bg-gradient-to-r from-[#d67413] to-[#b3590d] text-white font-bold text-lg px-4 py-2">
//                       7.8/10
//                     </Badge>
//                   </div>
//                   <p className="text-sm text-gray-300">
//                     Solidny slot dla miłośników wysokiego ryzyka. Nie dla każdego, ale jeśli lubisz emocje i masz odpowiedni budżet, warto spróbować.
//                   </p>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>

//           {/* Заключительное описание */}
//           <Card className="border border-white/10 bg-gradient-to-br from-[#d67413]/5 to-transparent backdrop-blur-sm">
//             <CardContent className="p-6">
//               <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
//                 <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#d67413] to-[#b3590d] flex items-center justify-center shadow-lg">
//                   <ShieldCheck className="h-6 w-6 text-white" />
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-bold text-white mb-2">Podsumowanie Po Testowaniu</h3>
//                   <p className="text-gray-300">
//                     Ostateczne wnioski po kilkudniowym intensywnym testowaniu slotu Chicken Road
//                   </p>
//                 </div>
//               </div>
              
//               <div className="space-y-6">
//                 <p className="text-gray-300 leading-relaxed">
//                   Po intensywnym testowaniu Chicken Road przez kilka dni możemy potwierdzić, że jest to slot przeznaczony dla graczy o stalowych nerwach. Wysoka zmienność oznacza możliwość długich serii bez znaczących wygranych, ale kiedy już wpadnie bonus lub duży mnożnik, nagrody mogą być naprawdę imponujące.
//                 </p>
                
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   <div className="p-4 rounded-lg bg-gradient-to-br from-[#d67413]/10 to-transparent border border-[#d67413]/20">
//                     <h4 className="font-semibold text-white mb-3 flex items-center gap-3">
//                       <Zap className="h-5 w-5 text-[#d67413]" />
//                       Zalecane Strategie
//                     </h4>
//                     <ul className="space-y-2 text-sm text-gray-300">
//                       {[
//                         "Start od minimalnej stawki",
//                         "Używanie Bonus Buy po 50 spinach",
//                         "Stop-loss na poziomie 100x depozytu",
//                         "Granie w krótkich sesjach (max 30 min)"
//                       ].map((item, index) => (
//                         <li key={index} className="flex items-center gap-2">
//                           <div className="h-1.5 w-1.5 rounded-full bg-[#d67413]" />
//                           {item}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
                  
//                   <div className="p-4 rounded-lg bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20">
//                     <h4 className="font-semibold text-white mb-3 flex items-center gap-3">
//                       <Target className="h-5 w-5 text-blue-500" />
//                       Dla Kogo Ten Slot?
//                     </h4>
//                     <ul className="space-y-2 text-sm text-gray-300">
//                       {[
//                         "Doświadczeni gracze kasynowi",
//                         "Miłośnicy wysokiego ryzyka",
//                         "Poszukujący dużych mnożników",
//                         "Gracze z odpowiednim budżetem"
//                       ].map((item, index) => (
//                         <li key={index} className="flex items-center gap-2">
//                           <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
//                           {item}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   )
// }



"use client"

import {
  Map,
  PlayCircle,
  Smartphone,
  Download,
  Shield,
  Clock,
  PiggyBank,
  HelpCircle,
  Sliders
} from "lucide-react";
import {
  Settings,
  Monitor,
  HardDrive,
  Globe,
  Star,
  ThumbsUp,
  Lightbulb
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ShieldCheck,
  Gift,
  Dice5,
  Users,
  Trophy,
  CreditCard,
  Zap,
  Award,
  Calendar,
  Coins,
  Gamepad2,
  Sparkles,
  BarChart3,
  Crown,
  Target,
  Medal,
  AlertTriangle,
  Check,
  MessageSquare,
  User
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export function VoxCasinoOverview() {
  // Dane dotyczące kluczowych cech kasyna
  const keyFeatures = [
    { feature: "Bonus Powitalny", value: "do 5000 zł + 300 FS", level: "Bardzo wysoki", color: "text-orange-600", icon: <Gift className="h-4 w-4" /> },
    { feature: "Licencja", value: "Ważna", level: "Bezpieczeństwo", color: "text-green-600", icon: <ShieldCheck className="h-4 w-4" /> },
    { feature: "Szyfrowanie", value: "SSL", level: "Standard", color: "text-blue-600", icon: <ShieldCheck className="h-4 w-4" /> },
    { feature: "Gry na Żywo", value: "Dostępne", level: "Tak", color: "text-green-600", icon: <Users className="h-4 w-4" /> },
    { feature: "Turnieje", value: "Co tydzień", level: "Częste", color: "text-amber-600", icon: <Trophy className="h-4 w-4" /> },
    { feature: "Jackpoty", value: "Progresywne", level: "Duże", color: "text-orange-600", icon: <Coins className="h-4 w-4" /> },
    { feature: "Płatności", value: "Kryptowaluty", level: "Nowoczesne", color: "text-purple-600", icon: <CreditCard className="h-4 w-4" /> },
    { feature: "Dostawcy Gier", value: "Spinomenal, EvoPlay", level: "Topowi", color: "text-cyan-600", icon: <Gamepad2 className="h-4 w-4" /> },
  ];

  // Dane dla pasków postępu (ocena aspektów)
  const ratingData = [
    { label: "Engaging gameplay with challenging obstacles", value: 95, color: "bg-green-600", icon: <ShieldCheck className="h-4 w-4" /> },
    { label: "Multiple levels with increasing difficulty", value: 90, color: "bg-orange-600", icon: <Gift className="h-4 w-4" /> },
    { label: "Available in English and Urdu (20+ languages)", value: 88, color: "bg-blue-600", icon: <Dice5 className="h-4 w-4" /> },
    { label: "Free demo version to try before buying", value: 85, color: "bg-cyan-600", icon: <Zap className="h-4 w-4" /> },
    { label: "Fast withdrawals, welcome bonuses, and security", value: 82, color: "bg-purple-600", icon: <Users className="h-4 w-4" /> },
  ];

  // Szczegóły pakietu powitalnego
  const welcomePackages = [
    { step: "Pierwszy Depozyt", bonus: "125%", spins: "100 FS", requirement: "Obłożenie x40" },
    { step: "Drugi Depozyt", bonus: "150%", spins: "100 FS", requirement: "Obłożenie x40" },
    { step: "Trzeci Depozyt", bonus: "150%", spins: "100 FS", requirement: "Obłożenie x40" },
  ];

  return (
    <section id="overview" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Główna sekcja - Ocena i cechy */}
            <Card className="lg:col-span-2 border border-gray-200 bg-white">
              <CardHeader className="border-b border-gray-200">
                <CardTitle className="flex items-center gap-3 text-xl text-gray-900">
                  <BarChart3 className="h-6 w-6 text-orange-600" />
                  Chicken Road 2 InOut Game: How to Choose the Best Game in Pakistan
                </CardTitle>
                <p className="text-gray-600">Chicken Road 2 InOut Game is at the forefront of gaming platforms, bringing a unique take on the classic "cross the road" concept. But how do you choose this game and be confident in your choice? This review will help you figure it out.</p>
              </CardHeader>
              <CardContent className="pt-6">
                {/* Paski oceny */}
                <div className="space-y-5 mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 flex items-center gap-3">
                    <Medal className="h-5 w-5 text-orange-600" />
                    Key Features
                  </h4>
                  {ratingData.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          {item.icon}
                          <span className="text-sm font-medium text-gray-700">{item.label}</span>
                        </div>
                        <span className="text-sm font-bold text-gray-900">{item.value}%</span>
                      </div>
                      <Progress value={item.value} className="h-2 bg-gray-100 [&>div]:bg-gradient-to-r [&>div]:from-orange-600 [&>div]:to-amber-500" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Panel boczny - Bonusy */}
            <Card className="border border-gray-200 bg-white">
              <CardHeader className="border-b border-gray-200">
                <CardTitle className="flex items-center gap-3 text-gray-900">
                  <Settings className="h-6 w-6 text-orange-600" />
                  Game Specifications
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {/* Main Spec Card */}
                  <div className="text-center p-4 rounded-xl bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">Crash / Burst</h3>
                    <p className="text-sm text-gray-600">with step-multiplier</p>
                  </div>

                  {/* Specifications Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="p-3 rounded-lg bg-gray-50 border border-gray-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Monitor className="h-4 w-4 text-gray-600" />
                        <span className="text-sm font-semibold text-gray-900">Platforms</span>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Mobile:</span>
                          <span className="text-gray-900 font-medium">iOS, Android</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Desktop:</span>
                          <span className="text-gray-900 font-medium">Windows/MacOS</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-gray-50 border border-gray-200">
                      <div className="flex items-center gap-2 mb-2">
                        <HardDrive className="h-4 w-4 text-gray-600" />
                        <span className="text-sm font-semibold text-gray-900">Size</span>
                      </div>
                      <p className="text-xl font-bold text-gray-900 text-right">~20 MB</p>
                      <p className="text-xs text-gray-500 text-right mt-1">Lightweight & Fast</p>
                    </div>

                    <div className="p-3 rounded-lg bg-gray-50 border border-gray-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Globe className="h-4 w-4 text-gray-600" />
                        <span className="text-sm font-semibold text-gray-900">Languages</span>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Total:</span>
                          <span className="text-gray-900 font-medium">20+ Languages</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Includes:</span>
                          <span className="text-gray-900 font-medium">EN, UR, HI</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-gray-50 border border-gray-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <span className="text-sm font-semibold text-gray-900">Rating</span>
                      </div>
                      <div className="flex items-center justify-end gap-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 ${i < 4 ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
                            />
                          ))}
                        </div>
                        <span className="text-xl font-bold text-gray-900">4.5/5</span>
                      </div>
                      <p className="text-xs text-gray-500 text-right mt-1">User Rating</p>
                    </div>
                  </div>

                  {/* Max Win Highlight */}
                  <div className="p-4 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200">
                    <div className="flex items-center gap-3 mb-2">
                      <Trophy className="h-5 w-5 text-green-600" />
                      <h4 className="font-semibold text-gray-900">Maximum Win</h4>
                    </div>
                    <div className="text-center py-2">
                      <div className="text-3xl font-bold text-gray-900 mb-1">3,6 Million RS</div>
                      <p className="text-sm text-green-600 font-medium">Life-changing Jackpot</p>
                    </div>
                    <div className="mt-3 pt-3 border-t border-green-200">
                      <p className="text-sm text-gray-600">
                        Progressive multiplier system with unlimited win potential. Features include auto-cashout, manual control, and real-time statistics.
                      </p>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="p-3 rounded-lg bg-gray-50 border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-3 text-center">Key Features</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-purple-600"></div>
                        <span className="text-gray-700">Real-time Multiplier</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-purple-600"></div>
                        <span className="text-gray-700">Auto Cashout</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-purple-600"></div>
                        <span className="text-gray-700">Live Statistics</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-purple-600"></div>
                        <span className="text-gray-700">Provably Fair</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sekcja gier */}
          <Card className="mb-8 border border-gray-200 bg-white">
            <CardHeader className="border-b border-gray-200">
              <CardTitle className="flex items-center gap-3 text-gray-900">
                <Crown className="h-6 w-6 text-orange-600" />
                Chicken Road 2: Best Platforms in Pakistan
              </CardTitle>
            </CardHeader>
            
            <CardContent className="pt-6">
              {/* Expert Opinion Section */}
              <div className="mb-8 p-5 rounded-xl bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200">
  <div className="flex flex-col md:flex-row md:items-start gap-4">
    <div className="flex-shrink-0">
      {/* Заменили иконку на фото автора */}
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-600 to-amber-600 overflow-hidden border-2 border-white shadow-md relative">
        <img 
          src="/1.webp" // Путь к фото автора
          alt="Yusuf Khan"
          className="w-full h-full object-cover"
          onError={(e) => {
            const img = e.currentTarget;
            img.style.display = 'none';
            const fallback = img.nextElementSibling as HTMLElement;
            if (fallback) {
              fallback.classList.remove('hidden');
            }
          }}
        />
        {/* Фоллбэк на иконку если фото не загрузилось */}
        <div className="hidden absolute inset-0 w-full h-full items-center justify-center bg-gradient-to-br from-orange-600 to-amber-600">
          <User className="h-8 w-8 text-white" />
        </div>
      </div>
    </div>
    <div className="flex-1">
      <div className="flex items-center gap-3 mb-2">
        <div>
          <h4 className="font-bold text-gray-900 text-lg">Expert Opinion</h4>
          <p className="text-sm text-gray-600">Yusuf Khan, Editor-in-Chief of PakistanGamer</p>
        </div>
      </div>
      
      <div className="space-y-4 mt-4">
        <div className="p-4 rounded-lg bg-gray-50 border-l-4 border-orange-600">
          <p className="text-gray-700 italic leading-relaxed">
            "Chicken Road, as a crash game, demonstrates a rare combination of interface simplicity and mechanical depth. Although the rules are clear from the outset, the behavior of the odds requires careful analysis, making the game particularly appealing to experienced users. Crisp animation, smooth performance, and visual effects create a modern, polished gaming experience."
          </p>
        </div>
        
        <div className="p-4 rounded-lg bg-gray-50 border-l-4 border-amber-500">
          <p className="text-gray-700 italic leading-relaxed">
            "From a gameplay perspective, I recommend that beginners take the time to study the demo version and the mechanics of the coefficient growth. This helps to better understand the characteristic patterns of the multiplier's behavior and reduces the risk of impulsive decisions. Chicken Road presents itself as a product created with current crash game market trends in mind and definitely deserves the attention of those looking for a dynamic and visually appealing format."
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

              {/* Comparison Table */}
              <div id="comparison" className="overflow-x-auto mb-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <th className="text-left py-3 px-4 text-gray-900 font-semibold bg-gradient-to-r from-orange-100 to-transparent">Game</th>
                      <th className="text-left py-3 px-4 text-gray-900 font-semibold">Bonus</th>
                      <th className="text-left py-3 px-4 text-gray-900 font-semibold">Features</th>
                      <th className="text-left py-3 px-4 text-gray-900 font-semibold">User Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        name: "Chicken Road Premium",
                        bonus: "200% up to 5000 Rs + 50 Free Games",
                        features: ["Fastest withdrawals available", "Exclusive challenges and daily bonuses", "Urdu 24/7 support"],
                        rating: "4.5/5",
                        color: "from-blue-50 to-transparent",
                        expertNote: "Best for competitive players"
                      },
                      {
                        name: "Chicken Road Pro",
                        bonus: "225% up to 10000 Rs + 75 Free Games",
                        features: ["Daily cashback promotions", "24/7 support", "Personal account manager for deposits above 5000 Rs"],
                        rating: "4.4/5",
                        color: "from-emerald-50 to-transparent",
                        expertNote: "Ideal for high rollers"
                      },
                      {
                        name: "Chicken Road Lite",
                        bonus: "250% up to 15,000 Rs + 100 Free Games",
                        features: ["Ad-free", "Exclusive levels", "24/7 support"],
                        rating: "4.7/5",
                        color: "from-amber-50 to-transparent",
                        expertNote: "Perfect for beginners"
                      }
                    ].map((game, index) => (
                      <tr key={index} className={`border-b border-gray-200 hover:bg-gray-50 ${index % 2 === 0 ? 'bg-gray-50' : ''}`}>
                        <td className="py-4 px-4">
                          <div className="font-semibold text-gray-900 text-lg mb-1">{game.name}</div>
                          <div className="flex items-center gap-2 text-sm">
                            <div className="w-2 h-2 rounded-full bg-orange-600"></div>
                            <span className="text-gray-600">{game.expertNote}</span>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className={`p-3 rounded-lg bg-gradient-to-r ${game.color} border border-gray-200`}>
                            <div className="text-lg font-bold text-gray-900 mb-1">{game.bonus.split(' up to ')[0]}</div>
                            <div className="text-sm text-gray-600">up to {game.bonus.split(' up to ')[1]}</div>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <ul className="space-y-2">
                            {game.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-gray-700">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-2">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`h-5 w-5 ${i < Math.floor(parseFloat(game.rating)) ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
                                />
                              ))}
                            </div>
                            <span className="text-lg font-bold text-gray-900">{game.rating}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Reviews Section */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Detailed Platform Reviews</h3>
                
                {/* Premium Review */}
                <div className="p-5 rounded-xl bg-gradient-to-r from-blue-50 to-transparent border border-blue-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-blue-100">
                      <Award className="h-5 w-5 text-blue-600" />
                    </div>
                    <h4 className="font-bold text-gray-900 text-lg">Chicken Road Premium Review</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Chicken Road Premium offers dynamic and rich gameplay that takes classic arcade transitions to a new level. New users receive a generous welcome package — a 200% bonus and 50 free games — ensuring a confident start. The platform attracts players with instant payouts — on average within 3 hours — and exclusive privileges for high rollers, creating comfortable conditions for exciting and profitable gameplay.
                  </p>
                </div>

                {/* Pro Review */}
                <div className="p-5 rounded-xl bg-gradient-to-r from-emerald-50 to-transparent border border-emerald-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-emerald-100">
                      <Zap className="h-5 w-5 text-emerald-600" />
                    </div>
                    <h4 className="font-bold text-gray-900 text-lg">Chicken Road Pro Review</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Chicken Road Pro is designed for those who appreciate competitive excitement: the platform offers over 3,200 thrilling levels and challenges. New players can take advantage of one of the most lucrative bonuses for the Indian audience — 225% plus 75 free games, ensuring a powerful start. The signature VIP program "Gold Rush" with daily cashback significantly increases earning potential and makes the gaming process even more attractive.
                  </p>
                </div>

                {/* Lite Review */}
                <div className="p-5 rounded-xl bg-gradient-to-r from-amber-50 to-transparent border border-amber-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-amber-100">
                      <Sparkles className="h-5 w-5 text-amber-600" />
                    </div>
                    <h4 className="font-bold text-gray-900 text-lg">Chicken Road Lite Review</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Chicken Road Lite stands out with its user-friendly interface and more than 4,000 tasks from reliable providers. A generous welcome bonus of 250% and 100 free games makes the platform one of the most attractive and easy to use for beginners in India in 2025. The Magical Rewards program, with weekly cashback and exclusive tournaments, increases engagement and makes the gaming experience even more profitable.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-gradient-to-r from-red-50 to-transparent border border-red-200">
                  <div className="flex items-center gap-3 mb-4">
                    <h4 className="font-bold text-gray-900 text-lg">Common Mistakes When Choosing Chicken Road Game</h4>
                  </div>
                  <ol className="text-gray-600 space-y-2 pl-5">
                    <li className="list-decimal">Choosing a game without a trial period: Chicken Road 2 demo allows you to see if you like the game before purchasing the full version.</li>
                    <li className="list-decimal">Insufficient comparison: Using our comparison table can help you make an informed decision about which version of the game to choose.</li>
                  </ol>
                </div>
              </div>

              {/* Expert Recommendation */}
              <div className="mt-8 p-5 rounded-lg bg-gradient-to-r from-green-50 to-transparent border border-green-200">
                <div className="flex items-center gap-3 mb-3">
                  <ThumbsUp className="h-5 w-5 text-green-600" />
                  <h4 className="font-semibold text-gray-900">Yusuf Khan's Recommendation</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3 rounded-lg bg-gray-50">
                    <div className="flex items-center gap-2 mb-2">
                      <Lightbulb className="h-4 w-4 text-amber-600" />
                      <span className="text-gray-900 font-medium">For Beginners</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Start with <span className="text-gray-900 font-semibold">Chicken Road Lite</span> - study demo version first, understand multiplier mechanics before playing with real money.
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-gray-50">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="h-4 w-4 text-red-600" />
                      <span className="text-gray-900 font-medium">For Experienced Players</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Choose <span className="text-gray-900 font-semibold">Chicken Road Pro</span> for advanced features and higher earning potential with VIP benefits.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Podsumowanie */}
          <Card  id="guide" className="mb-8 border border-gray-200 bg-white">
            <CardHeader className="border-b border-gray-200">
              <CardTitle className="flex items-center gap-3 text-gray-900">
                <Map className="h-6 w-6 text-orange-600" />
                Step-by-Step Guide: How to Choose and Play Chicken Road Game
              </CardTitle>
              <CardDescription className="text-gray-600">
                Follow this comprehensive guide to make the right choice and start playing successfully
              </CardDescription>
            </CardHeader>
            
            <CardContent className="pt-6">
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">Your Progress</span>
                  <span className="text-sm font-medium text-gray-900">Step 1 of 6</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-orange-600 to-amber-500 rounded-full"
                    style={{ width: '16.66%' }}
                  ></div>
                </div>
              </div>

              {/* Steps Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {[
                  {
                    step: "01",
                    title: "Try the Demo Version",
                    description: "Launch Chicken Road 2 in demo mode to evaluate the mechanics and see if the game is right for you.",
                    icon: <PlayCircle className="h-8 w-8" />,
                    color: "from-blue-50 to-blue-100",
                    iconColor: "text-blue-600",
                    features: ["Risk-free practice", "Learn mechanics", "No deposit required"]
                  },
                  {
                    step: "02",
                    title: "Compare Games",
                    description: "Use our Chicken Road comparison to see the key differences between the various versions.",
                    icon: <CreditCard className="h-8 w-8" />,
                    color: "from-purple-50 to-purple-100",
                    iconColor: "text-purple-600",
                    features: ["Version differences", "Bonus comparison", "Feature analysis"]
                  },
                  {
                    step: "03",
                    title: "Consider Pricing Plans",
                    description: "The Chicken Road InOut Games platform offers several plans — compare their features and bonuses.",
                    icon: <CreditCard className="h-8 w-8" />,
                    color: "from-emerald-50 to-emerald-100",
                    iconColor: "text-emerald-600",
                    features: ["Plan comparison", "Bonus evaluation", "Value for money"]
                  },
                  {
                    step: "04",
                    title: "Check Device Compatibility",
                    description: "Ensure the game runs smoothly on your smartphone/tablet or computer.",
                    icon: <Smartphone className="h-8 w-8" />,
                    color: "from-amber-50 to-amber-100",
                    iconColor: "text-amber-600",
                    features: ["iOS/Android test", "Desktop optimization", "Performance check"]
                  },
                  {
                    step: "05",
                    title: "Read User Reviews",
                    description: "Read real player reviews and expert opinions to make a more informed choice.",
                    icon: <Users className="h-8 w-8" />,
                    color: "from-red-50 to-red-100",
                    iconColor: "text-red-600",
                    features: ["Player feedback", "Expert analysis", "Community ratings"]
                  },
                  {
                    step: "06",
                    title: "Start Playing & Get Bonus",
                    description: "Download the APK or go to the official website and pave your way to glory!",
                    icon: <Trophy className="h-8 w-8" />,
                    color: "from-orange-50 to-amber-100",
                    iconColor: "text-orange-600",
                    features: ["Big welcome bonus", "APK download", "Official registration"]
                  }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className={`p-5 rounded-xl border border-gray-200 bg-gradient-to-br ${item.color} hover:shadow-md transition-all duration-300`}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 rounded-lg ${item.iconColor} bg-opacity-10`}>
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-gray-500 mb-1">STEP {item.step}</div>
                        <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    
                    <div className="space-y-2">
                      <div className="text-xs font-medium text-gray-500">KEY POINTS:</div>
                      <ul className="space-y-2">
                        {item.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <div className="h-1.5 w-1.5 rounded-full bg-current opacity-70"></div>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-6 pt-4 border-t border-gray-200">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">Estimated time:</span>
                        <span className="text-xs font-medium text-gray-900">
                          {index < 2 ? "2-5 mins" : index < 4 ? "5-10 mins" : "10-15 mins"}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Action Buttons */}
              <div className="p-5 rounded-xl bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200">
  <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">Ready to Start?</h3>
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
    <a
      href="/play"
      className="p-4 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold hover:from-blue-700 hover:to-blue-800 transition-all flex items-center justify-center gap-2 hover:scale-105"
    >
      <PlayCircle className="h-5 w-5" />
      Try Demo Version
    </a>
    <a
      href="/play"
      className="p-4 rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold hover:from-purple-700 hover:to-purple-800 transition-all flex items-center justify-center gap-2 hover:scale-105"
    >
      <Download className="h-5 w-5" />
      Download APK
    </a>
    <a
      href="/play"
      className="p-4 rounded-lg bg-gradient-to-r from-orange-600 to-amber-600 text-white font-semibold hover:from-amber-600 hover:to-amber-700 transition-all flex items-center justify-center gap-2 hover:scale-105"
    >
      <Gift className="h-5 w-5" />
      Get Welcome Bonus
    </a>
  </div>
</div>
            </CardContent>
          </Card>

          <Card className="mb-8 border border-gray-200 bg-white">
            <CardHeader className="border-b border-gray-200">
              <CardTitle className="flex items-center gap-3 text-gray-900">
                <Star className="h-6 w-6 text-orange-600" />
                Chicken Road — Key Benefits for Players in Pakistan
              </CardTitle>
              <CardDescription className="text-gray-600">
                A comprehensive overview of the advantages of Chicken Road for Pakistani players, including security, privacy, and instant start without delays
              </CardDescription>
            </CardHeader>
            
            <CardContent className="pt-6">
              {/* Main Benefits Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                {/* Instant Gameplay */}
                <div className="p-5 rounded-xl bg-gradient-to-br from-blue-50 to-transparent border border-blue-200 hover:border-blue-300 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className="bg-blue-100 text-blue-700 border-blue-200">#1 Benefit</Badge>
                        <h3 className="text-xl font-bold text-gray-900">Instant Gameplay</h3>
                      </div>
                      <p className="text-gray-600">
                        Start without OTP and PIN — in Pakistan, players value speed, and Chicken Road fully meets these expectations.
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-3 rounded-lg bg-gray-50">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                        <span className="text-gray-900 font-medium">Zero Delays</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Each game session starts instantly, without entering OTP, SMS codes, or bank confirmations.
                      </p>
                    </div>
                    
                    <div className="p-3 rounded-lg bg-gray-50">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                        <span className="text-gray-900 font-medium">Quick Start</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        After installing the app, you can start playing right away, without lengthy registration or waiting.
                      </p>
                    </div>
                    
                    <div className="p-3 rounded-lg bg-gray-50">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                        <span className="text-gray-900 font-medium">SSL Security</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        All operations are SSL-encrypted, so transactions are instantly credited to your gaming account.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-blue-200">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-blue-600" />
                      <span className="text-gray-500">Average start time:</span>
                      <span className="text-gray-900 font-semibold ml-auto">Under 10 seconds</span>
                    </div>
                  </div>
                </div>

                {/* Anonymous & Secure */}
                <div className="p-5 rounded-xl bg-gradient-to-br from-emerald-50 to-transparent border border-emerald-200 hover:border-emerald-300 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-700">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">Most Secure</Badge>
                        <h3 className="text-xl font-bold text-gray-900">Anonymous & Secure</h3>
                      </div>
                      <p className="text-gray-600">
                        Complete privacy and data protection — critical for players from Pakistan.
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-3 rounded-lg bg-gray-50">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="h-2 w-2 rounded-full bg-emerald-600"></div>
                        <span className="text-gray-900 font-medium">Minimal Data Required</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Only your email address is required — no bank card, account, or debit details.
                      </p>
                    </div>
                    
                    <div className="p-3 rounded-lg bg-gray-50">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="h-2 w-2 rounded-full bg-emerald-600"></div>
                        <span className="text-gray-900 font-medium">Bank Privacy</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Transactions appear as standard platform operations, keeping your gaming activity private.
                      </p>
                    </div>
                    
                    <div className="p-3 rounded-lg bg-gray-50">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="h-2 w-2 rounded-full bg-emerald-600"></div>
                        <span className="text-gray-900 font-medium">Pakistani Compliance</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Platform complies with Pakistani data security requirements and uses modern security standards.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-emerald-200">
                    <div className="flex items-center gap-2 text-sm">
                      <ShieldCheck className="h-4 w-4 text-emerald-600" />
                      <span className="text-gray-500">Security level:</span>
                      <span className="text-gray-900 font-semibold ml-auto">Military-grade encryption</span>
                    </div>
                  </div>
                </div>

                {/* Simple Gameplay */}
                <div className="p-5 rounded-xl bg-gradient-to-br from-amber-50 to-transparent border border-amber-200 hover:border-amber-300 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-amber-600 to-amber-700">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className="bg-amber-100 text-amber-700 border-amber-200">Easy to Learn</Badge>
                        <h3 className="text-xl font-bold text-gray-900">Simple Gameplay</h3>
                      </div>
                      <p className="text-gray-600">
                        Easy and straightforward process — popular in Pakistan thanks to its simplicity.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-gray-900 font-medium mb-3">3-Step Process:</h4>
                    <div className="flex items-center justify-between mb-4">
                      {['Select Challenge', 'Confirm', 'Start Game'].map((step, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-600 to-amber-700 flex items-center justify-center mb-2">
                            <span className="text-white font-bold">{idx + 1}</span>
                          </div>
                          <span className="text-xs text-gray-900 text-center">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-gray-50">
                      <p className="text-sm text-gray-600">
                        After one-time registration, you only need to follow these simple steps for every game.
                      </p>
                    </div>
                    
                    <div className="p-3 rounded-lg bg-gray-50">
                      <p className="text-sm text-gray-600">
                        The entire process is secured via HTTPS, with complete control from start to finish.
                      </p>
                    </div>
                    
                    <div className="p-3 rounded-lg bg-gray-50">
                      <p className="text-sm text-gray-600">
                        Perfect for beginners, young people, and mobile gamers across Pakistan.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-amber-200">
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="h-4 w-4 text-amber-600" />
                      <span className="text-gray-500">Ideal for:</span>
                      <span className="text-gray-900 font-semibold ml-auto">All age groups</span>
                    </div>
                  </div>
                </div>

                {/* Flexible Gameplay */}
                <div className="p-5 rounded-xl bg-gradient-to-br from-purple-50 to-transparent border border-purple-200 hover:border-purple-300 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-purple-600 to-purple-700">
                      <Sliders className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className="bg-purple-100 text-purple-700 border-purple-200">Maximum Control</Badge>
                        <h3 className="text-xl font-bold text-gray-900">Flexible Gameplay</h3>
                      </div>
                      <p className="text-gray-600">
                        Flexibility and complete control — maximum freedom for Pakistani players.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-gray-900 font-medium mb-3">Full Control Over:</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { label: 'Game Speed', value: 'Adjustable' },
                        { label: 'Session Frequency', value: 'Unlimited' },
                        { label: 'Difficulty Level', value: 'Customizable' },
                        { label: 'Play Style', value: 'Personal Choice' }
                      ].map((item, idx) => (
                        <div key={idx} className="p-2 rounded-lg bg-gray-50 text-center">
                          <div className="text-xs text-gray-500 mb-1">{item.label}</div>
                          <div className="text-sm font-semibold text-gray-900">{item.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-gray-50">
                      <p className="text-sm text-gray-600">
                        No restrictions related to banks or limits — change levels and modes at any time.
                      </p>
                    </div>
                    
                    <div className="p-3 rounded-lg bg-gray-50">
                      <p className="text-sm text-gray-600">
                        Ideal for short gaming sessions and "quick play on your phone" convenience.
                      </p>
                    </div>
                    
                    <div className="p-3 rounded-lg bg-gray-50">
                      <p className="text-sm text-gray-600">
                        Perfect for users who want to play on the go without any complications.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-purple-200">
                    <div className="flex items-center gap-2 text-sm">
                      <Smartphone className="h-4 w-4 text-purple-600" />
                      <span className="text-gray-500">Best for:</span>
                      <span className="text-gray-900 font-semibold ml-auto">Mobile Gaming</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}