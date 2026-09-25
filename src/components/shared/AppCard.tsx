import { TApp } from "@/types/app.type";

type TAppProps = {
  app: TApp;
};

const AppCard = ({ app }: TAppProps) => {
  return (
    <div className="card bg-base-100 border border-base-200 shadow-sm">
      <figure className="px-5 pt-5">
        <img
          src={app.image}
          alt={app.title}
          className="h-20 w-20 rounded-2xl object-cover"
        />
      </figure>

      <div className="card-body p-5">
        <h2 className="card-title">{app.title}</h2>

        <p className="text-sm text-base-content/60">
          {app.companyName}
        </p>

        <div className="flex items-center gap-2 mt-2">
          <span>{app.ratingAvg}</span>

          <span className="text-sm text-base-content/60">
            ({app.reviews})
          </span>
        </div>

        <div className="flex justify-between text-sm text-base-content/60 mt-2">
          <span>{app.downloads} downloads</span>
          <span>{app.size} MB</span>
        </div>

        <button className="btn btn-primary btn-sm w-full mt-4">
          View Details
        </button>
      </div>
    </div>
  );
};

export default AppCard;