import Skills from "../../components/profile/skills/page";

export default function Profile() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>
                <Skills/>
                {/*<Education/>
                <Experience/>
                <Documents/>*/}
            </div>
        </main>
    );
}