import React,{useState} from "react";

const Contactus = () => {

  const [Name,setName]=useState("");
  const [Email,setEmail]=useState("");
  const [Message,setMessage]=useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();
    // send the form data to your server here

    //after submission reset the form

    setName("");
    setEmail("");
    setMessage("")
    
  }



  return (
    <>

      <h1 className="text-2xl font-bold text-center text-purple-900 mt-5" >Contact Us</h1>
      <div className="w-full md:w-[1024px] mx-auto p-12 md:py-10">
      <form className=" form w-full md:w-[400px] mx-auto " onSubmit={handleSubmit}>

        <div className="mt-1 ">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 ">
            Name*
          </label>
          <div className="mt-1 ">
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="name"
              placeholder="Enter name"
              value={Name}
              onChange={(e) => setName(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-violet-500 focus:border-violet-500 sm:text-sm" required

            />
          </div>

        </div>

        <div className="mt-5 ">
          <label
            htmlFor="Phone Number"
            className="block text-sm font-medium text-gray-700 ">
            Phone / Email*
          </label>
          <div className="mt-1">
            <input
              type="tele"
              placeholder="Enter a phone number or email address"
              id="tel"
              name="phoneNumber"
              autoComplete="phoneNumber"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-violet-500 focus:border-violet-500 sm:text-sm"
              required
            />
          </div>
        </div>

          <div className="mt-5 ">
            <label
              htmlFor="Message"
              className="block text-sm font-medium text-gray-700 ">
              Message*
            </label>
            <div className="mt-1 ">
              <textarea class="block w-full 
               px-5 py-5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-violet-500 focus:border-violet-500 sm:text-sm" placeholder="Please comment here " required
              value={Message}
              onChange={(e) => setMessage(e.target.value)}
              
              ></textarea>
            </div>

          </div>

          <div className="flex items-center justify-center mt-5">
              <button type="submit" className="bg-violet-800 text-white px-5 py-2 rounded-md w-full my-5 focus:border-none focus:outline-none ">
                Send Message
              </button>
            </div>

        



      </form>
      
      </div>


    </>
  );


};

export default Contactus;

