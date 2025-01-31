import lang from '../configs/Language.json'

function UpdatePopup() {
    const noticediv = document.createElement("div")
    const messboxdiv = document.createElement("div")
    const downloaddiv = document.createElement("div")
    const closediv = document.createElement("div")
    const message = document.createElement("p")
    const download = document.createElement("a")
    const notice = document.createElement("img")
    const close = document.createElement("img")

    messboxdiv.classList.add("messdiv")
    downloaddiv.classList.add("downdiv")
    closediv.classList.add("closediv")
    close.classList.add("closenotice")
    message.classList.add("message")
    download.classList.add("download")
    noticediv.classList.add("noticediv")
    notice.classList.add("notice")

    notice.setAttribute('src', "//plugins/ElainaV2/assets/Icon/download.png")
    close.setAttribute('src', '//plugins/ElainaV2/assets/Icon/close.png')

    //More readable and easier to maintain
    const langCode = document.querySelector("html").lang;
    const langMap = {
        "vi-VN": "VN",
        "ja-JP": "JP",
        "pl-PL": "PL",
        "ru-RU": "RU",
        "es-MX": "MX",
    };
    const selectedLang = lang[langMap[langCode] || "EN"];

    let showcontainer = document.getElementsByClassName("rcp-fe-lol-home")[0]

    showcontainer.appendChild(noticediv)
    noticediv.append(notice)

    noticediv.addEventListener('click', () => {
        showcontainer.appendChild(messboxdiv)
        showcontainer.appendChild(downloaddiv)
        showcontainer.appendChild(closediv)
        showcontainer.appendChild(message)
        closediv.append(close)
        downloaddiv.append(download)

        message.innerHTML = selectedLang["update_mess"];
        download.innerHTML = selectedLang["update"];

        download.setAttribute("href", 'https://github.com/Elaina69/Elaina-V2/releases')
        download.setAttribute("target", '_blank')

        closediv.addEventListener('click', () => {
            try {
                document.getElementsByClassName("message")[0].remove()
                document.getElementsByClassName("download")[0].remove()
                document.getElementsByClassName("closenotice")[0].remove()
                document.getElementsByClassName("messdiv")[0].remove()
                document.getElementsByClassName("downdiv")[0].remove()
                document.getElementsByClassName("closediv")[0].remove()
            }
            catch { }
        })
    })
}

function DelPopup() {
    try {
        document.getElementsByClassName("notice")[0].remove()
        document.getElementsByClassName("noticediv")[0].remove()
        document.getElementsByClassName("message")[0].remove()
        document.getElementsByClassName("download")[0].remove()
        document.getElementsByClassName("closenotice")[0].remove()
        document.getElementsByClassName("messdiv")[0].remove()
        document.getElementsByClassName("downdiv")[0].remove()
        document.getElementsByClassName("closediv")[0].remove()
    }
    catch { }
}

import wt from './Watermark'

let Update = {
    UpdatePopup: UpdatePopup,
    DelPopup: DelPopup
}
export default Update