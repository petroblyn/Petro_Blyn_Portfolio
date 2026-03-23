"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-16">
      <div className="grid md:grid-cols-2 gap-12 items-center w-full max-w-6xl">

        {/* LEFT SIDE - TEXT */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            Hi, I'm <span className="text-cyan-400">Petro Blyn</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-6 text-gray-400 text-lg max-w-lg"
          >
            Software Engineer specializing in Java, Python and scalable
            web applications. Based in South Africa.
          </motion.p>

          <motion.a
            href="#projects"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="inline-block mt-8 px-6 py-3 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all"
          >
            View My Work
          </motion.a>
        </div>

        {/* RIGHT SIDE - IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-md mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
            <Image
              src="/profile.jpg"
              alt="Petro Blyn"
              width={500}
              height={600}
              className="object-cover"
              priority
            />
          </div>

          {/* Glow effect behind image */}
          <div className="absolute -z-10 top-10 left-10 w-full h-full bg-cyan-400 blur-3xl opacity-20 rounded-full"></div>
        </motion.div>

      </div>
    </section>
  );
}