import Image from 'next/image';

export const Avatar = ({ online }: { online?: boolean }) => {
  return (
    <div className="relative inline-block">
      <Img />
      {online && (
        <span className="w-3.5 h-3.5 rounded-full bg-green-500 border-2 border-zinc-800 absolute -bottom-0.5 right-0.5"></span>
      )}
    </div>
  );
};

const Img = () => (
  <Image
    className="inline-block h-12 w-12 rounded-full ring ring-zinc-800 bg-clip-content"
    src="https://preview.redd.it/5unn16axx1v81.jpg?width=640&crop=smart&auto=webp&s=19fcd170aadc63147c0a4492f43017a17f052a02"
    alt="Picture of the user"
  />
);
