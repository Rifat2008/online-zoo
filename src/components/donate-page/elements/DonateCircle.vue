<template>
    <li class="donate-bar-line__circle" @click="$emit('action')">
        <img 
            v-if="isSelected"
            src="../../../assets/images/icons/roller-icon.png" 
            alt="roller-icon" 
            class="bar-line__selected"
        >
    </li>
</template>

<script>

export default {
        name: 'donate-circle',
        props: {
            isSelected: {
                type: Boolean,
                default() {
                    return false
                }
            }
        }
    }

</script>

<style lang="scss">
    
</style>