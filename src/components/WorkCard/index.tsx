import "components/WorkCard/style.css"

export const WorkCard = () => {
    return (
        <div className="col-md-3">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                    className="w-full"
                    src="/img/card-top.jpg"
                    alt="Sunset in the mountains"
                />
                <div className="px-6 py-4 card-body">
                    <div className="font-bold text-xl mb-2">
                        サンプル1
                    </div>
                    <p className="text-base">作成日：2022/2/22</p>
                </div>
            </div>
        </div>
    )
}
