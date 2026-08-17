'use client';

interface CrtScanlineProps {
  isEnabled: boolean;
}

export default function CrtScanlineOverlay({ isEnabled }: CrtScanlineProps) {
  if (!isEnabled) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden opacity-30 select-none">
      {/* CRT Horizontal Scanlines */}
      <div 
        className="w-full h-full"
        style={{
          backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.4) 50%)',
          backgroundSize: '100% 4px',
        }}
      />
      {/* Subtle CRT Flicker Vintage Screen Vignette */}
      <div className="absolute inset-0 bg-radial from-transparent via-transparent to-black/30 pointer-events-none" />
    </div>
  );
}
