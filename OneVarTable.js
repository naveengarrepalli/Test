
import './App.css';
import React , {useState} from 'react';

function OneVarTable() {
  
  const [emp,setEmp] = useState({id: '1', fname :'', lname: '', number: ''});
  const [empList,setEmpList] = useState([]);
  const [editIndex,setEditIndex] = useState(null);


  const handleChange = (e) =>{
    const {name,value} = e.target;
    setEmp((p) =>({
        ...p,
      [name] : value
    }));

  };



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(emp);
    if(emp.id && emp.fname){
      if(editIndex !== null){
        const updateContacts = [...empList]
        updateContacts[editIndex] = emp;
        setEmpList(updateContacts);
        setEditIndex(null);
        const i = empList.length+1;
        setEmp({id:i,fname:'',lname:'',number:''});
      }
      else{
      setEmpList([...empList,emp]);
      const i = empList.length+2;
      setEmp({id:i,fname:'',lname:'',number:''});
      }

      
    }

  };

  const handleEdit = (index) =>{
    setEmp(empList[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) =>{
    const contactsDelete = [...empList];
    contactsDelete.splice(index,1);
    setEmpList(contactsDelete);

  }

  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        
        {/* ID 
      <input type="text" name="id" value={emp.id} onChange={handleChange}/><br/><br/> */}
        FName
        <input type='text' name='fname' value={emp.fname} onChange={handleChange} /> <br/><br/>
        LName
        <input type='text' name='lname'  value={emp.lname} onChange={handleChange} /> <br/><br/>
        Mobile
        <input type='number' name='number' value={emp.number} onChange={handleChange} /> <br/><br/>
        <button type='submit'>{editIndex!== null ? 'Update': 'Submit'}</button>
      </form> <br/> <br/>

      <table className='tab'>
        <thead >
          <tr>
            <th className='tab'>ID</th> 
            <th className='tab'>FName</th>
            <th className='tab'>LName</th>
            <th className='tab'>Mobile</th>
          </tr>
        </thead>
        <tbody>
          {empList.map((emp,index) =>(
            <tr key={index}>
            <td className='tab'>{emp.id}</td>
            <td className='tab'>{emp.fname}</td>
            <td className='tab'>{emp.lname}</td>
            <td className='tab'>{emp.number}</td>
            <td>
              <button onClick={()=>{handleEdit(index)}} >Edit</button></td>

            <td><button onClick={()=>{handleDelete(index)}}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default OneVarTable;
