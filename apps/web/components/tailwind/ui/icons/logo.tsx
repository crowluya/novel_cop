import Image from 'next/image';

export default function Logo({ className }: { className?: string }) {
  return (
    <div className={className} style={{ position: 'relative', width: '24px', height: '24px' }}>
      <Image 
        src="/favicon.png" 
        alt="OpenSeek Logo" 
        fill 
        style={{ objectFit: 'contain' }} 
      />
    </div>
  );
}