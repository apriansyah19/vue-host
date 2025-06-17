import { onMounted, onBeforeUnmount, defineProps, withDefaults } from "vue";
import { remoteAppMap } from "@/mappings/remoteApp";
const props = withDefaults(defineProps(), {
    page: "",
});
let root = null;
onMounted(async () => {
    const loader = remoteAppMap[props.locationRemote];
    if (!loader) {
        console.error("Remote app not found:", props.locationRemote);
        return;
    }
    const { default: loadRemoteApp } = await loader();
    const container = document.getElementById("vue-root");
    if (container) {
        root = loadRemoteApp(container, props.page);
    }
});
onBeforeUnmount(() => {
    if (root && typeof root.unmount === "function") {
        root.unmount();
    }
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_withDefaultsArg = (function (t) { return t; })({
    page: "",
});
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div)({
    id: "vue-root",
});
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeProps: {},
    props: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeProps: {},
    props: {},
});
; /* PartiallyEnd: #4569/main.vue */
