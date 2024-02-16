import { Skills } from "@/app/_lib/types/profile";

export default function SkillsEntry(props: Skills) {
  return (
    <li className="pt-1 pb-0 sm:pt-4">
      <div className="flex items-center ">
          <div className="flex-1 min-w-0 ms-1">
              <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  {props?.name}
              </p>
              <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                {props?.description}
              </p>
          </div>
          <div className="inline-flex items-center text-base pb-4 font-semibold text-gray-900 dark:text-white">
            {props?.competency}
          </div>
      </div>
    </li>
  );
}