export default function Footer() {

    const currentDate = new Date();
    const year = currentDate.getFullYear();

    return (
        <div className="text-center bg-white text-black">
            <p>© {year} Shepit Pruta.</p>
            <h6>All rights reserved.</h6>
        </div>
    )

}