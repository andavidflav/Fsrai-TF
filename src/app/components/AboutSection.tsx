
"use client";

import Link from 'next/link';
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="relative min-h-screen bg-slate-900 text-white overflow-hidden">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20 text-center">
  <motion.h1
    className="text-6xl font-extrabold tracking-tight leading-tight md:text-8xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    Tech Fest 2024
  </motion.h1>
  <motion.h1
    className="mt-4 text-4xl font-bold tracking-tight leading-tight md:text-6xl bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.2 }}
  >
    12.12.24
  </motion.h1>
  <motion.p
    className="mt-6 text-lg text-gray-400 md:text-3xl"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.5 }}
  >
    Where innovation meets creativity. Explore, create, and conquer!
  </motion.p>

  {/* Subtle Glowing Rings */}
  {/* <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-3xl animate-pulse"></div> */}
  <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-3xl  delay-200"></div>
</div>


      {/* Event Sections */}
      <div className="mt-20">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Event 1 */}
          <Link href="/Aihackathon" passHref>
          <motion.div
            className="relative p-6 bg-gradient-to-r from-purple-900 to-blue-900  rounded-2xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h2 className="text-3xl font-bold text-white">AI Hackathon</h2>
            <p className="mt-4 text-gray-400">
              🧠 12 hours of intense coding with real-world challenges. Top
              solutions handpicked by industry experts.
            </p>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-900 to-blue-900 opacity-0 transition-opacity"
              whileHover={{ opacity: 0.2 }}
            ></motion.div>
          </motion.div>
          </Link>

          {/* Event 2 */}
          <Link href="/Techtalk" passHref>
          <motion.div
            className="relative p-6 bg-gradient-to-r from-purple-900 to-blue-900 rounded-2xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-white">Tech Talk</h2>
            <p className="mt-4 text-gray-400">
              💬 Dive into insightful sessions with industry leaders discussing
              cutting-edge topics.
            </p>
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-green-500 to-teal-500 opacity-0 transition-opacity"
              whileHover={{ opacity: 0.2 }}
            ></motion.div>
          </motion.div>
          </Link>

          {/* Event 3 */}
          <Link href="/Gaming" passHref>
          <motion.div
            className="relative p-6 bg-gradient-to-l from-purple-900 to-blue-900 rounded-2xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-white">Gaming Tournament</h2>
            <p className="mt-4 text-gray-400">
              🎮 Compete in FIFA and DOTA tournaments for ultimate gaming
              glory.
            </p>
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-pink-500 to-red-500 opacity-0 transition-opacity"
              whileHover={{ opacity: 0.2 }}
            ></motion.div>
          </motion.div>
          </Link>
        </div>
      </div>

      {/* Footer Section */}
      
    </section>
  );
};

export default AboutSection;
