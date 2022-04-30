module.exports = {
  apps: [
    {
      name: 'strapi-cms',
      script: 'npm',
      args: 'start',
      env_production: { NODE_ENV: "production" },
    },
  ],
};

// Production start: pm2 start ecosystem.config.js --env production --watch