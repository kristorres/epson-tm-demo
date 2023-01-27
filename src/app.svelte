<script>
    import {AppStyle, Appbar, Baseline as baseline, Screen} from "svelte-doric"

    import LightTheme from "./theme/light.svelte"
</script>

<AppStyle {baseline} theme={LightTheme} />

<Screen full>
    <Appbar center slot="title">
        Epson TM Demo
    </Appbar>
</Screen>
