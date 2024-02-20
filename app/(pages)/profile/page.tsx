import Experience from "@/app/components/profile/experience/page";
import Education from "@/app/components/profile/education/page";
import Skills from "../../components/profile/skills/page";
import Certifications from "../../components/profile/certifications/page";

export default function Profile() {
    // cols width 732 for break
    return (
        <main className="flex p-10 sm:min-w-full min-h-screen items-center justify-center">
            <div className="grid gap-1 md:gap-2 xs:grid-cols-2 md:grid-cols-10">
                <div className="xs:col-start-1 xs:col-span-2 sm:col-span-5 lg:col-start-3 lg:col-span-4 xl:col-start-3 xl:col-span-4">
                    <Experience />
                </div>
                <div className="xs:col-start-1 xs:col-span-2 sm:col-span-5 lg:col-span-3 xl:col-span-3">
                    <Education />
                    <Skills />
                    <Certifications />
                </div>
                {/*<Documents/>*/}
            </div>
        </main>
    );
}