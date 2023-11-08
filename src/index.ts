import { PrismaClient } from "@prisma/client";
import app from "./app";
import { UserRoutes } from "./modules/user/user.route";

const prisma=new PrismaClient()
const port =process.env.PORT|| 3003
app.use('/api/v1/user',UserRoutes)



async function main() {
    // const getAllUsers=await prisma.user.findMany()
    // console.log(getAllUsers)
    // const postUser=await prisma.user.create({
    //     data:{
    //         email:'habibdev@gmail.com',
    //         name:'md habib',
    //         role:'author'
    //     }
    // })
    // console.log(postUser)
    app.listen(port,()=>{
        console.log('Server is Running on port')
    })
}
main()