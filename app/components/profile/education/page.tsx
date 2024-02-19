
import Data from "@/app/mock/profile/data/profile.json"
import EducationEntry from "./education_entry/page";

export default function Education() {
  const dEducation = Data["Education"]
  const dLocation = Data["Locations"]

  return (
    <>
      <div className="w-full max-w-lg p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Education</h5>
          <a href="#" className="text-sm font-medium text-orange-600 hover:underline dark:text-orange-500">
            View all
          </a>
        </div>
        <div className="flow-root">
          <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            <EducationEntry
              institution={dEducation.Education01.institution}
              degree={dEducation.Education01.degree}
              fieldOfStudy={dEducation.Education01.fieldOfStudy}
              minor={dEducation.Education01.minor}
              concentration={dEducation.Education01.concentration}
              summary={dEducation.Education01.summary}
              location={dLocation.Location03}
              startDate={new Date(Date.now())}
              endDate={new Date(Date.now())}/>

            <EducationEntry
              institution={dEducation.Education02.institution}
              degree={dEducation.Education02.degree}
              fieldOfStudy={dEducation.Education02.fieldOfStudy}
              minor={dEducation.Education02.minor}
              concentration={dEducation.Education02.concentration}
              summary={dEducation.Education02.summary}
              location={dLocation.Location04}
              startDate={new Date(Date.now())}
              endDate={new Date(Date.now())}/>
          </ul>
        </div>
      </div>
    </>
  );
}