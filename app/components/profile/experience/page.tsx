import Data from "@/app/mock/profile/data/profile.json"
import ExperienceEntry from "./experience_entry/page";

export default function Experience() {
  const dExperience = Data["Experience"]
  const dLocation = Data["Locations"]

  return (
    <>
      <div className="w-full max-w-lg p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Experience</h5>
          <a href="#" className="text-sm font-medium text-orange-600 hover:underline dark:text-orange-500">
            View all
          </a>
        </div>
        <div className="flow-root">
          <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            <ExperienceEntry
              company_name={dExperience.Experience01.company_name}
              title={dExperience.Experience01.title}
              summary={dExperience.Experience01.summary}
              location={dLocation.Location01}
              startDate={new Date(Date.now())}
              endDate={new Date(Date.now())}/>

            <ExperienceEntry
              company_name={dExperience.Experience02.company_name}
              title={dExperience.Experience02.title}
              summary={dExperience.Experience02.summary}
              location={dLocation.Location02}
              startDate={new Date(Date.now())}
              endDate={new Date(Date.now())}/>
          </ul>
        </div>
      </div>
    </>
  );
}