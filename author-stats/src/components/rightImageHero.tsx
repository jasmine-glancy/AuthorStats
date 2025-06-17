import Timeline from "./timeline";

export default function rightImageHero () {
    return (
      <div>
        <div className="hero min-h-[22em] pl-[2em] pr-[2em]">
          <div className="hero-content flex-col lg:flex-row-reverse border-b-[0.5em] border-double border-b-[var(--tropical_indigo)]">
            <Timeline />
            <div>
              <h1 className="text-5xl font-bold pr-[2em] text-right">cold-pressed tousled scenester</h1>
              <p className="py-6 pr-[3em] text-justify">
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