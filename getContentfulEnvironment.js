const contentfulManagement = require('contentful-management')

module.exports = function () {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: process.env.CTF_ACCESS_TOKEN,
  })

  return contentfulClient
    .getSpace(process.env.CTF_SPACE_ID)
    .then((space) => space.getEnvironment(process.env.CTF_ENV))
}
