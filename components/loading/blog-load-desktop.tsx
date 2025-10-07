"use client";
import { Skeleton } from "../ui/skeleton";

export default function BlogLoadDesktop() {
  return (
    <div className="flex flex-col gap-[128px]">
      <div className="flex gap-[29px]">
        <div className="w-1/2 flex flex-col gap-4">
          <Skeleton className="h-[319px] w-full" />
          <Skeleton className="h-6 w-[70px]" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-5 w-[90px]" />
          <Skeleton className="h-16 w-full" />
        </div>
        <div className="w-1/2 flex flex-col gap-[30px]">
          <div className="flex gap-[30px] ">
            <Skeleton className="h-[154px] w-[200px] flex-shrink-0" />
            <div className="w-full flex flex-col gap-4">
              <Skeleton className="h-6 w-[70px]" />
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-5 w-[90px]" />
            </div>
          </div>
          <div className="flex gap-[30px] ">
            <Skeleton className="h-[154px] w-[200px] flex-shrink-0" />
            <div className="w-full flex flex-col gap-4">
              <Skeleton className="h-6 w-[70px]" />
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-5 w-[90px]" />
            </div>
          </div>
          <div className="flex gap-[30px] ">
            <Skeleton className="h-[154px] w-[200px] flex-shrink-0" />
            <div className="w-full flex flex-col gap-4">
              <Skeleton className="h-6 w-[70px]" />
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-5 w-[90px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <Skeleton className="h-10 w-[250px]" />
        <div className="grid grid-cols-4 gap-8">
          <div className="flex flex-col gap-[30px]">
            <Skeleton className="h-[230px] w-full" />
            <Skeleton className="h-6 w-[70px]" />
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-5 w-[90px]" />
          </div>
          <div className="flex flex-col gap-[30px]">
            <Skeleton className="h-[230px] w-full" />
            <Skeleton className="h-6 w-[70px]" />
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-5 w-[90px]" />
          </div>
          <div className="flex flex-col gap-[30px]">
            <Skeleton className="h-[230px] w-full" />
            <Skeleton className="h-6 w-[70px]" />
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-5 w-[90px]" />
          </div>
          <div className="flex flex-col gap-[30px]">
            <Skeleton className="h-[230px] w-full" />
            <Skeleton className="h-6 w-[70px]" />
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-5 w-[90px]" />
          </div>
          <div className="flex flex-col gap-[30px]">
            <Skeleton className="h-[230px] w-full" />
            <Skeleton className="h-6 w-[70px]" />
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-5 w-[90px]" />
          </div>
          <div className="flex flex-col gap-[30px]">
            <Skeleton className="h-[230px] w-full" />
            <Skeleton className="h-6 w-[70px]" />
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-5 w-[90px]" />
          </div>
          <div className="flex flex-col gap-[30px]">
            <Skeleton className="h-[230px] w-full" />
            <Skeleton className="h-6 w-[70px]" />
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-5 w-[90px]" />
          </div>
          <div className="flex flex-col gap-[30px]">
            <Skeleton className="h-[230px] w-full" />
            <Skeleton className="h-6 w-[70px]" />
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-5 w-[90px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
