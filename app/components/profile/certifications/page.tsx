import Certification_Entry from "./certification_entry/page";
import Data from "@/app/mock/profile/data/profile.json"

export default function Skills() {
  // Temporary values
  const {Certificate01, Certificate02} = Data.Certifications;
  return (
    <>
      <div className="w-full max-w-lg p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
              <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Certifications</h5>
              <a href="#" className="text-sm font-medium text-orange-600 hover:underline dark:text-orange-500">
                  View all
              </a>
        </div>
        <div className="flow-root">
          <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            <Certification_Entry name={Certificate01.name} issuer={Certificate01.issuer}
              date_issued={new Date(Date.now())} date_of_expiry={new Date(Date.now())}/>
            <Certification_Entry name={Certificate02.name} issuer={Certificate02.issuer}
              date_issued={new Date(Date.now())} date_of_expiry={new Date(Date.now())}/>
          </ul>
        </div>
      </div>
    </>
  );
}