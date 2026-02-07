import { useEffect, useRef } from "react";

export default function SkillsHero({ skills }) {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;

        function handleMouseMove(e) {
            const items = container.querySelectorAll(".skill-item");

            items.forEach((item) => {
                const itemRect = item.getBoundingClientRect();
                const itemX = itemRect.left + itemRect.width / 2;
                const itemY = itemRect.top + itemRect.height / 2;

                const dx = e.clientX - itemX;
                const dy = e.clientY - itemY;
                const distance = Math.sqrt(dx * dx + dy * dy);

                const strength = Math.max(0, 120 - distance) / 120;

                item.style.transform = `
          translate(${dx * strength * 0.04}px, ${dy * strength * 0.04}px)
          scale(${1 + strength * 0.08})
        `;
            });
        }

        function reset() {
            const items = container.querySelectorAll(".skill-item");
            items.forEach((item) => {
                item.style.transform = "translate(0, 0) scale(1)";
            });
        }

        container.addEventListener("mousemove", handleMouseMove);
        container.addEventListener("mouseleave", reset);

        return () => {
            container.removeEventListener("mousemove", handleMouseMove);
            container.removeEventListener("mouseleave", reset);
        };
    }, []);

    return (
        <section
            ref={containerRef}
            className="flex-1 w-full flex flex-col items-center justify-center bg-transparent px-6"
        >
            {/* Header */}
            <div className="mb-14 text-center max-w-2xl">
                <h1 className="text-4xl md:text-6xl font-semibold text-zinc-900 tracking-tight">
                    What I Build With
                </h1>
                <p className="mt-4 text-zinc-600 text-lg">
                    Modern frameworks, languages, and tools that power my projects
                </p>
            </div>

            {/* Skills */}
            <div className="relative flex flex-wrap justify-center gap-4 max-w-4xl">
                {skills.map((skill) => (
                    <div
                        key={skill.name}
                        className={`
              skill-item
              cursor-default
              select-none
              rounded-full
              border
              border-zinc-200
              bg-white
              px-6 py-3
              text-zinc-800
              shadow-sm
              transition-transform duration-200 ease-out
              hover:shadow-md
            `}
                        style={{
                            fontSize: `${0.9 + skill.weight * 0.1}rem`,
                        }}
                    >
                        {skill.name}
                    </div>
                ))}
            </div>
        </section>
    );
}
