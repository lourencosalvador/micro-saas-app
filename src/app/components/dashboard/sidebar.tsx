import { cn } from "@/lib/utils"
import Link from "next/link"

export type DashboardSidebarGenericProps<T = unknown> = {
    children: React.ReactNode
    className?: string
} & T


export function Sidebar({
    className,
    children,
  }: DashboardSidebarGenericProps) {
    return (
      <aside
        className={cn([
          'border-r border-border flex flex-col bg-secondary/5 space-y-6',
          className,
        ])}
      >
        {children}
      </aside>
    )
  }


export function SidebarHeader({
    className,
    children,
  }: DashboardSidebarGenericProps) {
    return (
      <header
        className={cn([
          'px-6 h-12 flex items-center border-b border-border',
          className,
        ])}
      >
        {children}
      </header>
    )
  }
  


export function SidebarMain({
    className,
    children,
  }: DashboardSidebarGenericProps) {
    return <main className={cn(['px-3', className])}>{children}</main>
  }

export function SidebarNav({
    className,
    children,
  }: DashboardSidebarGenericProps) { 
    return <nav className={cn(['', className])}>{children}</nav>
  }

export function SidebarNavHeader({
    className,
    children,
  }: DashboardSidebarGenericProps) {
    return <header className={cn(['', className])}>{children}</header>
  }

export function SidebarNavHeaderTitle({
    className,
    children,
  }: DashboardSidebarGenericProps) {
    return (
      <div
        className={cn([
          'text-[0.6rem] uppercase text-muted-foreground ml-3',
          className,
        ])}
      >
        {children}
      </div>
    )
  }

export function SidebarNavMain({
    className,
    children,
  }: DashboardSidebarGenericProps) {
    return <main className={cn(['flex flex-col', className])}>{children}</main>
  }

  type DashboardSidebarNavLinkProps = {
    href: string
    active?: boolean
  }

export function SidebarNavLink({
    className,
    children,
    href,
    active,
  }: DashboardSidebarGenericProps<DashboardSidebarNavLinkProps>) {
    return (
      <Link
        href={href}
        className={cn([
          'flex items-center text-xs px-3 py-2 rounded-md',
          active && 'bg-secondary',
          className,
        ])}
      >
        {children}
      </Link>
    )
  }

export function SidebarNavFooter({
    className,
    children,
  }: DashboardSidebarGenericProps) {
    return (
      <footer className={cn(['p-6 mt-auto  border-t border-border ', className])}>
        {children}
      </footer>
    )
  } 