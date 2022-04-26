module.exports = {
  apps: [
    {
      name: "nextjs",
      script: "./node_modules/next/dist/bin/next",
      args: "start",
      exec_mode: "cluster",
      instances: 3, // Or a number of instances
      autorestart: true,
      watch: true,
      // max_memory_restart: '2G',
      env: {
        PORT: 3000,
        NODE_ENV: "development"
      },
      env_production: {
        PORT: 9003,
        NODE_ENV: "production",
      }
    }
  ]
}