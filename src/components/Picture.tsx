import Image from 'next/image'; // Import Next.js Image component

export default function ImageComponent() {
  return (
    <div>
      {/* Additional Image */}
      <div className="pt-10">
        <Image
          src="/picture 4.png" // Ensure the file path is correct
          alt="Additional Image"
          width={1330}
          height={450}
          className="w-full object-contain"
        />
      </div>
    </div>
  );
}