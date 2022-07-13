import 

const ComponentA =() => {
    return (
        <>
        <h1>ComponentA</h1>
        <ComponentB />
        {children}
        <ComponentB/>
        </>
        )
}

const ComponentB =() =>{
    return (
        <h1>ComponentB</h1>
    )

}


const BlogCard =() =>{
    return(
        <div class="card-header">

        </div>
    )
}

const App =()=>{

    return (
        <>
        <h1>Hola MUndo</h1>
        <ComponentA>

        </ComponentA>
        </>
    )
}