import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { BlogProps, useStore } from "@/components/navs/store";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isEnglish = (locale: string) => {
  if (locale === "/en") {
    return true;
  }
  return false;
};

export function randomNumber(length: number) {
  return Array.from({ length }, () => Math.floor(Math.random() * 10)).join("");
}

export function getEng(pathName: string) {
  if (pathName.includes("/vi")) {
    return "vi";
  }
  return "en";
}

export const getTitleCategory = (categoryIds: string, pathName: string) => {
  let listCategory = useStore.getState().listCategory;
  // console.log("listCategory", listCategory);
  if (pathName.includes("/en")) {
    return listCategory.find((el) => el.id === categoryIds)?.translations?.en
      ?.name;
  }
  return listCategory.find((el) => el.id === categoryIds)?.name;
};

export const getNamePostByLang = (
  blog: BlogProps,
  pathName: string,
  key: string
) => {
  if (key === "name") {
    return pathName.includes("/en") ? blog?.translations?.en?.name : blog?.name;
  } else if (key === "description") {
    return pathName.includes("/en")
      ? blog?.translations?.en?.description
      : blog?.description;
  } else {
    return pathName.includes("/en")
      ? blog?.translations?.en?.content?.htmlContent
      : blog?.content?.htmlContent;
  }
};

// export const isEnglish = (pathName: string) => {
//   if (pathName.includes("/en")) {
//     return true;
//   }
//   return false;
// };
