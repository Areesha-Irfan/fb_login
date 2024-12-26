import Image from "next/image";



export default function Login(){
  return(
    <div className="bg-gray-200 h-screen flex justify-center items-center">
      <div className="text-3xl w-1/2 px-2">
        <Image src ={"/pictures/fabebook.svg"}alt = "fblogo" width={300} height={200}/>
        <p className="ml-8 -mt-3">Facebook helps you connect and share
           with the people in your life.
        </p>
      </div>
       {/*right side */}
      <div className="bg-white p-6 flex flex-col rounded-md w-1/3">
        <input className="my-2 p-4 border border-1 border-gray-200 rounded-xl" 
        type="text" placeholder="Email address or Phone Number"/>
        <input className="my-2 p-4 border border-1 border-gray-200 rounded-xl"
        type ="password" placeholder="Password"/>
        <button className="border border-1 bg-blue-500 text-white font-semibold p-2 text-2xl rounded-xl ">Log in</button>
      
        <button className="pt-2 pb-4 text-blue-500 hover:underline">forget password?</button>
        <span>
          <hr/>
        </span>
        <button className="border border-1 rounded-xl p-3 bg-emerald-400 hover:bg-emerald-700">Create new account</button>
      </div>
    </div>
  )
}