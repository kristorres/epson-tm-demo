import App from "./app.svelte"

document.addEventListener(
    "deviceready",
    () => {
        const app = new App({
            target: document.body,
        })
    },
    false
)
