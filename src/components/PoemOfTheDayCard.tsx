import helloKittyHolding from '../assets/helloKittyHolding.png';

export default function PoemOfTheDayCard() {
  return (
    <div className="bg-red-800 p-4 border-2 border-white rounded-md w-full max-w-md relative">
      <img
        src={helloKittyHolding}
        alt="Hello Kitty Holding"
        className="h-32 absolute -top-28 left-0"
      />
      <h4 className="mb-2">Starred Night</h4>
      <p>
        Friends are like stars,
        <br />
        You may not always see them,
        <br /> but you know they are there.
      </p>
      <p className="mt-2 text-right">- Hello Kitty</p>
    </div>
  );
}
