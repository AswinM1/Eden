function Mask() {
  return (
    <div className="flex justify-center items-center min-h-screen p-10 mt-20">

      <div
        className="
          relative
          w-52
          h-64
          overflow-x-scroll
          rounded-2xl
          border border-neutral-300
          bg-neutral-100
          shadow-[0_8px_30px_rgba(0,0,0,0.08)]
          scrollbar-thin
          scrollbar-thumb-neutral-400
          scrollbar-track-transparent
          px-6
          py-8
          font-sans
          tracking-tight
          [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]
        "
      >

       
        <div className="absolute top-0 left-0 w-full h-14 bg-gradient-to-b from-neutral-100 via-neutral-100/70 to-transparent z-10 pointer-events-none"></div>

        <div className="absolute bottom-0 left-0 w-full h-14 bg-gradient-to-t from-neutral-100 via-neutral-100/70 to-transparent z-10 pointer-events-none"></div>

        <p className="leading-7 text-neutral-600 font-medium text-[15px]">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
          Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
          natoque penatibus et magnis dis parturient montes, nascetur
        
          eu, pretium quis, sem. Nulla consequat massa quis enim.
          Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
          arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
          justo. Nullam dictum felis eu pede mollis pretium. Integer
          tincidunt. Cras dapibus. Vivamus elementum semper nisi.
          Aenean vulputate eleifend tellus.
        </p>

      </div>

    </div>
  );
}

export default Mask;