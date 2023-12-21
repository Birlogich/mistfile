export const useCacheUpload = () => {
  let headers = new Headers();

  headers.append("Access-Control-Allow-Headers", "Mime-Type");
  headers.append("Access-Control-Allow-Origin", "no-cors");
  headers.append("Access-Control-Allow-Methods", "POST, GET, PUT");

  const uploadFile = async (url, binaryText) => {
    try {
      const response = await fetch(url, {
        method: "PUT",
        body: binaryText,
        headers,
      });

      if (!response.ok) throw new Error("Failed to fetch");

      const data = await response;

      return data;
    } catch (error) {
      console.error("Error during file upload:", error.message);
      throw error;
    }
  };

  return [uploadFile];
};
