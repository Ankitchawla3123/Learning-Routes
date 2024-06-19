import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

export const githubinfoloader = async () =>{
    const response=await fetch('https://api.github.com/users/ankitchawla3123')
    return response.json();
    
}

function Github() {
    const data=useLoaderData();
    // const [data ,setData] = useState([]);
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/ankitchawla3123')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    // },[])
  return (
    <div>Github followrs  {data.followers}
    <img  src={data.avatar_url} alt="gitpic" width={300} />
    </div>

  )
}

export default Github