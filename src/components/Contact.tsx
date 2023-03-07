import SectionWrapper from "@/hoc/SectionWrapper";
import { fadeIn } from "@/utils/motion";
import { styles } from "@/utils/styles";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { motion } from "framer-motion";
import * as Yup from "yup";
import EarthCanvas from "./EarthCanvas";
const Contact = () => {
  return (
    <section className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <Formik
          initialValues={{ firstName: "", message: "", email: "" }}
          validationSchema={Yup.object({
            firstName: Yup.string()
              .max(15, "Must be 15 characters or less")
              .required("Required"),
            message: Yup.string()
              .max(50, "Must be 50 characters or less")
              .required("Required"),
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
          })}
          onSubmit={(values: any, { setSubmitting }: any) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form className="mt-12 flex flex-col gap-8">
            <label className="flex flex-col" htmlFor="firstName">
              First Name
            </label>
            <Field
              name="firstName"
              type="text"
              placeholder="what's your name?"
              className="bg-tertiary py-4 px-6 rounded-lg outline-none placeholder:text-secondary border-none font-medium"
            />
            <ErrorMessage name="firstName" />
            <label htmlFor="email">Email Address</label>
            <Field
              name="email"
              type="email"
              placeholder="what's your email?"
              className="bg-tertiary py-4 px-6 rounded-lg outline-none placeholder:text-secondary border-none font-medium"
            />
            <ErrorMessage name="email" />
            <label className="flex flex-col" htmlFor="message">
              Your Message
            </label>
            <Field
              name="message"
              type="text"
              as="textarea"
              rows={7}
              placeholder="what do you want to say?"
              className="bg-tertiary py-4 px-6 rounded-lg outline-none placeholder:text-secondary border-none font-medium"
            />
            <ErrorMessage name="message" />

            <button
              className="bg-tertiary outline-none font-bold shadow-md text-white shadow-primary rounded-xl w-fit py-3 px-8"
              type="submit"
            >
              Send
            </button>
          </Form>
        </Formik>
      </motion.div>
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </section>
  );
};
export default SectionWrapper(Contact, "contact");
