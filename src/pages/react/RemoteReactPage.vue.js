import { onMounted, onBeforeUnmount, defineProps } from "vue";
import { remoteAppMap } from "@/mappings/remoteApp";
const props = withDefaults(defineProps(), {
    page: "",
});
let root = null; // for unmounting later (optional)
onMounted(async () => {
    const loader = remoteAppMap[props.locationRemote];
    if (!loader) {
        console.error("Remote app not found:", props.locationRemote);
        return;
    }
    const { default: mount } = await loader();
    const container = document.getElementById("react-root");
    const page = props.page;
    if (container) {
        root = mount(container, page);
    }
});
onBeforeUnmount(() => {
    // if root unmount support is added later
    if (root && root.unmount)
        root.unmount();
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
    id: "react-root",
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
