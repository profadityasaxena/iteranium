import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Linkedin } from "lucide-react";
import { teamMembers } from "@/content/team";
import type { TeamMember } from "@/types/content";

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <Card className="text-center">
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
      <p className="text-sm font-medium text-primary-500">{member.role}</p>
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
  );
}

export function TeamGrid() {
  const directors = teamMembers.filter((m) => m.tier === "director");
  const principals = teamMembers.filter((m) => m.tier === "principal");
  const managers = teamMembers.filter((m) => m.tier === "manager");

  // Directors: first 3 in a row, last one (Aditya) centred
  const directorsRow1 = directors.slice(0, 3);
  const directorsRow2 = directors[3];

  return (
    <section className="py-16 lg:py-24">
      <Container>
        {/* Directors */}
        <div className="mb-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-500">
            Leadership
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight">Directors</h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {directorsRow1.map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </div>

        {/* Aditya — centred for emphasis */}
        {directorsRow2 && (
          <div className="mt-8 flex justify-center">
            <div className="w-full max-w-sm">
              <MemberCard member={directorsRow2} />
            </div>
          </div>
        )}

        {/* Principals */}
        <div className="mb-6 mt-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-500">
            Subject Matter Experts
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight">Principals</h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {principals.map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </div>

        {/* Managers */}
        <div className="mb-6 mt-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-500">
            Management
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight">Managers</h2>
        </div>

        <div className="flex justify-center">
          {managers.map((member) => (
            <div key={member.name} className="w-full max-w-sm">
              <MemberCard member={member} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
