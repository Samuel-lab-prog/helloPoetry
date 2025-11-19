import helloKittyBow from '../assets/helloKittyBow.svg';
export default function Topic({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <div className={`flex items-center w-fit ${className}`}>
      <img
        src={helloKittyBow}
        alt="Hello Kitty Bow"
        className="h-6 w-6 lg:h-10 lg:w-10"
      />
      <span className="md:text-lg">{title}</span>
    </div>
  );
}
