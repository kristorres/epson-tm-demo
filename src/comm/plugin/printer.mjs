const errorMessage = (error) => {
    if (error === EpsonTM.Error.CANNOT_START_PRINTER_SEARCH) {
        return "Cannot start printer search."
    }
    if (error === EpsonTM.Error.CANNOT_STOP_PRINTER_SEARCH) {
        return "Cannot stop printer search."
    }
    if (error === EpsonTM.Error.PRINTER_NOT_FOUND) {
        return "Please connect to an Epson TM printer and try again."
    }
    if (error === EpsonTM.Error.INVALID_PRINTER_MODEL) {
        return "Invalid printer model."
    }
    if (error === EpsonTM.Error.CANNOT_CONNECT_PRINTER) {
        return "Cannot connect to a printer."
    }
    if (error === EpsonTM.Error.BLANK_RECEIPT) {
        return "The receipt is blank."
    }

    return "An unknown error occurred."
}

const printerService = {
    printReceipt: (lines, includeCustomerCopy = false) => new Promise(
        (resolve, reject) => {
            EpsonTM.printReceipt(
                {
                    model: EpsonTM.m30,
                    lines,
                    includeCustomerCopy,
                },
                (result) => resolve(result),
                (error) => reject(errorMessage(error))
            )
        }
    ),
    startPrinterSearch: () => new Promise(
        (resolve) => {
            EpsonTM.startPrinterSearch(
                (result) => resolve(result)
            )
        }
    ),
    stopPrinterSearch: () => new Promise(
        (resolve) => {
            EpsonTM.stopPrinterSearch(
                (result) => resolve(result)
            )
        }
    ),
}

export {
    printerService,
}
