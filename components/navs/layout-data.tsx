"use client";

import { getDictionary } from "@/get-dictionary";
import apis from "@/lib/apis/blogs";
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import { toast } from "sonner";
import LayoutPage from "./layout-page";
import { useStore } from "./store";
// import { initMixpanel } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}

export default function LayoutData({ children, dictionary }: LayoutProps) {
  const setCategories = useStore((state) => state.setCategories);

  const getCategories = useMutation({
    mutationFn: apis.getCategories,
    onSuccess: (data: any) => {
      // console.log("data cate", data);
      setCategories(data);
    },
    onError: (error: any) => {
      toast.error(error?.message);
    },
  });

  useEffect(() => {
    getCategories.mutateAsync({
      applicationFilter: "ndatrace",
    });
  }, []);

  //   useEffect(() => {
  //     initMixpanel(); // Initialize Mixpanel
  //   }, []);

  return (
    <>
      {!getCategories.isPending ? (
        <LayoutPage dictionary={dictionary}>{children}</LayoutPage>
      ) : (
        <></>
      )}
    </>
  );
}
