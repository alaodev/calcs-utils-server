module.exports = {
  service: 'Gmail',
  auth: {
    type: 'OAuth2',
    user: process.env.NODEMAILER_AUTH_USER,
    clientId: process.env.NODEMAILER_CLIENT_ID,
    clientSecret: process.env.NODEMAILER_CLIENT_SECRET,
    refreshToken: process.env.NODEMAILER_REFRESH_TOKEN,
    accessToken: process.env.NODEMAILER_ACCESS_TOKEN,
  },
  tls: { rejectUnauthorized: false },
}