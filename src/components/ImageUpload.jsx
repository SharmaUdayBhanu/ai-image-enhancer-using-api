const ImageUpload = (props) => {
    const ShowImageHandler = (e) => {
        const file = e.target.files[0];
        if (file) {
            props.UploadImageHandler(file);
        }
    };

    return (
        <div className="bg-gray-800/80 shadow-xl rounded-2xl p-6 w-full max-w-2xl border border-indigo-500/30 backdrop-blur-sm hover:border-indigo-400 transition-all">
            <label
                htmlFor="fileInput"
                className="block w-full cursor-pointer border-2 border-dashed border-indigo-500/50 rounded-lg p-8 text-center hover:border-indigo-400 transition-all"
            >
                <input
                    type="file"
                    id="fileInput"
                    className="hidden"
                    onChange={ShowImageHandler}
                />
                <span className="text-lg font-medium text-indigo-200">
                    Click or drag to upload your image
                </span>
                <p className="text-sm text-indigo-400 mt-2">
                    Supports JPG, PNG, WEBP
                </p>
            </label>
        </div>
    );
};

export default ImageUpload;