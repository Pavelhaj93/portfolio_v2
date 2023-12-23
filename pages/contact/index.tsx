import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Input from "../../components/input/Input";
import { ToastContainer, toast } from "react-toastify";

const schema = z.object({
  name: z.string().refine((data) => data.trim() !== "", {
    message: "Name is required",
  }),
  email: z
    .string()
    .email()
    .refine((data) => data.trim() !== "", {
      message: "Email is required and must be a valid email address",
    }),
  subject: z.string().refine((data) => data.trim() !== "", {
    message: "Subject is required",
  }),
  message: z.string().refine((data) => data.trim() !== "", {
    message: "Message is required",
  }),
});

const Contact = () => {
  const [success, setSuccess] = useState<boolean>(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: data.email,
          subject: data.subject,
          text: `${data.name} has sent you a message:\n\n${data.message}`,
        }),
      });

      const result = await response.json();
      setSuccess(true);
      console.log(result);
      reset({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="flex-1 flex flex-col gap-6 w-full mx-auto items-center"
          >
            <div className="flex gap-x-6 w-full">
              {/* Use the Input component for name and email fields */}
              <Input
                name="name"
                control={control}
                placeholder="name"
                errors={errors.name}
                className="input"
              />
              <Input
                name="email"
                control={control}
                placeholder="email"
                errors={errors.email}
                className="input"
                type="email" // Specify the type prop for email input
              />
            </div>
            {/* Use the Input component for subject and message fields */}
            <Input
              name="subject"
              control={control}
              placeholder="subject"
              errors={errors.subject}
              className="input"
            />
            <Input
              name="message"
              control={control}
              placeholder="message"
              errors={errors.message}
              className="textarea"
              type="textarea" // Specify the type prop for textarea
            />
            <button
              type="submit"
              className="btn rounded-full border  border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Submit
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
            {success && <h3 className="w-full">Message sent successfully!</h3>}
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
