import axios from "axios"

function ImagePicker({ children, setFile, folder }) {
    const handleOnChange = async (evt) => {
        const image = evt.target.files[0]
        if (image) {
            const formData = new FormData()
            formData.append('file', image)
            formData.append('upload_preset', 'md0t9ul5')
            formData.append('folder', `OpenBooks/${folder}`)
            const { status, data } = await axios.post('https://api.cloudinary.com/v1_1/du7yqh30m/upload', formData)
            if (status === 200) {
                const imageURL = data.secure_url
                setFile(imageURL)
            }
        }
    }

    return (
        <>
            <label htmlFor="file-input">
                {children}
            </label>
            <input
                onChange={handleOnChange}
                accept="image/*"
                id="file-input"
                type="file"
                style={{ display: 'none' }}
            />
        </>
    );
}

export default ImagePicker;
