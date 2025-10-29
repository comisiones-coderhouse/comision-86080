function PageTitle({ title = "Pagina sin titulo" }) {

    return (
        <h2 className="page-title">
            {title}
        </h2>
    )
}

export default PageTitle;