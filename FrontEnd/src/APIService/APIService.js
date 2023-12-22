import axios from "axios";
const BaseURL = "http://localhost:5000/api/v1"

// DashBoard Details
export async function DashBoardDetails() {
    try {
        const URL = BaseURL + "/DashBoardDetails";
        const res = await axios.get(URL);
        if (res.data.status == "Success") {
            return res;
        } else {
            console.log("Error in response");
            return null;
        }
    } catch (e) {
        console.error("Error:", e);
        return null;
    }
}

// Menu Details
export async function MenuDetails() {
    try {
        const URL = BaseURL + "/HeaderDetails";
        const res = await axios.get(URL);
        if (res.data.status == "Success") {
            return res;
        } else {
            console.log("Error in response");
            return null;
        }
    } catch (e) {
        console.error("Error:", e);
        return null;
    }
}


// User Login Start
export async function Login(PostBody, LoginUrl) {
    try {
        const URL = BaseURL + "/" + LoginUrl;

        // const AxiosHeader = { headers: { 'content-type': 'multipart/form-data' } };
        const AxiosHeader = { headers: { 'content-type': 'application/json' } };

        const result = await axios.post(URL, PostBody, AxiosHeader);

        if (result.status == 200) {
            return result;
        } else {
            return false;
        }
    } catch (e) {
        return false;
    }
}
// User Login End