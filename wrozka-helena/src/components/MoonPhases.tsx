import Image from 'next/image';

const MoonPhases = () => {
  return (
    <div className="flex items-center justify-center" style={{ marginTop: '90px' }}>
      <img
        src="/images/icons/moon.png"
        alt="Moon phases"
        className="w-auto h-3 md:h-4 opacity-60"
      />
    </div>
  );
};

export default MoonPhases; 