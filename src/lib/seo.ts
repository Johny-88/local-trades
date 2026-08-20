import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE, SITE_LOCALE, SITE_NAME, SITE_URL } from "./site";

function absolute(path: string) {
  return new URL(path, `${SITE_URL}/`).toString();
}

export function createPageMetadata({title,description,path,ogImage = DEFAULT_OG_IMAGE,openGraphDescription,twitterDescription}:{title:string;description:string;path:string;ogImage?:string;openGraphDescription?:string;twitterDescription?:string;}): Metadata {
  const canonical = absolute(path);
  const image = absolute(ogImage);
  return {
    title,
    description,
    alternates:{canonical},
    robots:{index:true,follow:true,googleBot:{index:true,follow:true,"max-image-preview":"large","max-snippet":-1,"max-video-preview":-1}},
    openGraph:{type:"website",locale:SITE_LOCALE,url:canonical,siteName:SITE_NAME,title,description:openGraphDescription ?? description,images:[{url:image,width:1200,height:630,alt:`${SITE_NAME} social preview`}]},
    twitter:{card:"summary_large_image",title,description:twitterDescription ?? description,images:[image]},
  };
}
