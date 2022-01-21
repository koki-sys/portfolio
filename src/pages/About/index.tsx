import github from "images/github.png"
import profile from "images/profile.png"

export const About = () => {
    return (
        <div className="container-md mx-auto px-32">
            <h1 className="text-4xl text-center mt-8">About</h1>
            <div className="grid grid-cols-2 gap-4 mt-10">
                <img
                    src={profile}
                    alt="koki-sys"
                    className="rounded-full h-64 w-64 flex items-center justify-center mx-auto"
                />
                <div>
                    <p className="text-2xl">koki-sys</p>
                    <a href="https://github.com/koki-sys">
                        <img src={github} alt="github" className="mt-5" />
                    </a>
                    <h1 className="text-2xl text-left mt-8">Detail</h1>
                    <p>
                        福岡県在住の専門学生です。
                        <br />
                        一番好きな言語は、phpです。
                        <br />
                        他にも、ReactやGolangの勉強をしています。
                    </p>
                </div>
            </div>
        </div>
    )
}
