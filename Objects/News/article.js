export default class NewsArticle {
    articleID = ""
    url = ""
    sourceID = ""
    orgID = ""
    categoryID = ""
    title = ""
    summary = ""
    content = ""
    keywords = null
    timestamp = null
    image = ""
    relevance = null
    details = new articleDetails()
}


class articleDetails {
    sourceName = ""
    categoryName = ""
    date = ""
}