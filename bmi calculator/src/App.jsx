import { useState } from "react";

export default function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");


  //Logic

  let calcBmi = (e) => {
e.preventDefault();
if(weight == 0 || height == 0){
  alert("please enter a valid weight and height")
}

else{
  let bmi = (weight/(height*height)*703)
  setBmi(bmi.toFixed(1))


  if(bmi<25){
  setMessage("you are underweight")}

  else if(bmi >= 25 && bmi <30){
    setMessage("you are a healthy weight ")
  }

  else{
    setMessage("you are overweight")
  }

}
  }


  //reload

  let reload = ()=>{
    window.location.reload()
  }


  return (
    <div className="h-screen w-screen flex justify-center items-center text-white">
      <div className=" h-[400px] w-2/4 bg-slate-500 border rounded-lg shadow-md  p-2 ">
        <h2 className=" text-center mb-3 font-mono font-bold text-2xl">BMI CALCULATOR</h2>
        <form className="flex flex-col h-full gap-[50px]" onSubmit={calcBmi}>
          <div className="flex gap-3">
            <label className=" font-bold " htmlFor="weight">
              Weight (ibs)
            </label>
            <input
              type="text"
              className="px-2 w-7/12 border rounded-lg text-black"
              placeholder="Enter weight value"
              onChange={(e) => setWeight(e.target.value)}
              value={weight}
            />
          {  console.log(weight)}
          </div>

          <div className="flex gap-6">
            <label className=" font-bold " htmlFor="height">
              Height (in)
            </label>
            <input
              className="px-2 w-7/12 border rounded-lg text-black"
              type="text"
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Enter height value"
              value={height}
            />
          </div>

          <div className="flex gap-10 justify-center">
            <button
              className=" px-2 bg-red-600 border rounded-lg "
              type="submit"
            >
              Submit
            </button>
            <button
              className=" px-2 bg-blue-600 border rounded-lg "
              type="submit"
            >
              Reload
            </button>
          </div>

          <div className="center bg-gray-400 h-14 flex flex-col items-center justify-center">
            <h3 className="font-bold">Your BMI is:{bmi}</h3>
            <p className="font-bold">{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

