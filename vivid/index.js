const { createApp, ref } = Vue

createApp({
    setup() {
        const isOpen = ref(false)
        const isMobile = ref(false);
        const checkWindowSize = function() {
            isMobile.value = window.innerWidth <= 768;
            console.log("isMobile", isMobile.value);
        }
        const toggleMenu = function() {
            isOpen.value = !isOpen.value;
        }
        checkWindowSize();
        window.addEventListener('resize', checkWindowSize);
        return {
            isOpen,
            isMobile,
            toggleMenu
        }
    }
}).mount('#menu-container')