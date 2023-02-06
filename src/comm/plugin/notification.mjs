const notification = {
    alert: (title, message = undefined) => new Promise(
        (resolve, reject) => {
            navigator.notification.alert(
                message,
                () => resolve(true),
                title
            )
        }
    ),
}

export default notification
