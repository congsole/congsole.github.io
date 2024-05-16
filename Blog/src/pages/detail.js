import * as React from "react"
import Layout from "../components/layout"
import PropTypes from "prop-types"
import withLocation from "../components/withLocation"
import { graphql } from "gatsby"


const UseQueryParamExample = ({ search, data }) => {

    console.log(search);
    const id = search;
    const post = data.markdownRemark;

    return (
    <Layout>

          <div key={post.id}>
            <h1
              style={{
                marginBottom: `5px`,
              }}
            >
              {post.frontmatter.title}
              <span
                style={{
                  color: `#bbb`
                }}
              >
                — {post.frontmatter.date}
              </span>
            </h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>

    </Layout>
    );
  };

  
  export default withLocation(UseQueryParamExample);
  export const query = graphql`
  query($id : String ) {
    markdownRemark(id: {eq: $id }) {
      html
      id
      frontmatter {
        title
        date
      }
    }
  }
`
