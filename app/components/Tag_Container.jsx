const Tag_Container = ({ idTag, children }) => {
    return (
        <section id={idTag} className="container min-h-screen w-full flex rounded-md py-3 md:h-screen">
            {children}
        </section>
    );
}

export default Tag_Container;