import { Skeleton } from "@/components/ui/skeleton"

export function CallSkeleton() {
  return (
    <div className="glass-card rounded-3xl p-8 animate-in fade-in duration-500">
      {/* Caller ID Display */}
      <div className="text-center mb-6">
        <Skeleton className="h-3 w-20 mx-auto mb-2" />
        <Skeleton className="h-5 w-32 mx-auto" />
      </div>

      {/* Number Display */}
      <div className="mb-8">
        <Skeleton className="h-20 w-full rounded-2xl" />
      </div>

      {/* Dial Pad Skeleton */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        {Array.from({ length: 12 }).map((_, i) => (
          <Skeleton key={i} className="h-16 rounded-xl" />
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-center gap-4">
        <Skeleton className="h-14 w-14 rounded-full" />
        <Skeleton className="h-18 w-18 rounded-full" />
      </div>
    </div>
  )
}
