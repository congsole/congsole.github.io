import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"




const contactPage = () => (
  <Layout>
    <div className={styles.textCenter}>
        <h4>Phone</h4>
        <p>010-9606-1196</p>
        <h4>e-mail</h4>
        <p>hsson@bluedigm.com</p>


    </div>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default contactPage

