'use client';

import SkillsEntry from "./skill_entry/page";

export default function Skills() {
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
                  <SkillsEntry skill_name="C++" skill_description="Programming Language" skill_competency="Intermediate"/>
                  <SkillsEntry skill_name="ReactJS" skill_description="Programming Language Framework" skill_competency="Beginner"/>
                  <SkillsEntry skill_name="C#" skill_description="Programming Language" skill_competency="Intermediate"/>
                  <SkillsEntry skill_name="PostgreSQL" skill_description="DB Query Language" skill_competency="Intermediate"/>
                  <SkillsEntry skill_name="Problem Solving" skill_description="Soft Skill" skill_competency="Expert"/>
                  <SkillsEntry skill_name="Linux" skill_description="Operating System" skill_competency="Expert"/>
              </ul>
        </div>
      </div>
    </>
  );
}