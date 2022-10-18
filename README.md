# React Markdown App
This is a react markdown app in 10 lines of code
```javascript
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
```

You can find this live project on (https://inspiring-puppy-e9729f.netlify.app/)
