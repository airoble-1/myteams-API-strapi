module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '259e83d0f70eabccb86f490546504b4b'),
  },
});
