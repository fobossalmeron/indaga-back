module.exports = {
    apps: [
      {
        name: 'indaga-back',
        cwd: '/root/indaga-back/dist/build', // must have absolute path
        script: 'npm',
        args: 'start',
        env: {
          NODE_ENV: 'production',
        },
      },
    ],
  };