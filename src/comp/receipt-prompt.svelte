<script>
    export let close

    import {onDestroy, onMount} from "svelte"
    import {
        Button,
        DialogContent,
        Flex,
        Grid,
        Paper,
        Select,
        Titlebar,
        Toggle,
    } from "svelte-doric"

    import notification from "$/comm/plugin/notification.mjs"
    import {printerService} from "$/comm/plugin/printer.mjs"
    import lyrics from "$/lyrics.mjs"

    const receiptOptions = [
        {
            label: "Empty receipt",
            value: [],
        },
        {
            label: "Receipt with blank lines",
            value: ["", ""],
        },
        {
            label: "Secret receipt",
            value: lyrics,
        },
    ]

    let receiptLines = receiptOptions[0].value
    let includeCustomerCopy = false

    const cancel = () => {
        close(null)
    }

    const printReceipt = async () => {
        try {
            await printerService.printReceipt(receiptLines, includeCustomerCopy)
            close(null)
        }
        catch (error) {
            await notification.alert(error)
        }
    }

    onMount(printerService.startPrinterSearch)
    onDestroy(printerService.stopPrinterSearch)
</script>

<DialogContent top="40%" left="50%" originX="50%" width="min(70vw, 320px)">
    <Paper>
        <Titlebar slot="title">
            Receipt
        </Titlebar>
        <Flex gap="16px" padding="16px">
            <Select
                label="Receipt"
                bind:value={receiptLines}
                options={receiptOptions}
            />
            <Toggle
                label="Include customer copy?"
                checkbox
                color="primary"
                iconpos="right"
                bind:on={includeCustomerCopy}
            />
        </Flex>
        <Grid cols="1fr 1fr" slot="action">
            <Button color="secondary" on:click={cancel}>
                CANCEL
            </Button>
            <Button color="primary" on:click={printReceipt}>
                PRINT RECEIPT
            </Button>
        </Grid>
    </Paper>
</DialogContent>
