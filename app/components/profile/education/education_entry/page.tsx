import Data from "@/app/mock/profile/data/profile.json"
import { Education } from "@/app/_lib/types/profile";

export default function EducationEntry(props: Education) {
  /**
  * Determines whether or not to render the given elements based first on their existence
  * and then on their type.
  *
  * @param {props} prop - A props param of type Education (concentration or minor)
  * @returns A paragraph tag wrapper for the prop output -> either concentration or minor
  * */
  const renderText = (prop: typeof props.concentration | typeof props.minor) => {
    if (prop != "") {
      if (prop === props.minor) {
        return (
          <p className="text-sm sm:text-wrap md:text-balance text-gray-500 min-h-0 dark:text-gray-400">
            Minor: {props.minor}
          </p>
        )
      }
      else if (prop === props.concentration) {
        return (
          <p className="text-sm sm:text-wrap md:text-balance text-gray-500 min-h-0 dark:text-gray-400">
            Concentration: {props.concentration}
          </p>
        )
      }
    }
  }

  return (
    <li className="max-h-fit">
      <div className="grid grid-cols-5 grid-rows-[repeat(5, auto)] items-start pt-4 pb-2">
        <div className="grid col-start-1 col-span-5 row-start-1 row-span-1 text-left items-center font-light text-xs">
          <div className="col-start-1 col-end-4 row-start-1 row-span-1 overflow-ellipsis text-wrap md:text-balance">
            <p className="sm:text-wrap md:text-balance text-sm font-medium min-h-0 text-gray-900 dark:text-orange-500">
              {props.degree} in {props.fieldOfStudy}
            </p>
          </div>
          <div className="grid col-start-4 col-span-2 row-start-1 row-span-1 min-w-sm align-top text-right font-light text-xs overflow-hidden">
            <p>
              {props.startDate.toLocaleDateString()}
            </p>
            <p>
              {props.endDate.toLocaleDateString()}
            </p>
          </div>
          <div>
            {renderText(props.minor)}
            {renderText(props.concentration)}
          </div>
        </div>
        <div className="grid col-start-1 col-span-5 row-start-2 row-span-1 pt-2 text-sm font-light text-gray-900 dark:text-gray-400">
          <p className="text-sm text-gray-500 min-h-0 truncate dark:text-white">
            {props.institution}
          </p>
          <p className="overflow-hidden">
            {props.location?.city}, {props.location?.state} | {props.location?.country}
          </p>
        </div>
        <div className="grid col-start-1 col-span-5 row-span-2 pt-4 pb-2">
          <p className="text-sm font-light text-gray-900 dark:text-white">
            {props.summary}
          </p>
        </div>
      </div>
    </li>
  );
}