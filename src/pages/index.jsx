import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <Image
        className="sm:block absolute w-full h-full object-cover"
        width={1000}
        height={1000}
        src="/register.jpg"
        alt="Login"
      />
      <div className="bg-black/60 fixed top-0 left-0 w-full h-screen" />
      <div className="fixed top-[25%] sm:w-full w-full h-full z-50">
        <div className=" w-[280px] sm:w-[300px] md:w-[700px] rounded h-auto my-32 mx-auto">
          <h1 className="text-3xl rounded text-center py-5 w-full h-full font-bold">
            Unlimited films, TV programmes and more
          </h1>
          <p className="text-xl rounded text-center py-5 w-full h-full">
            Watch anywhere. Cancel at any time
          </p>
          <div className="flex flex-col md:flex-row items-center justify-between w-[280px] sm:w-[300px] md:w-[600px] h-auto mx-auto">
            <Link
              href="/first"
              className="text-3xl bg-black/75 rounded text-center mx-4 py-4 w-full h-full font-bold"
            >
              Get Started
            </Link>
            <Link
              href="/operator-login"
              className="bg-red-600 rounded text-3xl text-center py-4 px-4 w-full h-full font-bold"
            >
              Operator Pannel
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
