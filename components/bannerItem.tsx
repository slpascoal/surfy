import Image from "next/image";

export default function BannerItem() {
  return (
    <>
        <Image 
            alt="Agende nos melhores"
            src="/bannerPizza.png"
            fill
            className="homeBannerImage"
            loading="eager"
        />
    </>
  );
}