import Image from 'next/image';
import Icon1 from '@/assets/icon1.svg'
import School from "@/assets/school.svg"
import Technology from "@/assets/technology.svg"
export default function Card() {
  return (
    <div className="flex flex-col fixed right-10 top-32 w-[381px]">
      <div>
          
      </div>
      <div>
        <div className='flex'>
          <Image  className='w-[20px] h-[20px]' src={Icon1}/>
          <p>
          博客说明：本博客仅用于技术交流、分享我平时的编程学习经验和日常生活。
          </p>
        </div>
        <div className='flex'>
          <Image  className='w-[20px] h-[20px]' src={Technology}/>
          <p>
            网站技术：react + nextjs + tailwind + react-redux + kora + mysql
          </p>
        </div>
      </div>
      <div className="flex">
        <div>
           
        </div>
        <div>
          <div className='flex'> <Image  className='w-[20px] h-[20px]' src={Icon1}/> <p>家乡: 重庆</p></div>
          <div className='flex'> <Image  className='w-[20px] h-[20px]' src={School}/><p>学校: 重庆邮电大学</p></div>
          <div className='flex'> <Image  className='w-[20px] h-[20px]' src={Icon1}/><p>专业: 软件工程</p></div>
        </div>
      </div>
      <div className="flex">
        <div></div>
        <div>
          <p>邮箱: qhf1430154832@qq.com</p>
          <p>QQ:1430154832</p>
          <p>手机号:15823522214</p>
          <p>wx:13996934458</p>
        </div>
      </div>
    </div>
  );
}
