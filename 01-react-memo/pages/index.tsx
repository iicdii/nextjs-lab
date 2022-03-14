import Head from 'next/head'
import styles from 'styles/Home.module.css'
import ProductVoucherForm from 'components/ProductVoucherForm';
import NavBar from "components/NavBar/NavBar";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>No optimize example</title>
        <meta name="description" content="No optimize component example" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <NavBar />
        <ProductVoucherForm />
      </main>
    </div>
  )
}

export default Home
