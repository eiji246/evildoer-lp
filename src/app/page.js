import Image from "next/image";

function Kaigyou({content, class_name}) {
  return (
      <div className={class_name}>
          {
              content.split('\n').map((item) => (<p className="line-clamp-3 break-words">{item}</p>))
          }
      </ div>)
}

export default function Home() {
  return (
    <main className="grid bg-[url('/VRChat_2.png')]">
      <div className="grid grid-cols-5 grid-rows-2 gap-4 ">
        <div className="col-span-5 m-10">
          <h1 className="text-8xl m-10">限界人外村</h1>
        </div>
        <div className="col-span-2 row-span-3 row-start-2 bg-white m-5 rounded-md ">
          <Image
          src="/VRChat_1.png"
          alt="Vercel Logo"
          className="size-max p-1"
          width={1920}
          height={1080}
          priority
          />
        </div>
        <div className="col-span-3 row-span-3 col-start-3 row-start-2 bg-white m-5 rounded-md ">
          <Kaigyou content={"人外、それは異形\n人外、それは勇気の証\n人外、それは"} class_name="text-xl m-5" />
        </div>
      </div>

      <div className="grid grid-cols-5 grid-rows-3 gap-4 ">
        <div className="col-span-3 row-span-3 bg-white m-5 rounded-md ">
          <Kaigyou content={"人外、それは異形\n人外、それは勇気の証\n人外、それは"} class_name="text-xl m-5" />
        </div>
        <div className="col-span-2 row-span-3 col-start-4 bg-white m-5 rounded-md ">
          <Image
          src="/VRChat_1.png"
          alt="Vercel Logo"
          className="size-max p-1"
          width={1920}
          height={1080}
          priority
          />
        </div>
      </div>
    </main>
  );
}
