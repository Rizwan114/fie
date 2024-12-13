import React from 'react';


interface unkownPerson {
  userId : number;
  id : number;
  title : string;
  completed : boolean;
}

async function Page() {

  const user = await fetch ("https://jsonplaceholder.typicode.com/todos")

  const client : unkownPerson [] = await user.json();

  console.log("client ==>" , client);
  
  return (
    <div>
      {client.map((todo,index)=> (
        <div className='border border-black gap-6 flex flex-col'>
          <p>userId:T{todo.userId}</p>
          <p>Id:{todo.id}</p>
          <p>title : {todo.title}</p>
          <p>completed :{`${todo.completed}`}</p>
        </div>
      ))}
    </div>
  )
}

export default Page
