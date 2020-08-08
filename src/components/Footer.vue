<template>
    
    <footer class="page-footer font-small black">

    <!-- Copyright -->
    <div class="footer-copyright text-center py-3">© {{date}} Copyright:
        <a> Miss You</a>
    </div>
    <!-- Copyright -->

    </footer>
</template>

<script>
export default {
    name : "Footer",
    data(){
        return{
            date : new Date().getFullYear(),
        }
    }
}
</script>