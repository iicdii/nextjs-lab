import Head from 'next/head'
import styles from 'styles/Home.module.css'
import OptimizedProductVoucherForm from "components/OptimizedProductVoucherForm";
import NavBar from "components/NavBar/NavBar";

const Memoized = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Memoized example</title>
        <meta name="description" content="Optimized component example" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <NavBar />
        <OptimizedProductVoucherForm />
      </main>
    </div>
  )
}

export default Memoized
