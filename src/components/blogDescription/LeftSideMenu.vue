<template>
    <div class="col-3 d-none d-lg-flex fixedSideRight">
        <div class="ps-5 mt-5 pe-5">
            <p class="fw-normal display-6">Recents posts</p>
            <nav class="nav flex-column dw-bold display-6">
                <a class="nav-link text-decoration-none link-listtext ps-1 fw-lighter display-7" href="">Webhook APis
                    are
                    Rest APIS perfect side kick!</a>
                <a class="nav-link text-decoration-none link-listtext ps-1 fw-lighter display-7" href="">The 4 use cases
                    for webhook api</a>
                <a class="nav-link text-decoration-none link-listtext ps-1 fw-lighter display-7" href="">Getting started
                    with webhookie</a>
                <a class="nav-link text-decoration-none link-listtext ps-1 fw-lighter display-7" href="">Visual
                    update</a>
            </nav>
        </div>
    </div>
</template>
<script>
export default {
    name: "LeftSideMenu",
    props: ["DataArray"],
}
</script>
<style scoped>
.fixedSideRight {
    position: fixed;
    top: 70px;
    left: 10%;
    max-width: 400px;
}
</style>