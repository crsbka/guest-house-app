export default function Footer() {

    const currentDate = new Date();
    const year = currentDate.getFullYear();

    return (
        <div className="text-center text-white bg-[#101212] p-4">
            <p>© {year} Shepit Pruta. All rights reserved.</p>

        </div>
    )

}