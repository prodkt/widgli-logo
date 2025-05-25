import Spline from '@splinetool/react-spline';

export default function LogoOne() {
  return (
    <section className="h-dvh w-dvw max-h-dvh max-w-dvw bg-[rgba(0,0,0,0.1)]">
      <Spline
        scene="spline/scene.splinecode" 
        width={1920}
        height={1080}
        className={'size-full inset-0 m-0 max-w-dvw max-h-dvh'}
      />
    </section>
  );
}

