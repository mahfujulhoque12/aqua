"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
    agreeToPolicy: boolean;
  }
  
const Msg: React.FC = () =>{
    const form = useRef<HTMLFormElement>(null);
    const [errors, setErrors] = useState<{ [K in keyof FormData]?: string }>({});
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [loadin, setLoading] = useState(false);

    const [formData, setFormData] = useState<FormData>({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      agreeToPolicy: false,
    });

 
  
  
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ) => {
        const { name, value, type, } = e.target;
        const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;
        setFormData({
          ...formData,
          [name]: type === "checkbox" ? checked : value,
        });
      };

      const validate = () => {
        const tempErrors: { [K in keyof FormData]?: string } = {};
        if (!formData.firstName) tempErrors.firstName = "Full is required";
        if (!formData.lastName) tempErrors.lastName = "Contact is required";
    
        if (!formData.message) tempErrors.message = "Message is required";
        if (!formData.agreeToPolicy)
          tempErrors.agreeToPolicy = "You must agree to the privacy policy";
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
      };

      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate() && form.current) {
          setLoading(true);
          emailjs
            .sendForm(
              "service_kfj3cro",
              "template_lfluq19",
              form.current,
              "orx1MIs4yluPGG7mH"
            )
            .then(
              () => {
                console.log("SUCCESS!");
                setSuccessMessage("Your message has been sent successfully!");
                setFormData({
                  firstName: "",
                  lastName: "",
                  email: "",
                  message: "",
                  agreeToPolicy: false,
                });
                setErrors({});
                setTimeout(() => setSuccessMessage(null), 3000);
                setLoading(false);
              },
              (error) => {
                console.error("FAILED...", error.text);
                setLoading(false);
              }
            );
        }
      };
        
    return(
            <div className="bg-white p-8 rounded-md border shadow-md w-[100%] ">
      <form ref={form} onSubmit={handleSubmit}>
        <div className="flex gap-4">
          <div className="w-full">
            <label className="font-medium text-xs text-black">Full Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="Full Name"
              className="w-full border rounded p-3 border-gray-200 mt-2 py-2 outline-none placeholder-gray-600 focus:border-[#60D66A] focus:placeholder-transparent text-sm font-medium"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs">{errors.firstName}</p>
            )}
          </div>
          <div className="w-full">
            <label className="font-medium text-xs text-black">Contact</label>
            <input
              type="text"
              name="lastName"
              placeholder="0169850515"
              className="w-full border p-3 rounded border-gray-200 mt-2 py-2 outline-none placeholder-gray-600 focus:border-[#60D66A] focus:placeholder-transparent text-sm font-medium"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs">{errors.lastName}</p>
            )}
          </div>
        </div>
        <div className="w-full mt-3">
            <label className="font-medium text-xs text-black">Eamil</label>
            <input
              type="eamil"
              name="eamil"
              placeholder="support@gmail.com"
              className="w-full border p-3 rounded border-gray-200 mt-2 py-2 outline-none placeholder-gray-600 focus:border-[#60D66A] focus:placeholder-transparent text-sm font-medium"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs">{errors.email}</p>
            )}
          </div>

          <div className="w-full mt-3">
            <label className="font-medium text-xs text-black">Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="write your subject"
              className="w-full border p-3 rounded border-gray-200 mt-2 py-2 outline-none placeholder-gray-600 focus:border-[#60D66A] focus:placeholder-transparent text-sm font-medium"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs">{errors.email}</p>
            )}
          </div>

        <div className="w-full mt-8">
          <label className="font-medium text-xs text-black">Message</label>
          <textarea
            name="message"
            placeholder="leave us a message"
            className="w-full border-gray-200 border p-3 rounded  pt-2 mt-2 outline-none placeholder-gray-600 focus:border-[#60D66A] focus:placeholder-transparent text-sm font-medium"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && (
            <p className="text-red-500 text-xs">{errors.message}</p>
          )}
        </div>

        <div className="mt-8 flex gap-3">
          <input
            type="checkbox"
            name="agreeToPolicy"
            checked={formData.agreeToPolicy}
            onChange={handleChange}
          />
          <label className="text-base font-normal text-black">
            I agree to your{" "}
            <Link href="/privacy-policy" className="text-green-400 underline">
              privacy policy
            </Link>
          </label>
          {errors.agreeToPolicy && (
            <p className="text-red-500 text-xs">{errors.agreeToPolicy}</p>
          )}
        </div>
        {successMessage && (
          <p className="text-green-500 text-sm mt-5">{successMessage}</p>
        )}
       
          <button
            type="submit"
            className="px-6 w-full mt-10 py-2 bg-gradient-to-t from-[#20B038] to-[#60D66A] rounded-md text-gray-100 shadow-sm text-base font-medium transition-all duration-500 hover:bg-gradient-to-t hover:from-[#1d623a] hover:to-[#20b14e]"
          >
            {loadin ? "Sending..." : "   Send Message"}
          </button>
    

      
      </form>
        </div>
    )
}


export default Msg;