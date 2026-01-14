export async function GET(){
    return new Response (
         
            JSON.stringify({message:'Dashboard API Endpoint'}) ,


        {
            headers:{
                "content-type":'application/json' 
            }
        }
    )
}  