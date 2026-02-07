import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Linkedin } from "lucide-react";
import { teamMembers } from "@/content/team";

export function TeamGrid() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Our Team"
          heading="Leadership & Management Team"
          description="Our Ontario-based leadership team brings decades of combined experience in manufacturing technology, AI, and digital transformation."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <Card key={index} className="text-center">
              <div className="mx-auto mb-4 h-28 w-28 overflow-hidden rounded-full bg-slate-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={112}
                  height={112}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm font-medium text-primary-500">
                {member.role}
              </p>
              <p className="mt-3 text-sm text-slate-600">{member.bio}</p>
              {member.linkedin && member.linkedin !== "#" && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-sm text-slate-400 hover:text-primary-500"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              )}
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
