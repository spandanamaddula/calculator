import React ,{useState} from 'react'

 

 const Food = () => {

    const [search,setSearch] =useState('');

    const submitHandler = (e) =>{

        e.preventDefault();

        console.log(search);

fetch.get{ https://64f1a6bb0e1e60602d24124c.mockapi.io/api/v1/'foodie'}

response=>response.Json()

.then();

 

    }

    }

  return (

    <center>

        <h4>Food recipe app</h4> <br/>

        <form onSubmit ={submitHandler}>

            <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/> <br/><br/>

            <input type ="submit" value="search"/>

        </form>

    </center>

   

  )

}

 

export default Food