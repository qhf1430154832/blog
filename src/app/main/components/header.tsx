export default function Header() {
  return (
    <ul className="flex h-[72px] items-center  text-[#f9f0da] text-[1.4vw] bg-[rgba(0,74,128,.5)]">
      <li className="border-x-1 w-1/3 flex justify-center h-full items-center">
        qhf的博客
      </li>
      <li className="border-x-1 w-1/3 flex justify-center h-full items-center">
        <ul className="flex w-full h-full ">
          <li className="w-1/3 flex justify-center items-center border-x-2 h-full">首页</li>
          <li className="w-1/3 flex justify-center items-center border-x-2 h-full">分类</li>
          <li className="w-1/3 flex justify-center items-center border-x-2 h-full">关于/留言</li>
        </ul>
      </li>
      <li className="border-x-1 w-1/3 h-full">
          <div className="h-full flex items-center justify-center">
             <input type="text" className=" px-[0.4vw] border-0 outline-none text-[16px] " placeholder="请输入搜索内容" maxLength={20} />
          </div>
      </li>
    </ul>
  );
}
