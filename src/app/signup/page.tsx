import Navbar from "./navbar/navbar";
import Form from "./form/form";

export default function Signup() {
  return (
    <div className="flex flex-col ">
      <Navbar />
      <div>
        <h1 className="flex text-[#2C3642] text-[20px] sm:mt-[100px] mt-[20%] mx-[25%] sm:mb-[20px] mb-[2%]">Create User Account</h1>
      </div>
      <Form />
    </div>
  )
}