<script>
    import {
        AppStyle,
        Appbar,
        Baseline as baseline,
        Button,
        Flex,
        Paper,
        Screen,
        dialog,
    } from "svelte-doric"

    import ReceiptPrompt from "./comp/receipt-prompt.svelte"
    import LightTheme from "./theme/light.svelte"

    const openPrinter = async () => {
        await dialog.show(ReceiptPrompt, {persistent: true})
    }
</script>

<AppStyle {baseline} theme={LightTheme} />

<Screen full>
    <Appbar center slot="title">
        Epson TM Demo
    </Appbar>

    <Paper square card layout={Flex} lcenter>
        <Button variant="fill" color="primary" on:click={openPrinter}>
            OPEN PRINTER
        </Button>
    </Paper>
</Screen>
