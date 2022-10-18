import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import ReactMarkdown from 'react-markdown'

function App() {

  const [markdown, setMarkdown] = useState('## markdown')

  return (
    <main>
      <section>
        <textarea cols="100" rows="10" value={markdown} onChange={(e)=>{
          setMarkdown(e.target.value)
        }}>

        </textarea>
      </section>
      <section className='markdown'>
          <h1>Markdown Preview:</h1>
          <ReactMarkdown>{markdown}</ReactMarkdown>
      </section>
    </main>
  );
}

export default App;
