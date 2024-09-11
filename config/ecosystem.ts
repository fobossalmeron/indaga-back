module.exports = {
    apps: [
      {
        name: 'strapi-app',
        cwd: '/root/indaga-back/dist/build', // must have absolute path
        script: 'npm',
        args: 'start',
        env: {
          NODE_ENV: 'production',
        },
      },
    ],
  };