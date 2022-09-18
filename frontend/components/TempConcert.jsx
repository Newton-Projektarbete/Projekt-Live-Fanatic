function TempConcert(con){
    console.log('con is : ')
    console.log(con)
    console.log('--------')
    console.log('con.concert_name is : ')
    console.log(con.concert_name)
    console.log('--------')

    return <div> 
        <p>{con.concert_name}</p>
    </div>

}

export default TempConcert


/* function loadPage() {
    let result = ""
    for(let i = 0 ; i > allConcerts.length ; i++){
        if(pos = allConcerts[i].concert_id) {
            result = <h3>{allConcerts[id].concert_name}</h3>
        }
    }
    return result
} */
/* 
function TempConcert(prop){
    console.log(prop)
    return <>
        <p>Concert Id: {prop.concert_id}</p>
        <p>Concert name: {prop.concert_name}</p>
    </>
}

export default TempConcert */