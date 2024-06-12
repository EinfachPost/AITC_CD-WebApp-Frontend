import Header from "@/Components/Header";


export default function Layout({children}) {
    return (
        <>

            <Header />

            <main style={{ minHeight: '100vh', position: 'relative', margin: '0'}}>
                <div>
                    {children}
                </div>


            </main>




        </>
    );
}

