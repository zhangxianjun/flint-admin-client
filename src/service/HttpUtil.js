import axios from "axios"

const baseUrl = "/api";

export class HttpUtil {

    static post() {
        axios.get(baseUrl).then(
            response => {
                console.log("=====" + response);
            },
            error => {
                console.log("===" + error);
            }
        );
    }
}

