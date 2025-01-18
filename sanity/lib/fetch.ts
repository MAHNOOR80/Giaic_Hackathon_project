import { createClient } from "next-sanity";




const client = createClient({
    projectId:"iu7g66an",
    dataset:"production",
    useCdn:true,
    apiVersion:"2023-10-10"
})


export async function sanityfetch({query,params={}}:{query:string,params?:any}){
    return await client.fetch(query,params)
}