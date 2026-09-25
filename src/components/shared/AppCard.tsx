import Link from "next/link";
import { TApp } from "@/types/app.type";

type TAppProps = {
  app: TApp;
};

const AppCard = ({ app }: TAppProps) => {
  return (
    <div className="card bg-base-100 border border-base-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
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

        <div className="mt-2 flex items-center gap-2">
          <span className="font-medium">{app.ratingAvg}</span>

          <span className="text-sm text-base-content/60">
            ({app.reviews})
          </span>
        </div>

        <div className="mt-2 flex justify-between text-sm text-base-content/60">
          <span>{app.downloads} downloads</span>
          <span>{app.size} MB</span>
        </div>

        <Link
          href={`/apps/${app.id}`}
          className="btn btn-primary mt-4 w-full"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default AppCard;