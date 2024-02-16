'use client';

import { SkillsCompetency } from "@/app/_lib/types/profile";
import SkillsEntry from "./skill_entry/page";
import Data from "@/app/mock/profile/data/profile.json"

export default function Skills() {
  // Temporary values
  const {Skill01, Skill02, Skill03, Skill04, Skill05, Skill06} = Data.Skills;
  return (
    <>
      <div className="w-full max-w-lg p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
              <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Skills</h5>
              <a href="#" className="text-sm font-medium text-orange-600 hover:underline dark:text-orange-500">
                  View all
              </a>
        </div>
        <div className="flow-root">
          <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            <SkillsEntry name={Skill01.name} description={Skill01.description}
              competency={Object.values(SkillsCompetency).find((sc: string) => sc === Skill01.competency)}/>
            <SkillsEntry name={Skill02.name} description={Skill02.description}
              competency={Object.values(SkillsCompetency).find((sc: string) => sc === Skill02.competency)}/>
            <SkillsEntry name={Skill03.name} description={Skill03.description}
              competency={Object.values(SkillsCompetency).find((sc: string) => sc === Skill03.competency)}/>
            <SkillsEntry name={Skill04.name} description={Skill04.description}
              competency={Object.values(SkillsCompetency).find((sc: string) => sc === Skill04.competency)}/>
            <SkillsEntry name={Skill05.name} description={Skill05.description}
              competency={Object.values(SkillsCompetency).find((sc: string) => sc === Skill05.competency)}/>
            <SkillsEntry name={Skill06.name} description={Skill06.description}
              competency={Object.values(SkillsCompetency).find((sc: string) => sc === Skill06.competency)}/>
          </ul>
        </div>
      </div>
    </>
  );
}