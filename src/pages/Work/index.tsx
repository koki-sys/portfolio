import { WorkCard } from "components/WorkCard"

export const Work = () => {
    return (
        <div className="container-md mx-auto px-32">
            <h1 className="text-4xl text-center mt-8">Works</h1>
            <div className="grid grid-cols-3 gap-4 mt-10">
                <WorkCard />
                <WorkCard />
                <WorkCard />
                <WorkCard />
                <WorkCard />
            </div>
        </div>
    )
}
