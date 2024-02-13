import HomeHeader from "./components/HomeHeader";
import Image from 'next/image';
import HomeSearch from "./components/HomeSearch";

export default function Page() {
  return(
  <div>
    <HomeHeader></HomeHeader>
    <div className='flex flex-col items-center mt-24'>
      <Image src="/google_logo.jpeg" width={300} height={100} alt="google icon" className='flex ' priority></Image>
      <HomeSearch></HomeSearch>
    </div>

    </div>
  );
}