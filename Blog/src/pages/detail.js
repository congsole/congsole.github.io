import * as React from "react"
import Layout from "../components/layout"
import withLocation from "../components/withLocation"
import { graphql, useStaticQuery } from "gatsby"
import { useQuery, gql } from "@apollo/client"

const GET_MARKDOWN_REMARK = gql`
  query GetMarkdownRemark($id: String) {
    markdownRemark(id: {eq: $id}) {
      id
      excerpt
      frontmatter {
        title
        date
      }
      html
    }
  }
`

const UseQueryParamExample = ({ search }) => {
  // withLocation HOC로부터 search 값을 받음
  const id = search;

  // useQuery 훅을 사용하여 GraphQL 쿼리 실행
  const { loading, error, data } = useQuery(GET_MARKDOWN_REMARK, {
    variables: { id: id }
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <Layout>
      <div key={data.markdownRemark.id}>
        <h3 style={{ marginBottom: `5px` }}>
          {data.markdownRemark.frontmatter.title}{" "}
          <span style={{ color: `#bbb` }}>
            — {data.markdownRemark.frontmatter.date}
          </span>
        </h3>
        <p>{data.markdownRemark.excerpt}</p>
      </div>
    </Layout>
  )
}

export default withLocation(UseQueryParamExample)