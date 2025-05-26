import PieChart from "@/components/pieChart";

export default function projectBreakdown() {
    return (
        <div className="border-b-2 border-b-double border-b-[var(--tropical_indigo)]">
          <h2 className="text-center pb-10">Project Breakdown</h2>

          <div className="grid grid-cols-2 gap-[2em] pl-5 pr-5 mb-10">
              <PieChart />
            <div className="text-justify p-5 rounded-[1em] border-1 border-solid border-[var(--dark_purple)] bg-linear-to-b from-[var(--linen)] to-[var(--dove_gray)]">
              Neutra typewriter enamel pin vibecession meggings, iPhone
              fingerstache poke organic hot chicken. Live-edge bitters raclette
              grailed fixie umami. Taxidermy selfies pinterest tumblr beard
              farm-to-table poke. Flexitarian street art 90's, williamsburg
              polaroid bicycle rights blue bottle keffiyeh. Gentrify subway tile
              DSA, cray yuccie pickled artisan jianbing taiyaki 8-bit
              flexitarian umami aesthetic. Ramps photo booth fixie, palo santo
              four dollar toast vexillologist snackwave activated charcoal
              gluten-free bushwick pork belly freegan kogi. Etsy cornhole
              jianbing keffiyeh chambray selfies 3 wolf moon banh mi.
            </div>
          </div>
        </div>
    );
}