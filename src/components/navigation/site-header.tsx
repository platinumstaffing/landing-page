"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, CaretDown, List } from "@phosphor-icons/react/dist/ssr";

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
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelMenuClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const openDesktopMenu = (label: string) => {
    cancelMenuClose();
    setOpenMenu(label);
  };

  const scheduleMenuClose = () => {
    cancelMenuClose();
    closeTimer.current = setTimeout(() => setOpenMenu(null), 140);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  return (
    <header
      className={cn(
        "bg-surface ease-brand sticky top-0 z-40 border-b transition-[border-color,box-shadow] duration-300",
        scrolled
          ? "border-border shadow-[var(--shadow-float)]"
          : "border-silver/70",
      )}
    >
      <div
        className={cn(
          "ease-brand mx-auto flex max-w-[94rem] items-center gap-5 px-5 transition-[height] duration-300 sm:px-6 lg:px-8",
          scrolled ? "h-16" : "h-[4.75rem]",
        )}
      >
        <div className="xl:border-border flex shrink-0 items-center gap-5 xl:border-r xl:pr-6">
          <Logo priority />
          <p className="text-muted-foreground hidden max-w-[11ch] text-[0.62rem] leading-tight font-semibold tracking-[0.12em] uppercase 2xl:block">
            Workforce solutions partner
          </p>
        </div>

        <nav
          aria-label="Primary"
          className="ml-auto hidden h-full items-center gap-0.5 xl:flex"
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
                    "after:bg-primary relative inline-flex h-full items-center px-3 py-2 text-[0.8rem] font-medium transition-colors after:absolute after:inset-x-3 after:bottom-0 after:h-px after:origin-left after:transition-transform",
                    active
                      ? "text-primary after:scale-x-100"
                      : "text-foreground/80 hover:text-primary after:scale-x-0 hover:after:scale-x-100",
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
                className="relative h-full"
                onMouseEnter={() => openDesktopMenu(item.label)}
                onMouseLeave={scheduleMenuClose}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                    setOpenMenu(null);
                  }
                }}
              >
                <button
                  type="button"
                  className={cn(
                    "after:bg-primary relative inline-flex h-full items-center gap-1 px-3 py-2 text-[0.8rem] font-medium transition-colors after:absolute after:inset-x-3 after:bottom-0 after:h-px after:origin-left after:transition-transform",
                    active || open
                      ? "text-primary after:scale-x-100"
                      : "text-foreground/80 hover:text-primary after:scale-x-0 hover:after:scale-x-100",
                  )}
                  aria-expanded={open}
                  aria-haspopup="true"
                  onClick={() => setOpenMenu(open ? null : item.label)}
                >
                  {item.label}
                  <CaretDown
                    className={cn(
                      "ease-brand size-3.5 transition-transform duration-300",
                      open && "rotate-180",
                    )}
                    aria-hidden
                  />
                </button>
                {open ? (
                  <div
                    className="absolute top-full left-0 z-50 pt-3"
                    onMouseEnter={cancelMenuClose}
                    onMouseLeave={scheduleMenuClose}
                  >
                    <div
                      role="menu"
                      className={cn(
                        "border-border bg-surface overflow-hidden rounded-xl border shadow-[var(--shadow-float)]",
                        twoCol ? "w-[min(38rem,86vw)]" : "w-[min(21rem,86vw)]",
                      )}
                    >
                      <div className="border-border bg-surface-muted flex items-center justify-between gap-6 border-b px-5 py-4">
                        <div>
                          <p className="text-muted-foreground text-[0.66rem] font-semibold tracking-[0.14em] uppercase">
                            Explore
                          </p>
                          <p className="font-heading text-foreground mt-1 text-base font-semibold">
                            {item.label}
                          </p>
                        </div>
                        <Link
                          href={item.href}
                          role="menuitem"
                          onClick={() => setOpenMenu(null)}
                          className="text-primary inline-flex items-center gap-1.5 text-xs font-semibold"
                        >
                          Overview
                          <ArrowUpRight className="size-3.5" aria-hidden />
                        </Link>
                      </div>
                      <ul
                        className={cn(
                          "grid p-2",
                          twoCol ? "grid-cols-2" : "grid-cols-1",
                        )}
                      >
                        {item.children.map((child, childIndex) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              role="menuitem"
                              onClick={() => setOpenMenu(null)}
                              className="group text-foreground hover:bg-accent hover:text-primary focus-visible:ring-ring/40 grid grid-cols-[2rem_1fr] gap-2 rounded-lg px-3 py-3 transition-colors focus-visible:ring-3 focus-visible:outline-none"
                            >
                              <span className="text-muted-foreground pt-0.5 text-[0.66rem] font-semibold tracking-[0.08em] tabular-nums">
                                {String(childIndex + 1).padStart(2, "0")}
                              </span>
                              <span>
                                <span className="block text-sm font-semibold">
                                  {child.label}
                                </span>
                                {child.description ? (
                                  <span className="text-muted-foreground mt-1 block text-xs leading-snug">
                                    {child.description}
                                  </span>
                                ) : null}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2 xl:ml-5">
          <span
            aria-hidden
            className="bg-border mr-1 hidden h-6 w-px xl:block"
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
              <SheetHeader className="border-border border-b px-5 py-4">
                <SheetTitle className="flex items-center justify-between pr-10">
                  <Logo variant="mark" href={null} />
                  <span className="sr-only">Menu</span>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-1 overflow-y-auto px-3 py-4">
                {primaryNav.map((item) => (
                  <div
                    key={item.href}
                    className="border-border/60 border-b py-2"
                  >
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
                                className="text-muted-foreground hover:text-primary block rounded-md px-2 py-1.5 text-sm"
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
              <div className="border-border mt-auto flex flex-col gap-2 border-t p-4">
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
