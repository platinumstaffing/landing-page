"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CaretDown, List } from "@phosphor-icons/react/dist/ssr";

import { Logo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { primaryNav } from "@/content/navigation";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  const base = href.split("#")[0];
  return pathname === base || pathname.startsWith(`${base}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b bg-background/95 backdrop-blur-sm transition-[box-shadow,border-color] duration-300 ease-brand",
        scrolled
          ? "border-border shadow-[0_1px_16px_rgba(30,42,68,0.08)]"
          : "border-transparent",
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center gap-6 px-5 transition-[height] duration-300 ease-brand sm:px-6 lg:px-10",
          scrolled ? "h-16 sm:h-18" : "h-19 sm:h-20",
        )}
      >
        <Logo priority className="shrink-0" />

        <nav
          aria-label="Primary"
          className="ml-auto hidden items-center gap-0.5 xl:flex"
          onKeyDown={(e) => {
            if (e.key === "Escape") setOpenMenu(null);
          }}
        >
          {primaryNav.map((item) => {
            const active = isActive(pathname, item.href);
            if (!item.children?.length) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative rounded-md px-3.5 py-2 text-sm font-medium transition-colors",
                    active
                      ? "text-primary"
                      : "text-foreground/80 hover:text-primary",
                  )}
                >
                  {item.label}
                </Link>
              );
            }

            const open = openMenu === item.label;
            const twoCol = item.children.length > 5;
            return (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                    setOpenMenu(null);
                  }
                }}
              >
                <button
                  type="button"
                  className={cn(
                    "inline-flex items-center gap-1 rounded-md px-3.5 py-2 text-sm font-medium transition-colors",
                    active || open
                      ? "text-primary"
                      : "text-foreground/80 hover:text-primary",
                  )}
                  aria-expanded={open}
                  aria-haspopup="true"
                  onClick={() => setOpenMenu(open ? null : item.label)}
                  onFocus={() => setOpenMenu(item.label)}
                >
                  {item.label}
                  <CaretDown
                    className={cn(
                      "size-3.5 transition-transform duration-300 ease-brand",
                      open && "rotate-180",
                    )}
                    aria-hidden
                  />
                </button>
                {open ? (
                  <div
                    role="menu"
                    className="absolute top-[calc(100%+0.5rem)] left-0 z-50 rounded-xl border border-border bg-surface p-2 shadow-[0_12px_40px_rgba(30,42,68,0.14)]"
                  >
                    <div className="border-b border-border/70 px-3 pb-2 pt-1">
                      <Link
                        href={item.href}
                        role="menuitem"
                        onClick={() => setOpenMenu(null)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary"
                      >
                        {item.label} overview
                      </Link>
                    </div>
                    <ul
                      className={cn(
                        "mt-1 grid gap-0.5",
                        twoCol
                          ? "w-[min(34rem,86vw)] grid-cols-2"
                          : "w-[min(19rem,86vw)] grid-cols-1",
                      )}
                    >
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            role="menuitem"
                            onClick={() => setOpenMenu(null)}
                            className="block rounded-lg px-3 py-2.5 text-sm text-foreground/85 transition-colors hover:bg-accent hover:text-primary"
                          >
                            <span className="font-medium">{child.label}</span>
                            {child.description ? (
                              <span className="mt-0.5 block text-xs leading-snug text-muted-foreground">
                                {child.description}
                              </span>
                            ) : null}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2.5 xl:ml-6">
          <span
            aria-hidden
            className="mr-1 hidden h-6 w-px bg-border xl:block"
          />
          <Button
            asChild
            variant="quiet"
            size="sm"
            className="hidden sm:inline-flex"
          >
            <Link href="/jobs">Find Jobs</Link>
          </Button>
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link href="/contact#request-talent">Request Talent</Link>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon-sm"
                className="xl:hidden"
                aria-label="Open menu"
              >
                <List className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(100%,23rem)] p-0">
              <SheetHeader className="border-b border-border px-5 py-4">
                <SheetTitle className="flex items-center justify-between pr-10">
                  <Logo variant="mark" href={null} />
                  <span className="sr-only">Menu</span>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-1 overflow-y-auto px-3 py-4">
                {primaryNav.map((item) => (
                  <div key={item.href} className="border-b border-border/60 py-2">
                    <SheetClose asChild>
                      <Link
                        href={item.href}
                        className={cn(
                          "block rounded-md px-2 py-2 text-base font-semibold",
                          isActive(pathname, item.href)
                            ? "text-primary"
                            : "text-foreground",
                        )}
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                    {item.children?.length ? (
                      <ul className="mt-1 space-y-1 pb-2 pl-3">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <SheetClose asChild>
                              <Link
                                href={child.href}
                                className="block rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:text-primary"
                              >
                                {child.label}
                              </Link>
                            </SheetClose>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                ))}
              </div>
              <div className="mt-auto flex flex-col gap-2 border-t border-border p-4">
                <SheetClose asChild>
                  <Button asChild>
                    <Link href="/contact#request-talent">Request Talent</Link>
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button asChild variant="outline">
                    <Link href="/jobs">Find Jobs</Link>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
