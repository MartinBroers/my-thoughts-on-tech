/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
	siteMetadata: {
		title: ``,
		siteUrl: `https://www.martinbroers.com`
	},
	plugins: ["gatsby-plugin-mdx", "gatsby-transformer-remark", {
		resolve: 'gatsby-source-filesystem',
		options: {
			"name": "pages",
			"path": "./src/pages/"
		},
		__key: "pages"
	},
		"gatsby-plugin-mdx", "gatsby-plugin-image", "gatsby-plugin-sharp"
	]
};
