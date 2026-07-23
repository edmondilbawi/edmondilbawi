"use client";

import {
  Bell,
  Code2,
  Database,
  Droplets,
  ExternalLink,
  Github,
  Heart,
  Lock,
  MessageCircle,
  Server,
  ShieldCheck,
  Terminal,
  UsersRound
} from "lucide-react";
import type { ReactNode } from "react";
import type { Project } from "@/data/portfolioContent";

type ProjectCardProps = {
  index: number;
  project: Project;
};

function PreviewShell({
  children,
  label
}: {
  children: ReactNode;
  label: string;
}) {
  return (
    <div
      aria-label={label}
      className="relative mb-5 overflow-hidden rounded-md border border-white/[0.08] bg-black/25 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-colors duration-200 group-hover:border-gold/20"
      role="img"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(212,175,55,0.16),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.055),transparent_48%)]" />
      <div className="pointer-events-none absolute inset-0 bg-subtle-grid bg-[length:28px_28px] opacity-[0.08]" />
      <div className="project-scan pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(212,175,55,0.7),transparent)]" />
      <div className="relative">{children}</div>
    </div>
  );
}

function SocialPlatformPreview() {
  const actions = [
    { icon: Heart, label: "likes" },
    { icon: MessageCircle, label: "comments" },
    { icon: Bell, label: "notifications" }
  ];

  return (
    <PreviewShell label="Preview of the social platform data structures project">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
            C++ Social Model
          </p>
          <p className="mt-1 font-mono text-xs text-muted">Users.cpp / Post.h</p>
        </div>
        <div className="rounded-full border border-gold/25 bg-gold/[0.08] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">
          OOP
        </div>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-2.5">
          {["User", "Post", "Message"].map((item) => (
            <div
              className="flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.045] px-3 py-2"
              key={item}
            >
              <UsersRound
                aria-hidden
                className="text-gold transition-all duration-200 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.45)]"
                size={15}
              />
              <span className="font-mono text-xs text-ink">{item}</span>
            </div>
          ))}
        </div>

        <div className="rounded-md border border-white/10 bg-background/50 p-3">
          <div className="flex items-center gap-2 text-xs text-muted">
            <Code2
              aria-hidden
              className="text-gold transition-all duration-200 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.45)]"
              size={15}
            />
            <span>interaction flow</span>
          </div>
          <div className="mt-3 space-y-2">
            {actions.map(({ icon: Icon, label }) => (
              <div className="flex items-center gap-2 text-xs" key={label}>
                <span className="h-px flex-1 bg-gold/35" />
                <Icon
                  aria-hidden
                  className="text-gold transition-all duration-200 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.45)]"
                  size={14}
                />
                <span className="min-w-20 text-muted">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 rounded-md border border-gold/20 bg-gold/[0.055] px-3 py-2 font-mono text-[11px] leading-5 text-muted">
        addPost() -&gt; notifyFriends() -&gt; viewConversation()
      </div>
    </PreviewShell>
  );
}

function BloodLinkPreview() {
  const workflow = [
    { icon: UsersRound, label: "registration" },
    { icon: ShieldCheck, label: "eligibility" },
    { icon: Code2, label: "compatibility" },
    { icon: Database, label: "inventory" }
  ];

  return (
    <PreviewShell label="Preview of the BloodLink hospital coordination workflow">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
            <Droplets aria-hidden size={15} />
            BloodLink Workflow
          </p>
          <p className="mt-1 font-mono text-xs text-muted">
            Express / EJS / PostgreSQL
          </p>
        </div>
        <div className="rounded-full border border-gold/25 bg-gold/[0.08] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">
          RBAC
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-2.5">
        {workflow.map(({ icon: Icon, label }) => (
          <div
            className="flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.045] px-3 py-2.5"
            key={label}
          >
            <Icon
              aria-hidden
              className="text-gold transition-all duration-200 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.45)]"
              size={15}
            />
            <span className="font-mono text-[11px] text-muted">{label}</span>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-md border border-gold/20 bg-gold/[0.055] px-3 py-2 font-mono text-[11px] leading-5 text-muted">
        request -&gt; verify -&gt; match -&gt; prepare outreach
      </div>
    </PreviewShell>
  );
}

function BankingSystemPreview() {
  const flow = ["client FIFO", "server thread", "account mutex", "encrypted file"];

  return (
    <PreviewShell label="Preview of the secure multithreaded banking system project">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
            Secure Banking Flow
          </p>
          <p className="mt-1 font-mono text-xs text-muted">
            bank_server.c / crypto_utils.c
          </p>
        </div>
        <div className="flex items-center gap-1.5 rounded-full border border-gold/25 bg-gold/[0.08] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">
          <ShieldCheck
            aria-hidden
            className="transition-all duration-200 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.45)]"
            size={13}
          />
          secured
        </div>
      </div>

      <div className="mt-5 grid gap-2">
        {flow.map((step, index) => (
          <div className="flex items-center gap-3" key={step}>
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/[0.045] text-gold">
              {index === 0 ? (
                <Terminal
                  aria-hidden
                  className="transition-all duration-200 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.45)]"
                  size={14}
                />
              ) : index === 1 ? (
                <Server
                  aria-hidden
                  className="transition-all duration-200 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.45)]"
                  size={14}
                />
              ) : (
                <Lock
                  aria-hidden
                  className="transition-all duration-200 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.45)]"
                  size={14}
                />
              )}
            </div>
            <div className="h-px flex-1 bg-[linear-gradient(90deg,rgba(212,175,55,0.6),rgba(255,255,255,0.08))]" />
            <p className="min-w-28 font-mono text-xs text-muted">{step}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2 text-center">
        {[
          ["IPC", "FIFO"],
          ["THREADS", "mutex"],
          ["CRYPTO", "SHA-256"]
        ].map(([label, value]) => (
          <div className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-2" key={label}>
            <p className="text-[10px] uppercase tracking-[0.16em] text-muted">
              {label}
            </p>
            <p className="mt-1 font-mono text-xs text-ink">{value}</p>
          </div>
        ))}
      </div>
    </PreviewShell>
  );
}

function ProjectPreview({ project }: Pick<ProjectCardProps, "project">) {
  if (project.preview.kind === "bloodlink") {
    return <BloodLinkPreview />;
  }

  if (project.preview.kind === "banking-system") {
    return <BankingSystemPreview />;
  }

  return <SocialPlatformPreview />;
}

export function ProjectCard({ index, project }: ProjectCardProps) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-md border border-white/[0.08] bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.022))] p-5 shadow-[0_24px_90px_rgba(0,0,0,0.28)] transition-all duration-200 hover:-translate-y-1 hover:border-gold/40 hover:bg-white/[0.035] hover:shadow-[0_30px_100px_rgba(0,0,0,0.4),0_0_34px_rgba(212,175,55,0.12)]">
      <div className="pointer-events-none absolute inset-y-5 left-0 w-px bg-[linear-gradient(180deg,rgba(212,175,55,0.85),rgba(212,175,55,0.08))]" />
      <div className="flex flex-1 flex-col">
        <div className="mb-4 flex items-center justify-between gap-3">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold/75">
            Case Study 0{index + 1}
          </p>
          <p className="rounded-full border border-gold/20 bg-gold/[0.06] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-gold">
            {project.status}
          </p>
        </div>
        <ProjectPreview project={project} />
        <div className="mt-4 h-px w-16 bg-gold/55 transition-all group-hover:w-24" />
        <h3 className="mt-4 text-xl font-semibold text-ink transition-colors duration-200 group-hover:text-gold">
          {project.title}
        </h3>
        <p className="mt-3 leading-7 text-muted">{project.description}</p>

        <ul className="mt-4 space-y-2.5 text-sm leading-6 text-muted">
          {project.highlights.map((highlight) => (
            <li className="flex gap-3" key={highlight}>
              <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-gold" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-muted transition-all duration-200 group-hover:border-gold/20 group-hover:bg-gold/[0.055] group-hover:text-ink"
              key={tech}
            >
              {tech}
            </span>
          ))}
        </div>

        {project.scopeNote ? (
          <p className="mt-5 border-l border-gold/40 pl-3 text-sm leading-6 text-muted">
            {project.scopeNote}
          </p>
        ) : null}

        {project.repositoryUrl ? (
          <a
            aria-label={`View code for ${project.title} on GitHub`}
            className="focus-ring mt-6 inline-flex min-h-12 w-fit items-center gap-2 rounded-md border border-gold/30 bg-gold/[0.07] px-4 py-3 text-sm font-semibold text-gold transition-all duration-200 hover:-translate-y-0.5 hover:border-gold/60 hover:bg-gold/[0.12] hover:text-ink hover:shadow-gold-soft"
            href={project.repositoryUrl}
            rel="noreferrer"
            target="_blank"
          >
            <Github aria-hidden size={17} />
            View Code
            <ExternalLink aria-hidden size={15} />
          </a>
        ) : project.sourceNote ? (
          <p className="mt-6 border-t border-white/[0.08] pt-4 text-sm leading-6 text-muted">
            {project.sourceNote}
          </p>
        ) : null}

      </div>
    </article>
  );
}
