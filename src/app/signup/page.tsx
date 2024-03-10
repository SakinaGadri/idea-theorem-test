import Navbar from "./navbar/navbar";
import Form from "./form/form";

export default function Signup() {
  return (
    <div className="flex flex-col ">
      <Navbar />
      <div>
        <h1 className="text-[#2C3642] sm:mt-[10%] mt-[20%] mx-[25%] mb-[2%] text-[20px]">Create User Account</h1>
      </div>
      <Form />
    </div>
  )
}