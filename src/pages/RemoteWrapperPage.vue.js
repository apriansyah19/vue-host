import { defineAsyncComponent } from "vue";
import ErrorBoundary from "@/components/ErrorBoundary.vue";
const props = withDefaults(defineProps(), {
    page: "",
});
const AsyncRemoteLoader = defineAsyncComponent({
    loader: () => {
        const type = props.type;
        switch (type) {
            case "vue":
                return import("@/pages/vue/RemoteVuePage.vue");
            case "react":
                return import("@/pages/react/RemoteReactPage.vue");
            default:
                throw new Error("Invalid path!");
        }
    },
    onError(error, fail) {
        console.error("Error loading remote component:", error);
        fail(); // Stop the loading process
    },
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_withDefaultsArg = (function (t) { return t; })({
    page: "",
});
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {[typeof ErrorBoundary, typeof ErrorBoundary, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(ErrorBoundary, new ErrorBoundary({}));
const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
var __VLS_3 = {};
__VLS_2.slots.default;
const __VLS_4 = {}.Suspense;
/** @type {[typeof __VLS_components.Suspense, typeof __VLS_components.Suspense, ]} */ ;
// @ts-ignore
const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({}));
const __VLS_6 = __VLS_5({}, ...__VLS_functionalComponentArgsRest(__VLS_5));
__VLS_7.slots.default;
{
    const { default: __VLS_thisSlot } = __VLS_7.slots;
    const __VLS_8 = ((__VLS_ctx.AsyncRemoteLoader));
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
        page: (__VLS_ctx.page),
        locationRemote: (__VLS_ctx.locationRemote),
    }));
    const __VLS_10 = __VLS_9({
        page: (__VLS_ctx.page),
        locationRemote: (__VLS_ctx.locationRemote),
    }, ...__VLS_functionalComponentArgsRest(__VLS_9));
}
{
    const { fallback: __VLS_thisSlot } = __VLS_7.slots;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "text-gray-500 text-center py-4" },
    });
}
var __VLS_7;
var __VLS_2;
/** @type {__VLS_StyleScopedClasses['text-gray-500']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['py-4']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            ErrorBoundary: ErrorBoundary,
            AsyncRemoteLoader: AsyncRemoteLoader,
        };
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
