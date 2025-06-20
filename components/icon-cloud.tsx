import { IconCloud } from "@/components/magicui/icon-cloud";

// Updated slugs array to match the real tech stack icons from components/technologies.tsx
const slugs = [
  "v1749749251/react_i9fxfq.png",
  "e_background_removal/f_png/v1749981782/next-js-icon_j2iy7t.png",
  "v1749980923/Bold_Monogram_in_Black_and_White_hpyth8.png",
  "v1749749250/Nodejs_fw9sf3.png",
  "v1749749253/tailwind_fclik0.png",
  "v1749749249/mongo_lrirdi.png",
  "v1749749250/postgresql_pfyyxz.png",
  "v1749749252/sql_t1dvgu.png",
  "v1749981064/pngwing.com_7_lmiwyx.png",
  "v1749750077/pngwing.com_6_uzfjro.png",
  "v1749749251/sanity_tgulgp.png",
  "v1749749252/express_tmyzqt.png",
  "v1749749250/clerk_u99cgo.png",
  "v1749749249/firebase_javqen.png",
  "v1749981302/ChatGPT_Image_Jun_15_2025_02_54_20_PM_dcftdj.png",
  "v1749754807/chatbot_wmenlo.png",
  "v1749754807/agent_ygyuin.png",
];

export function IconCloudDemo() {
  const images = slugs.map(
    (slug) => `https://res.cloudinary.com/dqkt0g0he/image/upload/${slug}`,
  );

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <IconCloud images={images} />
    </div>
  );
}

