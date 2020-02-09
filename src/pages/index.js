import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from "../components/project"
import 'bootstrap/dist/css/bootstrap.min.css'

const IndexPage = () => (
  <>
    <Layout>
      <SEO title="Home" />

      <Link
        to="/mutter">
        <Project
          url="../../mutter-01.jpg" />
      </Link>

      <Link
        to="/mobile-der-drangsal">
        <Project
          url="../../mobile-der-drangsal.jpg" />
      </Link>

      <Link
        to="/innere-wunde">
        <Project
          url="../../innere-wunde.jpg" />
      </Link>

      <Link
        to="/himmel-und-holle">
        <Project
          url="../../himmel-und-holle-01.jpg" />
      </Link>

      <Link
        to="o-t-2">
        <Project
          url="../../o-t-2.jpg" />
      </Link>

      <Link
        to="/36-12n-379o">
        <Project
          url="../../36-12n-379o-03.jpg" />
      </Link>

      <Link
        to="/ot">
        <Project
          url="../../o-t-01.jpg" />
      </Link>

      <Link
        to="/sommer">
        <Project
          url="../../sommer-01.jpg" />
      </Link>

      <Link
        to="/geerntet">
        <Project
          url="../../geerntet-01.jpg" />
      </Link>

      <Link
        to="/sieben-stadte-der-liebe">
        <Project
          url="../../sieben-stadte-der-liebe-02.jpg" />
      </Link>

      <Link
        to="am-ende-der-hoffnuglosigkeit">
        <Project
          url="../../am-ende-der-hoffnuglosigkeit-01.jpg" />
      </Link>

      <Link
        to="/heimat">
        <Project
          url="../../heimat-01.jpg" />
      </Link>

      <Link
        to="/psychic-interior-7">
        <Project
          url="../../psychic-interior-01.jpg" />
      </Link>

      <Link
        to="/demmin">
        <Project
          url="../../demmin-01.jpg" />
      </Link>

      <Link
        to="/derjenige-der-nicht-weiß-zu-lieben-kampft">
        <Project
          url="../../derjenige-der-nicht-weiß-zu-lieben-kampft-01.jpg" />
      </Link>

      <Link
        to="/schaukel">
        <Project
          url="../../schaukel01.jpg" />
      </Link>
    </Layout>
  </>
)

export default IndexPage