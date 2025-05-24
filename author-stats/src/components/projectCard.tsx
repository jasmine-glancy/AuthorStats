export default function projectCard() {
  // TODO: Clicking the project card takes the user to the project's page
  return (
    <div>
      <div className="card w-[29em] bg-linear-to-b from-[var(--linen)] to-[var(--dove_gray)] card-xl shadow-sm m-5">
        <div className="card-body">
          <div className="flex justify-center">
            <progress
              className="progress progress-primary w-56"
              value="40"
              max="100"
            ></progress>
          </div>
          <div className="flex inline-flex">
            <span className="status bg-[var(--amethyst)] m-5 w-[1em] h-[1em]"></span>

            <h2 className="card-title">Project Name</h2>
          </div>
          <p>
            Jianbing direct trade glossier edison bulb, swag shoreditch forage
            health goth meditation whatever authentic echo park seitan ennui
            tofu.
          </p>
          <div className="grid grid-cols-2 gap-[2em]">
            <button className="btn btn-active h-[4em] disabled">Primary Genre Here</button>
            <button className="btn btn-active h-[4em] disabled">Secondary Genre</button>

          </div>
        </div>
      </div>
    </div>
  );
}
