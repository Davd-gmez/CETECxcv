import axios from "axios";
export default{
getData:()=>
axios({method:"GET",url:"http://localhost:3000/users"}),};