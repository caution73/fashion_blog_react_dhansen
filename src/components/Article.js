function Article(props){
    return (
        <article>
            <time>{props.article.time}</time>
            <h3 class="postTitle">{props.article.postTitle}</h3>
            <img src={props.article.imageSrc} alt={props.article.imageAlt}/>
            <p>{props.article.articleContent}</p>
            <a class="continues">Continues...</a>
        </article>
    )
}

export default Article