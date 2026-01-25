import PreviewX from "../components/x/PreviewX"

export const metadata = {
    title: "X - Xscriptor",
    description: "Arch customized system",
};


export default function page() {

    return (
        <div className={`animate-fade-in-up min-h-screen flex flex-col items-center justify-center px-4`}>
            <h1 style={{ paddingTop: '4rem' }}>
                X
            </h1>
            <div className="w-full max-w-6xl mx-auto text-center">

                {/* Main Content Section - Side by Side */}

                {/* DecryptedText Section - Right */}
                <div className="flex-1 lg:text-left">
                    <p className="description-container">
                        A custom Arch Linux–based distribution focused on simplicity, reproducibility, and a unique visual identity under the “X” branding.
                    </p>
                    <p className="description-container">
                        Fully built from official Arch repositories using the standard mkarchiso workflow.
                        Includes everything needed to reproduce the system: ISO profile, package list, post-install scripts, and custom branding assets.
                        Currently an experimental project, not yet intended for production use.

                    </p>
                </div>
                {/* Horizontal Separator */}
                <div className="w-full flex justify-center my-16">
                    <div className="h-px w-32 bg-gradient-to-r from-transparent via-gray-400 to-transparent opacity-50"></div>
                </div>
                <div>
                    <PreviewX />
                </div>

                {/* Horizontal Separator */}
                <div className="w-full flex justify-center my-16">
                    <div className="h-px w-32 bg-gradient-to-r from-transparent via-gray-400 to-transparent opacity-50"></div>
                </div>

                {/* Skills Network Section */}

            </div>
        </div>

    )
}