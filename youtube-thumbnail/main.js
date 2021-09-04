const tmb = document.createElement('img')

const observer = new MutationObserver(function(mutations) {
    insertThumbnail()
});

observer.observe(document.querySelector('head'), {childList: true, subtree: true});

function insertThumbnail() {
    const url = location.href
    const id = getIdFromUrl(url)
    tmb.id = "tmb"
    tmb.src = getThumbnailUrl(id)
    tmb.width = 168
    tmb.height = 94
    tmb.style.paddingTop = "8px"

    const title = document.getElementsByTagName("h1")[0]
    title.parentNode.insertBefore(tmb, title.nextSibling)
}

function getIdFromUrl(url) {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/
    const match = url.match(regExp)
    if(match && match[7].length == 11) {
        return match[7]
    }
    else {
        return false
    }
}

function getThumbnailUrl(id) {
    return "https://img.youtube.com/vi/" + id + "/mqdefault.jpg"
}
