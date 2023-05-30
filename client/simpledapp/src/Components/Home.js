import React, { useState } from "react";

import banner from "../assets/NewImage.jpg";

const Home = ({ state }) => {
  const [inputValue, setInputValue] = useState("");
  const [memos, setMemos] = useState([]);
   

  console.log(state);
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  };
 

  
  const handlepay= async ()=>{
     await state.contractInstance.buyCoffee(inputValue,{value:1});
     console.log("Successfully paid");
   

  }

  const handleMemos = async () => {
    const fetchedMemos = await state.contractInstance.getList();
    console.log(fetchedMemos);
    setMemos(fetchedMemos);
  };

  return (
    <div className="w-full h-screen flex flex-col items-start justify-start bg-black">
      <img src={banner} alt="bannerpics" className="w-full h-60"></img>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center w-full h-full justify-center gap-20"
      >
        <input
          id="message"
          type="text"
          placeholder="Enter your valuable feedback"
          className="w-1/2 h-1/3 rounded-md p-6 text-black font-semibold text-xl focus:outline-none shadow-md shadow-blue-400"
          value={inputValue}
          onChange={handleInputChange}
        ></input>
        <button
          type="submit"
          className="bg-[#047aed] px-6 py-2 rounded-md hover:scale-110"
          onClick={handlepay}
        >
          Pay
        </button>
      </form>
     

      <button className="bg-[#047aed] px-4 py-2" onClick={handleMemos}>
        GetMemos
      </button>

      <div
        id="memoslist"
        className="flex  flex-col w-full text-white items-center justify-between p-2 "
      >
        {memos.map((memo, index) => (
          <div key={index} className="flex flex-col w-full text-white items-center justify-between p-2 ">
            
            <p>{memo.message}</p>
            <p>{memo.orderAddress}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
