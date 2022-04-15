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
    }
  ]
}