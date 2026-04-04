import PreviewX from "../components/x/PreviewX"

export const metadata = {
    title: "X - Xscriptor",
    description: "Arch customized system",
};


export default function page() {

    return (
        <div className={`animate-fade-in-up min-h-screen flex flex-col items-center justify-center px-4`}>
            <h1>
                X
            </h1>
            <div className="w-full max-w-6xl mx-auto text-center">

                {/* Main Content Section - Side by Side */}

                {/* DecryptedText Section - Right */}
                <div className="flex-1 lg:text-left">
                    <p className="description-container">
                        X is a custom Arch Linux spin focused on simplicity, reproducibility, and a strong visual identity.
                    </p>
                    <p className="description-container">
                        It is built with the standard mkarchiso workflow and is evolving together with the X ecosystem, where package tooling is a core part of the roadmap.
                    </p>
                    <div className="description-container text-left space-y-3">
                        <p className="font-semibold text-neutral-900 dark:text-neutral-100">Core repositories</p>
                        <ul className="pl-5" style={{ color: "var(--foreground)" }}>
                            <li>
                                <a href="https://github.com/xscriptor/x-repo" target="_blank" rel="noopener noreferrer" className="font-semibold underline decoration-amber-600/80 hover:decoration-amber-500" style={{ color: "var(--foreground)" }}>
                                    x-repo
                                </a>{" "}
                                - main repository and ecosystem entry point.
                            </li>
                            <li>
                                <a href="https://github.com/xscriptor/x-linux" target="_blank" rel="noopener noreferrer" className="font-semibold underline decoration-amber-600/80 hover:decoration-amber-500" style={{ color: "var(--foreground)" }}>
                                    x-linux
                                </a>{" "}
                                - Arch spin build profile, packages, and branding base.
                            </li>
                            <li>
                                <a href="https://github.com/xscriptor/xpm" target="_blank" rel="noopener noreferrer" className="font-semibold underline decoration-amber-600/80 hover:decoration-amber-500" style={{ color: "var(--foreground)" }}>
                                    xpm
                                </a>{" "}
                                - package manager focused on a practical workflow for X.
                            </li>
                            <li>
                                <a href="https://github.com/xscriptor/xpkg" target="_blank" rel="noopener noreferrer" className="font-semibold underline decoration-amber-600/80 hover:decoration-amber-500" style={{ color: "var(--foreground)" }}>
                                    xpkg
                                </a>{" "}
                                - package and distribution tooling under active development.
                            </li>
                        </ul>
                        <p style={{ color: "var(--foreground)" }}>
                            Want to collaborate or ask about the roadmap?{" "}
                            <a href="mailto:x@xscriptor.com" className="font-semibold underline decoration-amber-600/80 hover:decoration-amber-500" style={{ color: "var(--foreground)" }}>
                                Contact x@xscriptor.com
                            </a>
                            .
                        </p>
                    </div>
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