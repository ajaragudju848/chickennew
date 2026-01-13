import { prisma } from "@/lib/prisma"
import { CommentList } from "@/components/comment-list"
import { CommentForm } from "@/components/comment-form"
import { mapComment } from "@/lib/mapComment"
import Script from "next/script"
import { MessageSquare, Users, Star, Shield, Trophy } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default async function CommentsSection() {
  const rawComments = await prisma.comment.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      replies: { orderBy: { createdAt: "asc" } },
    },
  })

  const comments = rawComments.map(mapComment)

  // Calculate stats
  const totalComments = comments.length
  const totalReplies = comments.reduce((acc, comment) => acc + comment.replies.length, 0)
  const totalInteractions = totalComments + totalReplies

  return (
    <section id="reviews" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Заголовок и статистика */}
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Player Opinions and Experiences
            </h2>
          </div>

          {/* Информация о модерации */}
          <div className="mb-8 p-4 sm:p-6 rounded-xl bg-gray-50 border border-orange-200">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm sm:text-base">Moderated Forum</h4>
                  <p className="text-xs text-gray-500">Only real player opinions</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-green-100 text-green-700 border-green-200 text-xs">
                  <Star className="h-3 w-3 mr-1" />
                  Comment verification
                </Badge>
                <Badge className="bg-blue-100 text-blue-700 border-blue-200 text-xs">
                  No spam
                </Badge>
              </div>
            </div>
          </div>

          {/* Основной контент */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Левая колонка - комментарии */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {/* Заголовок списка */}
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900">
                    Latest Discussions
                    <span className="text-sm text-gray-500 ml-2 font-normal">
                      ({comments.length} topics)
                    </span>
                  </h3>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="border-orange-300 text-orange-600 text-xs">
                      Latest
                    </Badge>
                    <Badge variant="outline" className="border-gray-300 text-gray-500 text-xs">
                      Most Popular
                    </Badge>
                  </div>
                </div>

                {/* Список комментариев */}
                <div className="rounded-xl text-black border border-gray-200 bg-white overflow-hidden">
                  <CommentList comments={comments} />
                </div>
              </div>
            </div>

            {/* Правая колонка - форма */}
            <div className="space-y-6">
              {/* Форма */}
              <div className="rounded-xl text-black border border-gray-200 bg-white overflow-hidden">
                <div className="p-6">
                  <CommentForm />
                </div>
              </div>

              {/* Правила */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-4">Forum Rules</h4>
                <ul className="space-y-2 text-sm">
                  {[
                    "Only constructive discussions",
                    "No advertising or spam",
                    "Respect other players",
                    "Share real player experiences"
                  ].map((rule, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-600">
                      <div className="h-1.5 w-1.5 rounded-full bg-orange-600 mt-1.5"></div>
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* SEO schema */}
          <Script
            id="comments-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "DiscussionForumPosting",
                name: "Discussion Forum Chicken Road Casino",
                commentCount: comments.length,
                interactionStatistic: {
                  "@type": "InteractionCounter",
                  interactionType: "https://schema.org/CommentAction",
                  userInteractionCount: totalInteractions
                },
                comment: comments.map(c => ({
                  "@type": "Comment",
                  author: c.author,
                  text: c.content,
                  dateCreated: c.date,
                  interactionStatistic: {
                    "@type": "InteractionCounter",
                    interactionType: "https://schema.org/ReplyAction",
                    userInteractionCount: c.replies.length
                  }
                })),
              }),
            }}
          />
        </div>
      </div>
    </section>
  )
}