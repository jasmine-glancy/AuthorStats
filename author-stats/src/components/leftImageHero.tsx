
export default function leftImageHero () {
    return (
      <div>
        <div className="hero min-h-[22em] pl-[2em] pr-[2em]">
          <div className="hero-content flex-col lg:flex-row border-b-[0.5em] border-double border-b-[var(--tropical_indigo)]">
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold pl-[1em]">cold-pressed tousled scenester</h1>
              <p className="py-6 pl-[2em]">
                Seitan swag solarpunk wayfarers occupy yr kogi gastropub. 3 wolf
                moon ugh bespoke, hella photo booth pitchfork gorpcore
                single-origin coffee banh mi. Same listicle biodiesel meditation
                subway tile jianbing copper mug glossier pop-up wolf fixie etsy.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}