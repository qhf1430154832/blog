import Header from './components/header'
import Card from './components/card'
import Content from './components/content'
export default function Page(){
    return (
       <main className='flex flex-col'>
            <Header />
            <div className='flex'>
              <Content />
              <Card /> 
            </div>
       </main>
    )
}