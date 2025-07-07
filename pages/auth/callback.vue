<template>
    <div class="p-4"> Signing you in....</div>
</template>
<script>
export default {
    async mounted() {
        try {
            await this.$auth.fetchuser()
            this.$router.replace('/')
        } catch (error) {
            console.error('Login Failed:',error);
            this.$router.push('auth/signin')
        }
    }
}
</script>