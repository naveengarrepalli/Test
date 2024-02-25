import logo from './logo.svg';
import './App.css';
import React , {useState} from 'react';
import Table from './Table';

function App() {
  const [id,setId] = useState('');
  const [fname,setFname] = useState('');
  const [lname,setLname] = useState('');
  const [number,setNumber] = useState('');
  const [emps,setEmps] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(id && fname){
      setEmps([...emps,{id,fname,lname,number}])
      setId('');
      setFname('');
      setLname('');
      setNumber('');
    }
    else{
      alert("  Id and Fname must not be empty")
    }
  }

  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        ID
      <input type='number' placeholder='Enter ID' value={id} onChange={(e) => setId(e.target.value)} /> <br/><br/>
        FName
        <input type='text' placeholder='Enter FName' value={fname} onChange={(e) => setFname(e.target.value) } /> <br/><br/>
        LName
        <input type='text' placeholder='Enter LName' value={lname} onChange={(e) => setLname(e.target.value)} /> <br/><br/>
        Mobile
        <input type='number' placeholder='Enter Number' value={number} onChange={(e) => setNumber(e.target.value)} /> <br/><br/>
        <button type='submit'>Submit</button>
      </form> <br/> <br/>

      <table className='tab'>
        <thead >
          <th>
            <td className='tab'>ID</td> 
            <td className='tab'>FName</td>
            <td className='tab'>LName</td>
            <td className='tab'>Mobile</td>
          </th>
        </thead>
        <tbody>
          {emps.map((emp,index) =>(
            <tr key={index}>
            <td className='tab'>{emp.id}</td>
            <td className='tab'>{emp.fname}</td>
            <td className='tab'>{emp.lname}</td>
            <td className='tab'>{emp.number}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default App;
