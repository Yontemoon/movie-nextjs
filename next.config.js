module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
        pathname: '/t/p/original/**'
      },
    ],
  },
  // async redirect() {
  //   return [
  //     {
  //       source: "/login",
  //       destination: ''
  //     }
  //   ]
  // }
};