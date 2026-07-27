"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
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
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-5 sm:h-[4.25rem] sm:px-6 lg:px-8">
        <Logo priority className="shrink-0" />

        <nav
          aria-label="Primary"
          className="ml-auto hidden items-center gap-1 lg:flex"
        >
          {primaryNav.map((item) => {
            const active = isActive(pathname, item.href);
            if (!item.children?.length) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-medium transition-colors",
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
            return (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button
                  type="button"
                  className={cn(
                    "inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    active || open
                      ? "text-primary"
                      : "text-foreground/80 hover:text-primary",
                  )}
                  aria-expanded={open}
                  aria-haspopup="true"
                  onClick={() =>
                    setOpenMenu(open ? null : item.label)
                  }
                >
                  {item.label}
                  <CaretDown
                    className={cn(
                      "size-3.5 transition-transform",
                      open && "rotate-180",
                    )}
                    aria-hidden
                  />
                </button>
                {open ? (
                  <div
                    role="menu"
                    className="absolute top-full left-0 z-50 min-w-56 rounded-lg border border-border bg-surface py-2 shadow-lg"
                  >
                    <Link
                      href={item.href}
                      role="menuitem"
                      className="block px-4 py-2 text-sm font-medium text-primary hover:bg-muted"
                      onClick={() => setOpenMenu(null)}
                    >
                      Overview
                    </Link>
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        role="menuitem"
                        className="block px-4 py-2 text-sm text-foreground/85 hover:bg-muted hover:text-primary"
                        onClick={() => setOpenMenu(null)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-4">
          <Button asChild variant="outline" size="sm" className="hidden sm:inline-flex">
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
                className="lg:hidden"
                aria-label="Open menu"
              >
                <List className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(100%,22rem)] p-0">
              <SheetHeader className="border-b border-border px-4 py-4">
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
