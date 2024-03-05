import { Header } from '@/widgets'

const LayoutPage = ({ children }: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <main>
            <Header />
            { children }
            <div>Hello</div>   
        </main>
    )
}

export default LayoutPage
