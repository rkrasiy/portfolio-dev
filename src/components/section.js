export default function Section(props){
    return (
        <section className="py-8 px-4 min-h-[100vh]">
            <div className="container mx-auto">
                {props.title ? <h2 className="text-center text-3xl font-medium">{props.title}</h2> : null }
            </div>
        </section>
    )
}