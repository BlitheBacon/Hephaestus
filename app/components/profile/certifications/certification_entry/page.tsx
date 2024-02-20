import { Certifications } from "@/app/_lib/types/profile";

export default function SkillsEntry(props: Certifications) {
  return (
    <li className="max-h-fit">
      <div className="grid grid-cols-5 grid-rows-[repeat(5, auto)] items-start pt-4 pb-2">
        <div className="grid col-start-1 col-span-5 row-start-1 row-span-1 text-left items-center font-light text-xs">
          <p className="sm:text-wrap md:text-balance text-sm font-medium min-h-0 text-gray-900 dark:text-orange-500">
            {props.name}
          </p>
        </div>
        <div className="grid col-start-1 col-span-5 row-start-2 row-span-1 text-sm font-light text-gray-900 dark:text-gray-400">
          <p className="text-sm text-gray-500 min-h-0 truncate dark:text-white">
            {props.issuer}
          </p>
        </div>
        <div className="grid col-start-4 col-span-2 row-start-1 row-span-1 min-w-sm align-top text-right font-light text-xs overflow-hidden">
          <p>
            {props.date_issued.toLocaleDateString()}
          </p>
          <p>
            {props.date_of_expiry.toLocaleDateString()}
          </p>
        </div>
      </div>
    </li>
  );
}