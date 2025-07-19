import './App.css';
import { useState } from 'react';

function App() {
  const [name,setName]=useState('');
  const [datetime, setDatetime]=useState('');
  const [description, setDescription]=useState('');

  function addnewTransaction(ev){
      ev.preventDefault();
      const url=process.env.REACT_APP_API_URL+'/transaction';
      const price=name.split(' ')[0];
      console.log(url);
      console.log("Final URL is:", url);

      fetch(url,{
        method:'POST',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify({price,
          name : name.substring(price.length+1),
          description,
          datetime})
      }).then(response =>{
        response.json().then(json =>{
          setName(' ');
          setDatetime(' ');
          setDescription(' ');
        });
      });
  }

  return (
    <main>
      <h1>400<span>.00$</span></h1>
      <form onSubmit={addnewTransaction}>
        
        <div className='basic'>

        <input type='text' 
        value={name}
        onChange={ev=>setName(ev.target.value)}
        placeholder='new message'></input>

        <input value={datetime}
        onChange={ev =>setDatetime(ev.target.value)}
        type='datetime-local'/>

        </div>

        <div className='description'>
          <input type='text'
          value={description}
          onChange={ev=>setDescription(ev.target.value)}
          placeholder={'description'}></input>
        </div>

        <button type='submit'>Add new Transaction</button>

      </form>

      <div className='transactions'>

        <div className='transaction'>

          <div className='left'>
            <div className='name'>Samsung TV</div>
            <div className='description'>Time for new TV </div>
          </div>

          <div className='right'>
            <div className='price red'>-300$</div>
            <div className='datetime'>13/12/2024</div>
          </div>

        </div>



        <div className='transaction'>

          <div className='left'>
            <div className='name'>Gig job new web</div>
            <div className='description'>Time for new TV </div>
          </div>

          <div className='right'>
            <div className='price green'>+400$</div>
            <div className='datetime'>13/12/2024</div>
          </div>

        </div>



        <div className='transaction'>

          <div className='left'>
            <div className='name'>Iphone</div>
            <div className='description'>Time for new TV </div>
          </div>

          <div className='right'>
            <div className='price red'>-900$</div>
            <div className='datetime'>13/12/2024</div>
          </div>

        </div>


      </div>



    </main>
  );
}

export default App;
