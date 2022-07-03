async function task() {
    let posts =await fetch("https://jsonplaceholder.typicode.com/posts/")
    // console.log(posts);
    let post=await posts.json()
    console.log(post);
    let tasks=document.getElementById("task")
    post.map(p=>{
        return tasks.innerHTML+=`
                                    <div>
                                    <h6> id:${p.id} </h6>
                                    <h2>Serial NO:${p.userId} </h2>
                                    <h1>Title:${p.title}</h1>
                                    <p>Body:${p.body} </p>
                                    </div>`}
                                    )
}
task()

