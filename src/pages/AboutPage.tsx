import Topic from "../components/Topic";
import Button from "../components/Button";

export default function AboutPage() {
  return (
    <main className="absolute w-full h-fit flex flex-col items-center">

      {/* SECTION 1: Who we are */}
      <section className="mt-28 px-4 md:px-12 xl:px-24 mb-12 flex flex-col items-center">
        <Topic title="About Hello Poetry" />
        <h2 className="text-center">Who We Are</h2>

        <p className="mt-6 text-justify md:text-lg lg:text-xl max-w-4xl">
          Hello Poetry is a community dedicated to celebrating the art of poetry through the beloved character, Hello Kitty. Our mission is to create a welcoming space where poetry enthusiasts can share their love for poetry, connect with like-minded individuals, and find inspiration in the whimsical world of Hello Kitty.
        </p>

        <p className="mt-4 text-justify md:text-lg lg:text-xl max-w-4xl">
          Whether you're a seasoned poet or just starting your poetic journey, Hello Poetry offers a variety of resources, including writing prompts, featured poems, and community events. Join us as we explore the beauty of language and the magic of Hello Kitty together!
        </p>
      </section>

      {/* SECTION 2: Our Mission */}
      <section className="mb-16 px-4 md:px-12 xl:px-24 flex flex-col items-center">
        <Topic title="Our Mission" />
        <h2 className="text-center">Inspiration and Creativity</h2>

        <p className="mt-6 text-justify md:text-lg lg:text-xl max-w-4xl">
          At Hello Poetry, we believe that poetry is a powerful form of expression that can inspire, heal, and bring joy. Our mission is to foster a supportive community where poets of all levels can share their work, receive feedback, and grow as artists. We are committed to promoting creativity and encouraging our members to explore new styles and themes in their writing.
        </p>

        <p className="mt-4 text-justify md:text-lg lg:text-xl max-w-4xl">
          We also aim to celebrate the cultural impact of Hello Kitty, using her iconic image to inspire poets and create a unique blend of pop culture and literary art. Through our platform, we hope to cultivate a vibrant community that values creativity, inclusivity, and the joy of poetry.
        </p>
      </section>
      <section className="mb-16 px-4 md:px-12 xl:px-24 flex flex-col items-center">
        <Topic title="Join Us" />
        <h2 className="text-center">Become a Part of Our Community</h2>
        <p className="mt-6 text-justify md:text-lg lg:text-xl max-w-4xl mb-4">
          We invite you to join Hello Poetry and become a part of our growing community of poetry lovers. Whether you're looking to share your own work, discover new poems, or connect with fellow enthusiasts, Hello Poetry offers a welcoming space for all. Sign up today to start your poetic journey with us and explore the enchanting world of Hello Kitty-inspired poetry!
        </p>
        <Button className="w-fit">Join Now</Button>
      </section>
    </main>
  );
}
