
import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Card from '@site/src/components/card';
import BlogPostCard from '@site/src/components/blogPostCard';
import Hero from '@site/src/components/hero';
import PostCarousel from '@site/src/components/postCarousel';
import allBlogData from './../../.docusaurus/docusaurus-plugin-content-blog/default/blog-archive-80c.json'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// import { getSpotlightMember } from '../utils/get-spotlight-member';


const bannerAnimation = require('@site/static/img/banner-white.svg');

function getBanner() {
  return { __html: bannerAnimation };
};

function Home() {
  
  const recentBlogData = allBlogData.blogPosts.slice(0, 6).reduce((accumulator, currentValue) => {
    let postMetaData = {
      title: currentValue.metadata.title,
      date: currentValue.metadata.formattedDate,
      readingTime: Math.round(currentValue.metadata.readingTime),
      description: currentValue.metadata.description,
      link: currentValue.metadata.permalink,
    }
    accumulator.push(postMetaData)
    return accumulator
  }, [])

  const featuredResource = {
    title: "Feature placeholder",
    description: "Description",
    link: "/guides/best-practices/tmp/1-guide-overview",
    image: "/img/structure-dbt-projects.png",
    sectionTitle: 'Featured resource'
  }
  
  // Set spotlightSection to featuredResource by default
  let spotlightSection = featuredResource

  // Check if featured community spotlight member set in Docusaurus config
  const { siteConfig } = useDocusaurusContext()
  let communitySpotlightMember = 
    siteConfig?.themeConfig?.communitySpotlightMember || null

  // Get spotlight member by ID or date if available
  // If found, update section to show community spotlight member
  // Otherwise, show featured resource
  const spotlightMember = undefined
  // const spotlightMember = getSpotlightMember(communitySpotlightMember)
  if(spotlightMember) {
    spotlightSection = spotlightMember
  }
  
  return (
    <>
      <Head>
        <meta name="google-site-verification" content="ex1EMwuCGU33-nOpoOajLXEpMPgUYK5exBWePCu-0l0" />
      </Head>
      <Layout permalink="/">
        <div className="container container--fluid home" style={{ "padding": "0", "background": "#FFF" }}>
          <Hero heading="Welcome to the Konpyutaika Hub" subheading="Your home base for learning Konpyutaika and its core components and connecting with us!" showGraphic />
          <section className={`resource-section row ${spotlightMember ? 'has-spotlight-member' : ''}`}>
            <div className="popular-header"><h2>Popular resources</h2></div>
            <div className="popular-resources">
              <div className="grid">
                <div>
                  <Card
                    title="What is Konpyutaika?"
                    body="Konpyutaiaka enables organizations to enable a data platform in a data-meshed organization. It offers a cloud-native platform to enable your modern data stack."
                    link="/docs/introduction"
                    icon="question-mark"
                  />
                </div>
                <div>
                  <Card
                    title="Getting started guide"
                    body="Learn how to configure your Konpyutaika platform and set up your first project in your data domain. You will also ingest, transform and govern your data and schedule your job."
                    link="/docs/get-started/getting-started/overview"
                    icon="book"
                  />
                </div>
                <div>
                  <Card
                    title="Docs"
                    body="Discover everything Konpyutaika has to offer from the basics to advanced concepts."
                    link="/docs/deploy/deployments"
                    icon="docs"
                  />
                </div>
                <div>
                  <Card
                    title="Set up on your cloud providers"
                    body="Konpyutaika runs on Kubernetes cluster and can be deployed on major cloud providers."
                    link="/docs/set-up-on-your-cloud-provider"
                    icon="rocket"
                  />
                </div>
              </div>
            </div>
            <div className="featured-header"><h2>{spotlightSection?.sectionTitle ? spotlightSection.sectionTitle : 'Featured resource'}</h2></div>
            <div className="featured-resource">
            <BlogPostCard postMetaData={spotlightSection} />
            </div>
          </section>

          <section className="from-the-blog">
            <h2>The latest from the Developer Blog</h2>
            <PostCarousel blogPostData={recentBlogData} />
          </section>

          <section className="from-the-community">
            <h2>From the konpyutaika Community</h2>
            <div className="grid--3-col">
              <div>
                <Card
                  title="Join the community"
                  body="Connect with data practitioners from around the world."
                  link="/community/join"
                  icon="smiley-face"
                />
              </div>
              <div>
                <Card
                  title="Become a contributor"
                  body="Help build the resources the community uses to solve hard problems."
                  link="/community/contribute"
                  icon="pencil-paper"
                />
              </div>
              <div>
                <Card
                  title="Open source operators"
                  body="Manage by yourself your platform with the open sourced operators."
                  link="/"
                  icon="packages"
                />
              </div>
            </div>
          </section>

          <section className="like-a-pro">
            <h2>Use Konpyutaika</h2>
            <div className="grid--3-col">
              <div>
                <Card
                  title="Guides"
                  body="Learn battle tested strategies best practices."
                  link="/guides/best-practices"
                  icon="guides"
                />
              </div>
              <div>
                <Card
                  title="Community slack"
                  body="Get help and swap knowledge in the Slack channel."
                  link="https://join.slack.com/t/konpytika/shared_invite/zt-14md072lv-Jr8mqYoeUrqzfZF~YGUpXA"
                  icon="slack"
                />
              </div>
              {/*<div>*/}
              {/*  <Card*/}
              {/*    title="Online courses"*/}
              {/*    body="Structured video courses to give you a deep dive into analytics engineering topics."*/}
              {/*    link="https://courses.getdbt.com/collections"*/}
              {/*    icon="computer"*/}
              {/*  />*/}
              {/*</div>*/}
            </div>
          </section>

        </div>

        <div className="banner-animation" dangerouslySetInnerHTML={getBanner()}></div>
      </Layout>
    </>
  );
}

export default Home;
