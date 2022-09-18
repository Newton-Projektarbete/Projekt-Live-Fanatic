function Tidbit(tb){
    console.log(tb)
    return <article>
        <h3>{tb.subject}</h3>
        <p>{tb.content}</p>
    </article>
}

export default Tidbit