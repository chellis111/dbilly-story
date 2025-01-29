import axiosInstance from "./axiosInstance";

const uploadImage = async (imageFile) => {
  const formData = new FormData();
  // Append the file to the FormData
  formData.append("image", imageFile);

  try {
    const response = await axiosInstance.post("/image-upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data", //set header for file upload
      },
    });
    return response.data; // Return the response data
  } catch (error) {
    console.error("Error uploading the image: ", error);
    throw error; // Rethrow the error for handling
  }
};

export default uploadImage;
