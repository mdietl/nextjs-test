module.exports = {
    apps: [
        {
            instances: 10,
            exec_mode: "cluster",
            script: "node_modules/next/dist/bin/next",
            args: "start",
        },
    ],
}
