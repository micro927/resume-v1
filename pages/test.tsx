async function fetcher(url: string) {
    const res = await fetch(url)
    const resumeData = await res.json()
    return resumeData
}

export default function Index() {
    async function aaa() {
        const b = await fetcher('/api/data')
        console.log(b)
        return b
    }
    aaa()
    return (
        <div>
            <h1>My Framework from file</h1>
        </div>
    );
}