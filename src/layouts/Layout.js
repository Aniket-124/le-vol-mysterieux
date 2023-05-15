const Layout = ({children}) => {
    return (
        <div className="__layout">
            <main className="__page">
                {children}
            </main>
        </div>
    )
}

export default Layout;