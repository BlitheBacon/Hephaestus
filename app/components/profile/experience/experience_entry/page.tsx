import { Experience } from "@/app/_lib/types/profile";


export default function ExperienceEntry(props: Experience) {
  return (
    <li className="max-h-fit">
      <div className="grid grid-cols-5 grid-rows-[repeat(5, auto)] items-start pt-4 pb-2">
        <div className="grid col-start-1 col-span-5 row-start-1 row-span-1 text-left items-center font-light text-xs">
          <div className="col-start-1 col-span-3 row-start-1 row-span-1">
            <p className="text-sm font-medium min-h-0 text-gray-900 truncate dark:text-white">
                {props.company_name}
            </p>
            <p className="text-sm text-gray-500 min-h-0 truncate dark:text-gray-400">
              {props.title}
            </p>
          </div>
          <div className="grid col-span-2 row-start-1 row-span-1 max-w-sm text-right font-light text-xs">
            <p>
              {props.startDate.toLocaleDateString()}
            </p>
            <p>
              {props.endDate.toLocaleDateString()}
            </p>
          </div>
          <div className="grid col-start-1 col-span-5 row-start-2 row-span-1 text-xs font-light text-gray-900 dark:text-white">
            <p className="overflow-hidden">
              {props.location?.city}, {props.location?.state} | {props.location?.country}
            </p>
          </div>
        </div>
        <div className="grid col-start-1 col-span-5 row-span-2 pt-4 pb-6">
          <p className="text-sm font-light text-gray-900 dark:text-white">
            {props.summary}
          </p>
        </div>
      </div>
    </li>
  );
}