<template>
  <vsf-icon-base
    viewBox="0 0 24 24"
    :class="_classStringToObject(className || '')"
    :size="size || DEFAULT_VALUES.size"
    :ariaLabel="ariaLabel || 'instagram'"
    :content="useContent"
  ></vsf-icon-base>
</template>

<script lang="ts">
export interface VsfIconInstagramProps {
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";
  className?: string;
  ariaLabel?: string;
}

import VsfIconBase from "../VsfIconBase/VsfIconBase.vue";
const DEFAULT_VALUES = {
  size: "base",
};

export default {
  name: "vsf-icon-instagram",
  components: { "vsf-icon-base": VsfIconBase },
  props: ["className", "size", "ariaLabel"],

  data: () => ({ DEFAULT_VALUES }),

  computed: {
    useContent() {
      return "<path d='M12.002 6.871a5.118 5.118 0 0 0-5.126 5.127 5.118 5.118 0 0 0 5.126 5.126 5.118 5.118 0 0 0 5.127-5.126 5.118 5.118 0 0 0-5.127-5.127Zm0 8.46a3.339 3.339 0 0 1-3.333-3.333 3.336 3.336 0 0 1 3.333-3.333 3.336 3.336 0 0 1 3.333 3.333 3.34 3.34 0 0 1-3.333 3.333Zm6.532-8.67c0 .665-.535 1.196-1.195 1.196a1.196 1.196 0 1 1 1.196-1.196Zm3.396 1.214c-.076-1.602-.442-3.02-1.615-4.19-1.17-1.169-2.588-1.534-4.19-1.615-1.65-.093-6.6-.093-8.25 0-1.597.076-3.016.442-4.19 1.611C2.512 4.85 2.151 6.269 2.07 7.871c-.093 1.65-.093 6.599 0 8.25.076 1.601.442 3.02 1.615 4.19 1.174 1.168 2.588 1.534 4.19 1.614 1.65.094 6.6.094 8.25 0 1.602-.076 3.02-.442 4.19-1.615 1.168-1.169 1.534-2.588 1.615-4.19.093-1.65.093-6.594 0-8.245Zm-2.133 10.017a3.375 3.375 0 0 1-1.9 1.9c-1.317.523-4.44.402-5.895.402-1.454 0-4.582.116-5.894-.401a3.374 3.374 0 0 1-1.9-1.901c-.523-1.316-.402-4.44-.402-5.894 0-1.455-.116-4.582.401-5.894a3.374 3.374 0 0 1 1.901-1.901c1.316-.522 4.44-.402 5.894-.402 1.455 0 4.582-.116 5.894.402a3.374 3.374 0 0 1 1.901 1.9c.522 1.317.401 4.44.401 5.895 0 1.454.121 4.582-.401 5.894Z'/>";
    },
  },

  methods: {
    _classStringToObject(str) {
      const obj = {};
      if (typeof str !== "string") {
        return obj;
      }
      const classNames = str.trim().split(/\s+/);
      for (const name of classNames) {
        obj[name] = true;
      }
      return obj;
    },
  },
};
</script>