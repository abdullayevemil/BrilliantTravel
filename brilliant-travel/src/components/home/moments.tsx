import Image from "next/image";
import Link from "next/link";

const images = [
  {
    link: "https://res.cloudinary.com/dzw2udcre/image/upload/v1739872036/brilliant%20travel/xgwhudldbjywlgifoslc.png",
  },
  {
    link: "https://res.cloudinary.com/dzw2udcre/image/upload/v1739872036/brilliant%20travel/sodsigyzu2xu5qd8xu43.png",
  },
  {
    link: "https://res.cloudinary.com/dzw2udcre/image/upload/v1739872036/brilliant%20travel/ghwjlmaqgtibsllollgo.png",
  },
  {
    link: "https://res.cloudinary.com/dzw2udcre/image/upload/v1739872036/brilliant%20travel/mbi2bwznwd933sltcnk0.png",
  },
];

export default function Moments() {
  return (
    <div className="flex flex-col gap-7 px-24">
      <h2 className="font-semibold text-[2.625rem]">Moments from our tours</h2>

      <div className="grid grid-cols-3 gap-6 relative">
        {images.map((image, index) =>
          (index % 4) % 3 == 0 ? (
            <Image
              key={index}
              src={image.link}
              alt="image from tour"
              width={500}
              height={500}
              className="w-full col-span-2"
            />
          ) : (
            <Image
              key={index}
              src={image.link}
              alt="image from tour"
              width={500}
              height={500}
              className="w-full"
            />
          )
        )}

        <div className="absolute left-0 bottom-0 w-full h-[8.3125rem] bg-gradient z-50 flex justify-center items-center">
          <Link
            href="/"
            className="flex flex-row py-3 px-6 rounded-full bg-black text-white items-center gap-1"
          >
            <span>Show more</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
