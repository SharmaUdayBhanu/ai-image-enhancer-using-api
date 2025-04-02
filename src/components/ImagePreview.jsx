import Loading from "./Loading";

const ImagePreview = (props) => {
    return (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
            {/* Original Image */}
            <div className="bg-gray-800/80 shadow-xl rounded-xl overflow-hidden border border-indigo-500/30 backdrop-blur-sm">
                <h2 className="text-xl font-semibold text-center bg-indigo-900/80 text-indigo-100 py-2">
                    Original Image
                </h2>

                {props.uploaded ? (
                    <img
                        src={props.uploaded}
                        alt=""
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="flex items-center justify-center h-80 bg-gray-700/50 text-indigo-300">
                        No Image Selected
                    </div>
                )}
            </div>

            {/* Enhanced Image */}
            <div className="bg-gray-800/80 shadow-xl rounded-xl overflow-hidden border border-indigo-500/30 backdrop-blur-sm">
                <h2 className="text-xl font-semibold text-center bg-purple-900/80 text-indigo-100 py-2">
                    Enhanced Image
                </h2>

                {props.enhanced && !props.loading && (
                    <img
                        src={props.enhanced}
                        alt=""
                        className="w-full h-full object-cover"
                    />
                )}

                {props.loading ? (
                    <Loading />
                ) : (
                    <div className="flex items-center justify-center h-80 bg-gray-700/50 text-indigo-300">
                        No Enhanced Image
                    </div>
                )}
            </div>
        </div>
    );
};

export default ImagePreview;