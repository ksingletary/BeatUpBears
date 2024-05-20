import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="w-screen h-auto relative flex">
        <div className="min-h-[750px] w-full bg-yellow-50 ">
          <Image src='/redpanda.png' width={700} height={700} alt="red panda pic" className="right-0 absolute"/>
        </div>
      </div>
    </>
  );
}
