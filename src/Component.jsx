import React,{useState} from 'react';
import appi from './appi'
export default function Component(){

const[data,setData]=useState('');
const handleChange=(event)=>
{setData(event.target.value);};
const handon=()=>{
appi.getData().then((response)=>{
setData(response.data);
alert(`el mensaje es:${JSON.stringify(data)}`);
});
};

return(
<div>


<button onClick={handon} >no toques
</button>
</div>

)
}