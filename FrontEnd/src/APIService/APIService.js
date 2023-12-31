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




// User Register Start
export async function Register(PostBody, RegisterUrl) {
    try {
        const URL = BaseURL + "/" + RegisterUrl;

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
// User Register End






// Movie Create Start
export async function MovieCreate(PostBody, RegisterUrl) {




    try {
        const URL = BaseURL + "/" + RegisterUrl;

        // const AxiosHeader = { headers: { 'content-type': 'multipart/form-data' } };
        // const AxiosHeader = { headers: { 'content-type': 'application/json' } };

        const tokenItem = await localStorage.getItem('Token');
        const emailItem = await localStorage.getItem('OfficeEmail');
        const userToken = tokenItem.value;
        const userEmail = emailItem.value;
        const AxiosHeader = { headers: { token: tokenItem, email: emailItem } };


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
// Movie Create End






// All Movie Movies Details
export async function AllMovieMoviesDetails() {

    try {
        const URL = BaseURL + "/AllMovieMoviesDetails";
        const result = await axios.get(URL);
        if (result.status == 200) {
            return result;
        } else {
            return false;
        }
    } catch (e) {
        return false;
    }
}
// All Movie Movies Details






// Full Movie Movies Details
export async function FullMovieMoviesDetails(MovieID) {
    try {
        const URL = BaseURL + "/FullMovieMoviesDetails/" + MovieID;
        const result = await axios.get(URL);
        if (result.status == 200) {
            return result;
        } else {
            return false;
        }
    } catch (e) {
        return false;
    }
}
// Full Movie Movies Details








// Review Create Start
export async function ReviewCreate(PostBody) {
    try {
        const URL = BaseURL + "/ReviewCreate";
        const result = await axios.post(URL, PostBody);
        if (result.status == 200) {
            return result;
        } else {
            return false;
        }
    } catch (e) {
        return false;
    }
}
// Review Create End


// Review See Start
export async function ReviewSee(MovieID) {
    try {
        const URL = BaseURL + "/ReviewFullSee/" + MovieID;
        const result = await axios.get(URL);
        if (result.status == 200) {
            return result;
        } else {
            return false;
        }
    } catch (e) {
        return false;
    }
}
// Review See End