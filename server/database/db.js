import mongoose from 'mongoose';

const Connection = async (username,password)=>
{
const URL =`mongodb://${username}:${password}@chatapp-shard-00-00.qtqmd.mongodb.net:27017,chatapp-shard-00-01.qtqmd.mongodb.net:27017,chatapp-shard-00-02.qtqmd.mongodb.net:27017/WHATSAPPCLONE?ssl=true&replicaSet=atlas-s8e6mj-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{

      await mongoose.connect(URL,{ useUnifiedTopology: true, useNewUrlParser: true , useFindAndModify: false})
      console.log('Database Connected Successfully');
    }
    catch(error)
    {
        console.log('Error while connnecting database',error)
    }

}

export default  Connection;