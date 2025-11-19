import { motion } from 'framer-motion';
import helloKittyStanding from '../assets/helloKittyStanding.png';
import Topic from '../components/Topic';
import PoemOfTheDayCard from '../components/PoemOfTheDayCard';
import Button from '../components/Button';

export default function Home() {
  return (
    <main className="w-full">

      {/* Hero Section */}
      <section className="mt-20 grid grid-cols-12 px-4 md:px-12 xl:px-24 h-80 lg:h-120">

        <motion.div
          className="flex flex-col justify-center col-span-6 lg:col-span-8"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Topic title="Welcome to" />
          <h1 className="mb-6 md:text-7xl lg:text-8xl">Hello Poetry</h1>
          <p>The official Hello Kitty community for poetry lovers!</p>
        </motion.div>

        <motion.div
          className="flex justify-center items-center col-span-6 lg:col-span-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src={helloKittyStanding}
            alt="Hello Kitty Standing"
            className="w-50 lg:w-80"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

      </section>

      {/* Poem of the Day */}
      <motion.h3
        className="p-4 text-center md:text-5xl bg-red-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Poem of the Day
      </motion.h3>

      <section className="h-70 flex flex-col items-center justify-end px-4">
        <motion.div
        className='w-full flex flex-col items-center'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <PoemOfTheDayCard />
        </motion.div>
      </section>

      {/* About Section */}
      <section className="grid grid-cols-12 px-4 md:px-12 h-100 md:h-120">

        <motion.div
          className="col-span-6 md:col-span-7 flex flex-col justify-center"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Topic title="About" />
          <h2 className="mb-4 md:text-6xl">Who we are</h2>
          <p className="mb-4">
            Hello Poetry is a community dedicated to sharing and celebrating
            poetry inspired by Hello Kitty. Whether you're a seasoned poet or 
            just starting out, we welcome you to join us in expressing your 
            creativity through the art of poetry.
          </p>
          <Button className="w-fit">Learn More</Button>
        </motion.div>

        <motion.div
          className="flex justify-center items-center col-span-6 md:col-span-5"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src={helloKittyStanding}
            alt="Hello Kitty Standing"
            className="w-50 lg:w-80"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

      </section>

      {/* Gallery Section */}
      <section className="grid grid-cols-12 px-4 md:px-12 h-80 md:h-120">

        <motion.div
          className="flex justify-center items-center col-span-6 md:col-span-5"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src={helloKittyStanding}
            alt="Hello Kitty Standing"
            className="w-50 lg:w-80"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <motion.div
          className="col-span-6 md:col-span-7 flex flex-col justify-center items-end"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Topic title="Gallery" className="w-full" />
          <h2 className="mb-4 md:text-6xl w-full">Discover</h2>
          <p className="mb-4 ">
            Explore a curated selection of poems from our community members. Dive 
            into different themes, styles, and expressions of poetry all inspired 
            by the charm of Hello Kitty.
          </p>
          <Button className="w-fit">View Gallery</Button>
        </motion.div>

      </section>

      {/* Call to Action */}
      <motion.section
        className="px-4 h-80 flex flex-col items-center justify-center gap-y-4 bg-pink-700"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-center md:text-6xl">Wanna share your own poem?</h2>
        <p>Join our community and let your creativity shine!</p>
        <Button>Get Started</Button>
      </motion.section>

    </main>
  );
}
