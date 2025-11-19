import helloKittyStanding from '../assets/helloKittyStanding.png';
import Topic from '../components/Topic';
import PoemOfTheDayCard from '../components/PoemOfTheDayCard';
export default function Home() {
  return (
    <main className="absolute w-full h-full">
      <section className="mt-20 grid grid-cols-12 px-4 py-12">
        <div className="flex flex-col justify-center col-span-6">
          <Topic title="Welcome to"></Topic>
          <h2 className="mb-4 md:text-6xl w-fit">Hello Poetry</h2>
          <p className="w-fit">
            The official Hello Kitty community for poetry lovers!
          </p>
        </div>
        <div className="flex justify-center items-center col-span-6">
          <img
            src={helloKittyStanding}
            alt="Hello Kitty Standing"
            className=" w-max-80"
          />
        </div>
      </section>
      <h2 className='text-center bg-red-800 p-4'>Poem of the Day</h2>
      <section className="h-100 flex flex-col items-center justify-around px-4">
        <PoemOfTheDayCard />
      </section>
    </main>
  );
}
