type Props = {
  skill_name: string, 
  skill_description: string, 
  skill_competency: string
}

export default function SkillsEntry(props: Props) {
  return (
    <li className="pt-1 pb-0 sm:pt-4">
      <div className="flex items-center ">
          <div className="flex-1 min-w-0 ms-1">
              <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  {props.skill_name}
              </p>
              <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                {props.skill_description}
              </p>
          </div>
          <div className="inline-flex items-center text-base pb-4 font-semibold text-gray-900 dark:text-white">
            {props.skill_competency}
          </div>
      </div>
    </li>
  );
}