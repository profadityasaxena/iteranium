import Link from "next/link";
import { ArrowUpRight, Clock, User } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { blogPosts } from "@/content/insights";

export function FeaturedInsights() {
  const featured = blogPosts.slice(0, 3);

  return (
    <section className="bg-slate-50 py-16 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Thought Leadership"
          heading="Latest Insights"
          description="Research-driven perspectives on Industry 4.0, manufacturing AI, and digital transformation strategy."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((post) => (
            <Link key={post.slug} href={`/insights/${post.slug}`}>
              <Card className="group h-full">
                <div className="p-6">
                  <Badge variant="primary" className="mb-3">
                    {post.category}
                  </Badge>
                  <h3 className="mb-2 text-lg font-semibold line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-600 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readingTime}
                    </span>
                  </div>
                  <p className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary-500 transition-all group-hover:gap-2">
                    Read article
                    <ArrowUpRight className="h-4 w-4" />
                  </p>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/insights"
            className="inline-flex items-center gap-1 text-sm font-medium text-primary-500 transition-colors hover:text-primary-700"
          >
            View all insights
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
