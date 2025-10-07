"use client";

import { useQuery } from "@tanstack/react-query";
import BlogLoadMobile from "../loading/blog-load-mobile";
import BlogLoadDesktop from "../loading/blog-load-desktop";
import ErrorNotice from "../notice/notice-error";
import apis from "@/lib/apis/blogs";
import { BlogViewMobile } from "./blog-view-mobile";
import BlogViewDesktop from "./blog-view-desktop";
import { useIsMobile } from "../hooks/use-mobile";

export default function BlogComponent({ tab }: { tab: string }) {
  const isMobile = useIsMobile();

  const {
    data: data,
    error,
    isError,
    isFetching,
  } = useQuery({
    queryKey: ["/blogs/list-all", { tab }],
    queryFn: () =>
      apis.getBlogPost({
        pageIndex: 1,
        pageSize: 9999,
        applicationFilter: "ndatrace",
        categoryIdFilter: tab !== "all" ? tab : "",
      }),
    retry: 0,
    // keepPreviousData: true,
    refetchOnWindowFocus: false,
  });

  if (isFetching) {
    return <>{isMobile ? <BlogLoadMobile /> : <BlogLoadDesktop />}</>;
  }
  if (isError) {
    return <ErrorNotice error={error as Error} />;
  }

  if (data === undefined || data === null) {
    return null;
  }
  return (
    <>
      {isMobile ? (
        <BlogViewMobile data={data} />
      ) : (
        <BlogViewDesktop data={data} />
      )}
    </>
  );
}
