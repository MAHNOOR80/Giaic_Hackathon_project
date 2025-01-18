
import Link from 'next/link'
import { mainModule } from 'process';
import React from 'react'

  export default async function Page() {
    const fetchData = await fetch("https://hackathon-apis.vercel.app/api/products");
    // console.log("Response-",fetchData);
    
    const response =  await fetchData.json()
    console.log(response)
  return (
    <div>page</div>
  )
}
// dekhi sabse pehle apko categories fetch karni hogi kyo ke navbar me show karwani ha is wajah se or phr apko us category se related ko fetch karna hoga ap samjhi

// category ko to wese h fetch krwa dungi jese products ko kiye ... but alg alg se or bi fectch krwana wo kia hay nhi mam jaise ap dynamic routing karke slug lete ha product ka wese he apkolene 

// pehle ye jo apka data a rha ha na isko show kar wa de baki detail page ke leya kaise us prodcut ke detail fetch karti ha ham apko sikh de getComputedStyle                      ok ye products mene display kr diye naw 


// dynamic routing phele bar kr rhy hun phele ki h but wo nextjs  me eki jsime ni slash laga kr dety hain lekin sbne mughe kaha aese ni huga : tu apko sir ne sikhaya nhi kya?

// mughe class me aese h dekhi h jese mene ki but mugeh to sanity wali cheezon ko krwana wo kese krungi darta to sanity se ayega ... wese sb ne kaha ke me dynamic me static data dety hun ... like slash  laga kr name .. price or itni bari description 
// acha yani apko particular product ka data get karna nhi ata sanity self
// ap shy smjhe