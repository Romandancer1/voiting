import axios from "axios";
const API_URL = 'https://voting-app.newtechaudit.ru/api/participants/excel-load/';


class FileHandler {

    async downloadStat() {
        return await axios.get(API_URL, {
             responseType: "blob"
        })
    }
    saveReceivedfile(response, filename, extension) {
        let blob = new Blob([response.data]);
        let downloadElement = document.createElement("a");
        let href = window.URL.createObjectURL(blob); //create the download url
        downloadElement.href = href;
        downloadElement.download = filename + extension; //the name of the downloaded file
        document.body.appendChild(downloadElement);
        downloadElement.click(); //click to file
        document.body.removeChild(downloadElement); //remove the element
        window.URL.revokeObjectURL(href);
    }
}

export default new FileHandler()
