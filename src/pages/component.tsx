const component = () => {
    let message: string = "my first arrow function with components"
    return (
        <div>
            <h2>{message}</h2>
        </div>
    )
}
//Next Js Compnent 

export const Component = () => {
    let message: string = "my second arrow function with component"
    return (
        <div>
            <h4>{message}</h4>
        </div>
    )
}

export default Component;