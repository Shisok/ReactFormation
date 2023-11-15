export default function Child(props) {
    console.log(props)
    return (
        <div>
            {props.children}
        </div>
    )
}
