import { cn } from "@/lib/utils"

interface PageHeaderProps {
  title: string
  description?: string
  className?: string
}

export function PageHeader({ title, description, className }: PageHeaderProps) {
  return (
    <div className={cn("space-y-6 text-center", className)}>
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-in slide-in-from-bottom-4 duration-1000">
        {title}
      </h1>
      {description && (
        <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl lg:text-2xl animate-in slide-in-from-bottom-4 duration-1000 delay-200">
          {description}
        </p>
      )}
    </div>
  )
}
