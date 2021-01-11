import { message } from "antd";
import { GITHUB_API_TOKEN, GITHUB_REPO_URL } from "./config";

const api = async (page: number): Promise<Response | null> => {
  try {
    const response = await fetch(
      `${GITHUB_REPO_URL}?page=${page}&per_page=10`,
      {
        headers: {
          Authorization: `token ${GITHUB_API_TOKEN}`,
        },
      }
    );
    if (!response.ok) {
      if (response.status === 401) {
        message.error(
          "An authorization error occured, check if the github token has been added to the environment"
        );
        return null;
      }
    }
    return response;
  } catch (err) {
    message.error(err.message);
    return null;
  }
};

export default api;
