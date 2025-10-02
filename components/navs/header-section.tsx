"use client";

import { getDictionary } from "@/get-dictionary";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useIsMobile } from "../hooks/use-mobile";

const lisNavs = [
  {
    id: 1,
    name: "homePage",
    href: "#about",
    idSection: "about",
  },
  {
    id: 2,
    name: "fields",
    href: "#field",
    idSection: "field",
  },
  {
    id: 3,
    name: "benefits",
    href: "#benefit",
    idSection: "benefit",
  },
  {
    id: 4,
    name: "features",
    href: "#feature",
    idSection: "feature",
  },
  {
    id: 5,
    name: "technology",
    href: "#technology",
    idSection: "technology",
  },
  {
    id: 6,
    name: "blog",
    href: "#inquiry",
    idSection: "inquiry",
  },
  {
    id: 7,
    name: "contact",
    href: "#contact",
    idSection: "contact",
  },
];

const wait = () => new Promise((resolve) => setTimeout(resolve, 400));
const wait50 = () => new Promise((resolve) => setTimeout(resolve, 50));

export default function HeaderSection({
  isScrolledToTop,
  isScrolledToTopDesktop,
  dictionary,
}: {
  isScrolledToTop: boolean;
  isScrolledToTopDesktop: boolean;
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}) {
  const isMobile = useIsMobile();

  //   if (isMobile) {
  //     return (
  //       <MobileHeader
  //         headerTitle={dictionary?.header}
  //         isScrolledToTop={isScrolledToTop}
  //         // blogListLang={dictionary?.blogList}
  //       />
  //     );
  //   }

  return (
    <DesktopHeader
      headerTitle={dictionary?.header}
      //   blogListLang={dictionary?.blogList}
      isScrolledToTopDesktop={isScrolledToTopDesktop}
    />
  );
}

function DesktopHeader({
  isScrolledToTopDesktop,
  headerTitle,
}: //   blogListLang,
{
  isScrolledToTopDesktop: boolean;
  headerTitle: Awaited<ReturnType<typeof getDictionary>>["header"];
  //   blogListLang: Awaited<ReturnType<typeof getDictionary>>["blogList"];
}) {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathName = usePathname();

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        // Scrolling up or at the top
        setIsVisible(true);
      } else {
        // Scrolling down
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <header
      className={cn(
        "fixed top-[45px] z-50 w-full transition-transform duration-700 ease-in-out",
        isVisible ? "translate-y-0" : "-translate-y-[calc(100%+45px)]"
      )}
    >
      <div className="container mx-auto 2xl:px-[123px] xl:px-[60px]">
        <div
          className={cn(
            "flex items-center gap-[82px] py-2 max-xl:gap-[50px] max-lg:gap-[10px] bg-white rounded-4xl ",
            !isScrolledToTopDesktop && "header-shadow"
          )}
        >
          <div className="grow px-4 flex justify-between items-center max-lg:px-5">
            {headerTitle?.homePage}
          </div>
        </div>
      </div>
    </header>
  );
}

// function MobileHeader({
//   isScrolledToTop,
//   headerTitle,
//   blogListLang,
// }: {
//   isScrolledToTop: boolean;
//   headerTitle: Awaited<ReturnType<typeof getDictionary>>["header"];
//   blogListLang: Awaited<ReturnType<typeof getDictionary>>["blogList"];
// }) {
//   const listCategory = useStore((state) => state.listCategory);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [isVisible, setIsVisible] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const setSectionId = useStore((state) => state.setSectionId);
//   const idSection = useStore((state) => state.idSection);
//   const pathName = usePathname();
//   const router = useRouter();
//   const [openNews, setOpenNews] = useState(false);

//   useEffect(() => {
//     const controlNavbar = () => {
//       const currentScrollY = window.scrollY;

//       if (currentScrollY < lastScrollY || currentScrollY < 10) {
//         // Scrolling up or at the top
//         setIsVisible(true);
//       } else {
//         // Scrolling down
//         setIsVisible(false);
//       }

//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener("scroll", controlNavbar);
//     return () => window.removeEventListener("scroll", controlNavbar);
//   }, [lastScrollY]);

//   return (
//     <header
//       className={cn(
//         "fixed top-0 left-0 right-0 z-50 w-full transition-transform duration-700 ease-in-out",
//         isVisible ? "translate-y-0" : "-translate-y-full"
//       )}
//     >
//       <motion.div
//         viewport={{ once: true }}
//         initial={{ opacity: 0, y: -40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{
//           duration: 1.1,
//         }}
//         className={cn(
//           "py-6 px-4 max-[32rem]:py-4",
//           isScrolledToTop ? "bg-transparent" : "bg-white/90 shadow-sm"
//         )}
//       >
//         <div className="flex justify-between items-center">
//           <div
//             onClick={() => {
//               if (inBlogPage(pathName)) {
//                 router.push(`/${getEng(pathName)}`);

//                 wait().then(() => {
//                   setSectionId("about" + "_" + randomNumber(4));
//                 });
//               } else {
//                 wait50().then(() => {
//                   setSectionId("about" + "_" + randomNumber(4));
//                 });
//               }
//             }}
//             className="flex items-center gap-2"
//           >
//             <div>
//               <Icons.mobileLogoIcon />
//             </div>
//           </div>
//           <Sheet
//             open={mobileMenuOpen}
//             onOpenChange={setMobileMenuOpen}
//             // modal={true}
//           >
//             <SheetTrigger asChild>
//               <Button
//                 variant="default"
//                 size="icon"
//                 className="bg-white h-10 w-10 rounded-full"
//               >
//                 <Icons.mobileListMenuIcon className="size-6" />
//               </Button>
//             </SheetTrigger>
//             <SheetContent
//               onOpenAutoFocus={(e) => e.preventDefault()}
//               className="border-0 mb-bg-menu rounded-l-2xl"
//             >
//               <SheetHeader className="hidden space-y-0">
//                 <SheetTitle></SheetTitle>
//                 <SheetDescription></SheetDescription>
//               </SheetHeader>
//               <div className="h-full flex flex-col">
//                 <div className="overflow-y-auto px-4 flex-auto pt-[27px] z-10 relative flex flex-col gap-4">
//                   <div className="px-4 flex justify-end">
//                     <Button
//                       className="h-10 w-10 bg-white hover:bg-white shadow-xl rounded-full"
//                       size="icon"
//                       onClick={() => {
//                         setMobileMenuOpen(false);
//                       }}
//                     >
//                       <X className="size-6 text-black stroke-2" />
//                     </Button>
//                   </div>

//                   <div className="flex-auto flex flex-col gap-6">
//                     {lisNavs.map((item, index) => {
//                       if (item.name === "blog") {
//                         return (
//                           <div key={index} className="flex flex-col gap-1">
//                             <div
//                               onClick={() => {
//                                 setOpenNews(!openNews);
//                               }}
//                               className="flex items-center gap-2"
//                             >
//                               <span
//                                 className={cn(
//                                   "text-[#1849A9] text-xl leading-[30px] ",
//                                   getColorActiveMobile(
//                                     idSection.split("_")[0],
//                                     pathName,
//                                     item.idSection
//                                   )
//                                 )}
//                               >
//                                 {
//                                   headerTitle[
//                                     item.name as keyof typeof headerTitle
//                                   ]
//                                 }
//                               </span>
//                               <ChevronRight
//                                 className={cn(
//                                   "size-4 text-[#194185] hover:text-[#194185]/70",
//                                   openNews && "rotate-90"
//                                 )}
//                               />
//                             </div>
//                             {openNews && (
//                               <div className="px-4 flex flex-col gap-1">
//                                 <span
//                                   className={cn(
//                                     "text-[#1849A9] text-xl leading-[30px] ",
//                                     pathName.includes(`/all`) && "font-bold"
//                                   )}
//                                   onClick={() => {
//                                     setMobileMenuOpen(false);
//                                     router.push(
//                                       `/${getEng(pathName)}/blogs/all`
//                                     );
//                                   }}
//                                 >
//                                   {blogListLang.all}
//                                 </span>
//                                 {listCategory.map((category, indexCategory) => (
//                                   <span
//                                     key={`category_${indexCategory}`}
//                                     className={cn(
//                                       "text-[#1849A9] text-xl leading-[30px] ",
//                                       pathName.includes(`/${category.id}`) &&
//                                         "font-bold"
//                                     )}
//                                     onClick={() => {
//                                       setMobileMenuOpen(false);
//                                       router.push(
//                                         `/${getEng(pathName)}/blogs/${
//                                           category.id
//                                         }`
//                                       );
//                                     }}
//                                   >
//                                     {getTitleCategory(category.id, pathName)}
//                                   </span>
//                                 ))}
//                               </div>
//                             )}
//                           </div>
//                         );
//                       }
//                       return (
//                         <span
//                           key={index}
//                           className={cn(
//                             "text-[#1849A9] text-xl leading-[30px] ",
//                             getColorActiveMobile(
//                               idSection.split("_")[0],
//                               pathName,
//                               item.idSection
//                             )
//                           )}
//                           onClick={() => {
//                             setMobileMenuOpen(false);
//                             if (item.name === "blog") {
//                               router.push(`/${getEng(pathName)}/blogs/all`);
//                             } else {
//                               if (inBlogPage(pathName)) {
//                                 if (item.name !== "contact") {
//                                   router.push(`/${getEng(pathName)}`);
//                                 }
//                                 wait().then(() => {
//                                   setSectionId(
//                                     item.idSection + "_" + randomNumber(4)
//                                   );
//                                 });
//                               } else {
//                                 wait50().then(() => {
//                                   setSectionId(
//                                     item.idSection + "_" + randomNumber(4)
//                                   );
//                                 });
//                               }
//                             }
//                           }}
//                         >
//                           {headerTitle[item.name as keyof typeof headerTitle]}
//                         </span>
//                       );
//                     })}
//                     <LocalSwitchMobile />
//                   </div>
//                 </div>
//                 <div className="z-0 relative mb-[30px] flex justify-center">
//                   <div className="absolute bottom-[-20px] left-0">
//                     <Icons.mobileMenuStack className="w-full h-[220px] object-contain" />
//                   </div>
//                 </div>
//               </div>
//             </SheetContent>
//           </Sheet>
//         </div>
//       </motion.div>
//     </header>
//   );
// }

// function LocalSwitch() {
//   const pathname = usePathname();

//   const redirectedPathname = (locale: Locale) => {
//     if (!pathname) return "/";
//     const segments = pathname.split("/");
//     segments[1] = locale;
//     return segments.join("/");
//   };

//   return (
//     <div className="p-1 border border-[#1849A9] rounded-[4px] flex gap-1 items-center max-lg:hidden">
//       {i18n.locales.map((locale) => {
//         return (
//           <Link
//             key={locale}
//             href={redirectedPathname(locale)}
//             className={cn(
//               "cursor-pointer rounded-[4px] px-2 py-0.5 ",
//               pathname.includes(`/${locale}`)
//                 ? "bg-[#1849A9]"
//                 : "bg-transparent"
//             )}
//           >
//             <span
//               className={cn(
//                 " text-base leading-6",
//                 pathname.includes(`/${locale}`)
//                   ? "text-[#FAFAFA]"
//                   : "text-[#194185]"
//               )}
//             >
//               {isEnglish(`/${locale}`) ? "Eng" : "Vie"}
//             </span>
//           </Link>
//         );
//       })}
//     </div>
//   );
// }

// function LocalSwitchMobile() {
//   const pathname = usePathname();
//   const redirectedPathname = (locale: Locale) => {
//     if (!pathname) return "/";
//     const segments = pathname.split("/");
//     segments[1] = locale;
//     return segments.join("/");
//   };

//   return (
//     <div className="p-1 border border-[#1849A9] rounded-[4px] flex gap-1 items-center w-fit">
//       {i18n.locales.map((locale) => {
//         return (
//           <Link
//             key={locale}
//             href={redirectedPathname(locale)}
//             className={cn(
//               "cursor-pointer rounded-[4px] px-2 py-0.5 ",
//               pathname.includes(`/${locale}`)
//                 ? "bg-[#1849A9]"
//                 : "bg-transparent"
//             )}
//           >
//             <span
//               className={cn(
//                 " text-base leading-6",
//                 pathname.includes(`/${locale}`)
//                   ? "text-[#FAFAFA]"
//                   : "text-[#194185] "
//               )}
//             >
//               {isEnglish(`/${locale}`) ? "Eng" : "Vie"}
//             </span>
//           </Link>
//         );
//       })}
//     </div>
//   );
// }

// const isEnglish = (locale: string) => {
//   if (locale === "/en") {
//     return true;
//   }
//   return false;
// };

// const inBlogPage = (pathName: string) => {
//   return pathName.includes("/blogs");
// };

// const getColorActive = (
//   sectionId: string,
//   pathName: string,
//   itemSectionId: string
// ) => {
//   if (pathName.includes("/blog")) {
//     if (itemSectionId === "inquiry") {
//       return "text-[#0057D6] font-bold hover:text-[#0057D6]/70";
//     } else {
//       return "text-[#194185] font-medium hover:text-[#194185]/70";
//     }
//   } else {
//     if (sectionId === itemSectionId) {
//       return "text-[#0057D6] font-bold hover:text-[#0057D6]/70";
//     } else {
//       return "text-[#194185] font-medium hover:text-[#194185]/70";
//     }
//   }
// };

// const getColorActiveMobile = (
//   sectionId: string,
//   pathName: string,
//   itemSectionId: string
// ) => {
//   if (pathName.includes("/blog")) {
//     if (itemSectionId === "inquiry") {
//       return "font-bold";
//     } else {
//       return "font-medium";
//     }
//   } else {
//     if (sectionId === itemSectionId) {
//       return "font-bold";
//     } else {
//       return "font-medium";
//     }
//   }
// };
