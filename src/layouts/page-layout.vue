<template>
    <div>
        <base-layout>
            <div>
                top
                <slot></slot>
                bottom
            </div>
        </base-layout>
    </div>
</template>

<script>
import BaseLayout from './base-layout.vue';
export default {
    components: {
        BaseLayout
    }
}
</script>
