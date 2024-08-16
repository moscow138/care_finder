import AddHealthCareHome from "@/components/form/AddHealthCareHome";
import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"

const page = async() => {

  const session = await getServerSession(authOptions)
  console.log(session);
  if(session?.user){
    return (
      <div>
        <AddHealthCareHome/>
      </div>
    )

  }else{
    return <div>Please login to add or edit Admin content</div>
  }

}

export default page
