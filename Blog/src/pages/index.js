import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"


// const samplePageLinks = [
//   {
//     text: "Page 2",
//     url: "page-2",
//     badge: false,
//     description:
//       "A simple example of linking to another page within a Gatsby site",
//   },
//   { text: "TypeScript", url: "using-typescript" },
//   { text: "Server Side Rendering", url: "using-ssr" },
//   { text: "Deferred Static Generation", url: "using-dsg" },
// ]


// const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`


const IndexPage = ({ data }) => (
  <Layout>
    <div className={styles.textCenter}>
      <h1
          style={{
            display: `inline-block`,
            borderBottom: `1px solid`,
          }}
        >
          Amazing Pandas Eating Things
      </h1>


     
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
          
          {data.allMarkdownRemark.edges.map(({ node }) => (
          <Link to={`/detail?id=`+node.id}>
          <div key={node.id}>
            <h3
              style={{
                marginBottom: `5px`,
              }}
            >
              {node.frontmatter.title}{" "}
              <span
                style={{
                  color: `#bbb`
                }}
              >
                — {node.frontmatter.date}
              </span>
            </h3>
            <p>{node.excerpt}</p>
          </div>
          </Link>
        ))}
          





    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`
