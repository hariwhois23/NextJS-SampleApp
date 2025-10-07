import Image from "next/image";

 export default function Home() {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://wallpaperswide.com/download/kabali_first_look_2-wallpaper-3840x2160.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'system-ui,Segoe UI,Roboto,Arial',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.45))',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            color: '#fff',
            mixBlendMode: 'screen',
            backdropFilter: 'blur(2px)',
            padding: '1rem 2rem',
            borderRadius: '12px',
          }}
        >
          <div
            style={{
              fontWeight: 900,
              letterSpacing: '0.08em',
              fontSize: 'clamp(48px, 10vw, 120px)',
              textTransform: 'uppercase',
              textShadow:
                '0 6px 30px rgba(0,0,0,0.6), 0 0 18px rgba(255,200,80,0.08)',
              color: '#ffd64d',
              WebkitTextStroke: '0.5px rgba(0,0,0,0.25)',
              animation: 'floatIn 1.2s cubic-bezier(.2,.9,.28,1) both',
            }}
          >
            
          </div>
          <div
            style={{
              marginTop: '0.6rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '.35rem',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                fontSize: 'clamp(20px,3.6vw,42px)',
                fontWeight: 700,
                color: '#ffd64d',
              }}
            >
              Magizhchi
            </div>
            <div
              style={{
                fontSize: 'clamp(20px,3.6vw,42px)',
                fontWeight: 700,
                color: '#fff',
              }}
            >
              மகிழ்ச்சி
            </div>
            <div
              style={{
                fontSize: 'clamp(20px,3.6vw,42px)',
                fontWeight: 700,
                color: '#fff',
              }}
            >
              రజిని
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
  
  

