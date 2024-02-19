import Experience from "@/app/components/profile/experience/page";
import Skills from "../../components/profile/skills/page";
import Education from "@/app/components/profile/education/page";

export default function Profile() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="grid lg:grid-cols-1 xl:grid-cols-2">
                <Experience />
                <Education />
                <Skills />
                {/*<Documents/>*/}
            </div>
        </main>
    );
}