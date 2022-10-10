import Image from 'next/image'
import styles from '../../styles/Home.module.css'

export default function Banner() {
    return (

        <main className={styles.main}>

            <span className={styles.logo}>
            <Image src="/logo-banner.JPG" alt="SP Logo" width={76} height={76}/>
            </span>
            <h1 className="text-3xl font-bold">
                Shepit Pruta
            </h1>
            <button type="submit">Click</button>
            <p className={styles.description}>
                Quiet rooms by the river for couples, companies and families.
            </p>

        </main>
    )
}
