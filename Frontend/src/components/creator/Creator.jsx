/* eslint-disable react/prop-types */

import Navbar from "../components_lite/Navbar"
import { motion } from "framer-motion"
import Card from "../components_lite/Card" // use your single Card.jsx
import mypic from "./mypic.jpg"

// Motion variant
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
}

// Simple Button
function Button({ children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`bg-white text-black hover:bg-zinc-200 px-8 py-3 rounded-2xl text-lg font-medium shadow-lg transition ${className}`}
    >
      {children}
    </button>
  )
}

export default function Creator() {
  return (<>
  <Navbar />
    <div className="min-h-screen bg-black text-white font-[system-ui]">
      

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:justify-evenly justify-center px-6 pt-32 pb-24 gap-16">
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex-shrink-0"
        >
          <img
            src={mypic}
            alt="Creator"
            className="sm:w-full w-full h-72 object-cover rounded-3xl shadow-xl"
          />
        </motion.div>

        {/* Intro Text */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="max-w-xl text-center lg:text-left"
        >
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">
  Aashutosh Singh
</h1>
<p className="text-gray-300 text-lg leading-relaxed mb-4">
  Creator of <span className="text-white font-medium">Job Portal</span> — a platform 
  built to connect talent with opportunities in the most seamless way.
</p>
<p className="text-gray-400 text-base">
  A <span className="text-white">Computer Science student</span> passionate about 
  solving real-world problems through <span className="text-white pr-0.5">technology</span> 
  and <span className="text-white pl-0.5">Science</span>. Always exploring, always building.
</p>

        </motion.div>
      </section>

      {/* Project Highlights */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6 pb-28">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Card title="Tech Stack" className="bg-zinc-900 hover:scale-[1.02] transition-transform duration-500">
            <ul className="text-gray-400 space-y-2">
              <li>React + Tailwind + Motion</li>
              <li>Node.js + Express</li>
              <li>MongoDB</li>
              <li>Authentication</li>
            </ul>
          </Card>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Card title="Features" className="bg-zinc-900 hover:scale-[1.02] transition-transform duration-500">
            <ul className="text-gray-400 space-y-2">
              <li>Authentication & Security</li>
              <li>Job Posting & Applications</li>
              <li>Modern UI/UX</li>
              <li>Full CRUD Support</li>
            </ul>
          </Card>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Card title="Vision" className="bg-zinc-900 hover:scale-[1.02] transition-transform duration-500">
            <p className="text-gray-400 leading-relaxed">
              Apps should feel <span className="text-white">beautiful</span>, 
              <span className="text-white"> immersive</span>, and{" "}
              <span className="text-white">meaningful</span>. 
              This project is one step in the journey toward 
              building transformative startups.
            </p>
          </Card>
        </motion.div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center pb-24"
      >
        <h2 className="text-4xl font-semibold mb-6">Let’s Build Together</h2>
        <p className="text-gray-400 mb-8">I’m open to collaborations, internships, and new opportunities.</p>
        <a href="https://aashutoshsingh.vercel.app/"><Button>Get in Touch</Button></a>
      </motion.section>
    </div>
    </>
  )
}
