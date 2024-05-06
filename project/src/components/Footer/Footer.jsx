export function Footer() {
    return (
        <footer
            className="footer mt-auto py-3 bg-light d-flex"
            style={{ bottom: "0", position: "absolute", width: "100%"}}>
            <div className="container" style={{textAlign: "center"}}>
                <span className="text-muted">
                    &copy; 2024 - Federico Mollica
                </span>
            </div>
        </footer>
    );
}
