import Link from 'next/link';
import images from '../../public/images/images';
import Header from '@/components/common/Header';
import Image from 'next/image';
import BlobButton from '@/components/common/BlobButton';

function NotFound() {
  return (
    <div className="flex flex-col items-center lg:px-[390px] lg:pt-[24px] lg:pb-[109px] md:px-[20px] md:pt-[24px] md:pb-[72px] px-[16px] pt-[16px] pb-[62px]">
      <Header />
      <div className="flex flex-col gap-10 items-center mt-10">
        <h1 className="text-7xl max-md:text-5xl font-medium text-garnet">
          404 ERROR
        </h1>
        <Image
          className="max-md:w-28"
          src={images.wineGif}
          alt="404 error"
          width={200}
          height={100}
        />
        <div className="text-center text-gray-400">
          <p className="text-black text-xl font-bold leading-8">
            죄송합니다. 현재 찾을 수 없는 페이지입니다.
          </p>
          <p>존재하지 않는 주소를 입력하셨거나</p>
          <p>페이지의 주소가 변경, 삭제되어 찾을 수 없습니다</p>
        </div>

        <Link href="/">
          <BlobButton>홈으로 돌아가기</BlobButton>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
