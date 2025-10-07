"use client";

import { Skeleton } from "../ui/skeleton";

export default function BlogLoadMobile() {
  return (
    <div className="flex flex-col gap-4">
      <Skeleton className="w-full h-[220px]" />
      <div className="flex flex-col gap-2">
        <Skeleton className="h-6 w-[70px]" />
        <Skeleton className="h-16 w-full" />
        <Skeleton className="h-5 w-[90px]" />
        <Skeleton className="h-28 w-full" />
      </div>
      <div className="mt-4 flex flex-col gap-5">
        <div className="flex gap-[30px]">
          <Skeleton className="h-[154px] w-[200px] flex-shrink-0" />
          <div className="w-full flex flex-col gap-4">
            <Skeleton className="h-6 w-[70px]" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-5 w-[90px]" />
          </div>
        </div>
        <div className="flex gap-[30px]">
          <Skeleton className="h-[154px] w-[200px] flex-shrink-0" />
          <div className="w-full flex flex-col gap-4">
            <Skeleton className="h-6 w-[70px]" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-5 w-[90px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
