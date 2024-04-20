import { Button } from "@/components/ui/button";

export default function Component() {

  return (
    <div className="relative min-h-screen">
      
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover"
      >
        <source src="/path/to/your-video.mp4" type="video/mp4" />
        <source src="/path/to/your-video.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen bg-black bg-opacity-50">
        <div className="text-center p-4">
          <h1 className="text-5xl font-bold text-white mb-4">YOUR NEXT EVENT STARTS HERE.</h1>
          <p className="text-white text-opacity-70 mb-6">The Original. Trusted and Experienced.</p>
          <Button className="bg-white text-black" variant="default">Request a Quote</Button>
        </div>
        <div className="absolute bottom-4 text-white text-opacity-70">
          SCROLL
          <ChevronDownIcon className="w-6 h-6 ml-2" />
        </div>
      </div>
    </div>
  );
}

function ChevronDownIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
    </svg>
  );
}
