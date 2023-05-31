import {useState} from 'react';
import Heading from './components/Heading'
import  Section  from './components/Section'
import Counter from './components/Counter'
import List from './components/List';

function App() {
  const [count, setCount] = useState<number>(0);
  return (
    <>
    <Heading title="Hello" />
    <Section title="Different title"><p>This is my section</p></Section>
    <Counter setCount={setCount} count={count}/>

    <List items={["a", "b", "c"]} render={(item: string) => <span className='gold'>{item}</span>}/>
    </>
  )
}

export default App
