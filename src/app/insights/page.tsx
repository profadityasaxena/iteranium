"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Clock, User } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { CTASection } from "@/components/sections/CTASection";
import { blogPosts, blogCategories } from "@/content/insights";
import { cn } from "@/lib/utils";

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <>
      <section className="bg-gradient-to-b from-slate-50 to-white py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary-500">
              Insights
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Insights &amp; Perspectives
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              Thought leadership on Industry 4.0, manufacturing AI, and digital
              transformation from the Iteranium team.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container>
          {/* Category Filters */}
          <div className="mb-10 flex flex-wrap gap-2">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  activeCategory === cat
                    ? "bg-primary-500 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post) => (
              <Link key={post.slug} href={`/insights/${post.slug}`}>
                <Card className="group h-full">
                  <div className="p-6">
                    <Badge variant="primary" className="mb-3">
                      {post.category}
                    </Badge>
                    <h2 className="mb-2 text-lg font-semibold line-clamp-2">
                      {post.title}
                    </h2>
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
        </Container>
      </section>

      <CTASection
        heading="Stay Informed"
        description="Want to discuss any of these topics? Get in touch with our team."
        primaryCTA={{ label: "Contact Us", href: "/contact" }}
        secondaryCTA={{ label: "View Services", href: "/services" }}
      />
    </>
  );
}
