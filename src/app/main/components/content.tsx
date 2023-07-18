export default function Content() {
  const mockData = [
    {
      title: "test",
      author: "qhf",
      time: "2023-7-21",
      label: "test",
      content: "this is a test",
    },
  ];
  return (
    <div className="flex flex-col">
      {mockData.map((item,index) => {
        const {title, author, time, label, content} = item
        return (
          <div key={index} className="w-[440px]  h-[100px]">
               <div>{title}</div>
               <div>{author}{time}{label}</div>
               <div>{content}</div>
               <div>阅读全文{'>>'}</div>  
          </div>
        );
      })}
    </div>
  );
}
export  async function getStaticProps() {
    
    return {

    }
}