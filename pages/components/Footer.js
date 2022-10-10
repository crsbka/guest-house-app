export default function Footer() {

    const currentDate = new Date();
    const year = currentDate.getFullYear();

    return (
        <div className="footer">
            <p>© {year} Shepit Pruta.</p>
            <h6>All rights reserved.</h6>
        </div>
    )

}