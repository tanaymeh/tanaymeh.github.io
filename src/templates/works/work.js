import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Calendar, Briefcase } from 'react-feather'

import {Intro, Title, ArticlePost, SmallText, ArticleBody, Text} from '../../components/styled/posts'
import {ContainerLayout} from '../../components/common'


const portfolioWork = ({data, pageContext, location}) => {
  const work = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={work.frontmatter.title}
        description={work.frontmatter.description || work.excerpt}
      />
      <Intro >
        <ContainerLayout>
          <div>
            <ArticlePost>
              <header>
                <Title>
                  {work.frontmatter.title}
                </Title>
                <Text>
                  <Briefcase className="align-middle text-primary" width="18" height="18" />
                  <span className="align-middle"> {work.frontmatter.company}</span>
                </Text>
                {/* <br></br> */}
                <SmallText>
                  <Calendar className="align-middle text-primary" width="18" height="18" /> 
                  <span className="align-middle"> Duration : {work.frontmatter.date} </span>
                </SmallText>
              </header>

              <ArticleBody dangerouslySetInnerHTML={{ __html: work.html }} />
            </ArticlePost>
          </div>
        </ContainerLayout>
      </Intro>
    </Layout>
  )
}

export default portfolioWork;

export const data = graphql`
  query portfolioWorkBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      rawMarkdownBody
      html
      frontmatter {
        title,
        company,
        date,
        description,
        time,

      }
    }
  }
`