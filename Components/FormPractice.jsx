import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
// import { useState } from "react";
// import { useEffect } from "react";
export default function FormPractice() {
  const { register, handleSubmit, errors } = useForm();
  const [userInfo, setUserInfo] = useState();
  const onSubmit = (data) => {
    setUserInfo(data);
    console.log(data);
  };
  // const initialValues = {
  //   fullname: "",
  //   email: "",
  //   phone: "",
  //   subject: "",
  //   message: "",
  // };
  // const [formValues, setFormValues] = useState(initialValues);
  // const [formErrors, setFormErrors] = useState({});
  // const [isSubmit, setIsSubmit] = useState(false);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormValues({ ...formValues, [name]: value });
  // };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setFormErrors(validate(formValues));
  //   setIsSubmit(true);
  // };
  // useEffect(() => {
  //   // console.log(formErrors);
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //     // console.log(formValues);
  //   }
  // }, [formErrors]);
  // const validate = (values) => {
  //   const errors = {};
  //   const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  //   if (!values.fullname) {
  //     errors.fullname = "Full Name is required!";
  //   }

  //   if (!values.email && !values.phone) {
  //     errors.email = "Email is required!";
  //     errors.phone = "Contact Number  is required !";
  //   }
  //   if (values.email !== "" && !regex.test(values.email)) {
  //     errors.email = "This is not a valid email format!";
  //   }
  //   if (values.phone !== "" && values.phone.length !== 10) {
  //     errors.phone = "Contact should be of 10 digit! ";
  //   }

  //   if (!values.subject) {
  //     errors.subject = "Subject is required!";
  //   }
  //   if (!values.message) {
  //     errors.message = "Message is required!";
  //   }
  //   return errors;
  // };
  return (
    <form className="px-2" onSubmit={handleSubmit(onSubmit)}>
      <div className=" sm:mt-20  mt-16 sm:w-[699px]   lg:mr-10  lg:px-0 sm:px-14 formShadow ">
        <pre>{JSON.stringify(userInfo, undefined, 2)}</pre>
        {/* {Object.keys(formErrors).length === 0 && isSubmit} */}
        <div className=" bg-[#F2F7FD]  lg:px-14 sm:px-16 px-8 py-4  ">
          <div className="flex flex-col lg:col-span-5 col-span-1  lg:mt-5 sm:mt-5 mt-2  ">
            <div className="flex flex-col">
              <input
                className="  border  bg-white placeholder-gray-700 lg:placeholder:text-sm sm:placeholder:text-xl placeholder:text-lg px-3 py-1 sm:h-12 h-14 hover:border-black"
                type="text"
                name="fullname"
                id="Fullname"
                placeholder="Full Name"
                ref={register({ required: "Name is required" })}
              />
              <p className="text-xs text-red-600">{formErrors.fullname}</p>
            </div>
            <div className="flex flex-col">
              <input
                className=" border  bg-white placeholder-gray-700 lg:placeholder:text-sm sm:placeholder:text-xl placeholder:text-lg px-3 py-1 sm:h-12 h-14 sm:mt-8  mt-6 hover:border-black"
                type="text"
                name="email"
                id="Email"
                placeholder="Email "
                ref={register({ required: "email is required" })}
              />
              <p className="text-xs text-red-600">{formErrors.email}</p>
            </div>
            <p className="text-xl text-center  ">or</p>
            <div className="flex flex-col">
              <input
                className=" border  bg-white placeholder-gray-700 lg:placeholder:text-sm sm:placeholder:text-xl placeholder:text-lg px-3 py-1 sm:h-12 h-14  mt-2 hover:border-black "
                type="text"
                name="phone"
                id="Phone"
                placeholder="Mobile"
                ref={register}
              />
              <p className="text-xs text-red-600">{formErrors.phone}</p>
            </div>
            <div className="flex flex-col">
              <input
                className=" border bg-white placeholder-gray-700  lg:placeholder:text-sm sm:placeholder:text-xl placeholder:text-lg px-3 py-1 sm:h-12 h-14 sm:mt-8 mt-6 hover:border-black"
                type="text"
                name="subject"
                id="Subject"
                placeholder="Query"
                ref={register}
              />
              <p className="text-xs text-red-600">{formErrors.subject}</p>
            </div>
            <div className="flex flex-col">
              <input
                className=" border bg-white  placeholder-gray-700 lg:placeholder:text-sm sm:placeholder:text-xl placeholder:text-lg px-3 py-1 sm:mt-8 mt-6 hover:border-black sm:h-24 h-20 "
                type="message"
                name="message"
                id="Message"
                placeholder=" Description"
                ref={register}
              />
              <p className="text-xs text-red-600">{formErrors.message}</p>
              <p className="text-xs text-[#312B2B] mt-1 sm:block hidden">
                The information you provide will be used in accordance with the
                term of our privacy policy
              </p>
            </div>
            <div className="flex justify-end mt-6">
              <button
                // onClick={handleSubmit}
                className="w-36 lg:h-10 sm:h-12 h-12 bg-[#00A4E4] text-white lg:text-sm  sm:text-sm text-lg  p-2   rounded-md hover:bg-[#037BCA] "
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
