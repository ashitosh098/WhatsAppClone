
import axios from 'axios';

const URL = '';
export const addUser = async (data) =>
{
    try{
   return await axios.post(`${URL}/add`, data)
    }
    catch(error)
    {
        console.log('error while calling addUser API',error)
    }
}
export const getUsers = async () =>
{
    try{
   let response = await axios.get(`${URL}/users`);
   return response.data;
    }
    catch(error)
    {
        console.log('error while calling getUsers API',error)
    }
}

export const setConversation = async(data)=>
{
    try{
await axios.post(`${URL}/conversation/add`,data);
    }
    catch(error)
    {
        console.log('error while calling setConversation api',error)
    }
}

export const  getConversation= async(data)=>
{
    try{
      let response =  await axios.post(`${URL}/conversation/get`,data);
      return response.data;
    }
    catch(error)
    {
        console.log('error while calling getConversation Api',error)
    }
}


export const newMessage  = async(data)=>
{
    try
    {
        await axios.post(`${URL}/message/add`,data);
    }
    catch(error)
    {
        console.log('error while calling newMessage Api ',error)
    }
}

export const getMessages  = async(id)=>
{
    try
    {
       return  await axios.get(`${URL}/message/get/${id}`);
    }
    catch(error)
    {
        console.log('error while calling getMessage Api ',error)
    }
}
