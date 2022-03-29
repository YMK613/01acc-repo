jQuery(function () {
    var articleManager = {
        getParent: function () {
            return jQuery(".related-data").attr("data-parent")
        },
        getNumberOfItems: function () {
            return jQuery(".related-articles__container").length - 1;
        },
        getTemplate: function (article) {
            var articleHtml = jQuery(".article-temp").html();
            articleHtml = articleHtml.replace("{{url}}", article.Url);
            articleHtml = articleHtml.replace("{{thumb}}", article.Thumb);
            articleHtml = articleHtml.replace("{{thumbAlt}}", article.ThumbAlt);
            articleHtml = articleHtml.split("{{category}}").join(article.Category);
            articleHtml = articleHtml.split("{{title}}").join(article.Title);
            articleHtml = articleHtml.replace("{{summary}}", article.Summary);
            return articleHtml;

        },
        appendArticles: function () {
            jQuery.get("/blog/showmoretrending", { parentId: articleManager.getParent(), skip: articleManager.getNumberOfItems() }, function (result) {
                if (result) {
                    result.Articles.forEach(function (item) {
                        jQuery(".trending-list").append(articleManager.getTemplate(item));
                    });
                    if (!result.ShowMore) {
                        jQuery(".article-show-more").hide();
                    }
                    console.log();
                }
            })
        },
        isShowMoreVisible: function () {
            if (jQuery(".related-data").length == 0 || +jQuery(".related-data").attr("data-total") < 10) {
                jQuery(".article-show-more").hide();
            }
        }
    }
    jQuery(".article-show-more").on("click", function () {
        articleManager.appendArticles();
        return false;
    });
    articleManager.isShowMoreVisible();
})