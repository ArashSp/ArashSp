<template>
  <div class="bg-dark text-white">
    <nav class="navbar navbar-expand-lg navbar-dark bg-Navbar1 NavigationBar">
      <div class="container">

        <Nuxt-link class="navbar-brand ms-5 ps-5" to="/">
          <img src="../assets/images/Logo.svg" style=""
        /></Nuxt-link>
        
        <div>
          <form>
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search..."
              aria-label="Search"
            />
            <button class="btn btn-btnsearch text-white" type="submit">
              Search
            </button>
          </form>
        </div>

        <button
          class="btn btn-primary btn-sm ms-3 display-8 fw-bold"
          type="button"
        >
          GET STARTED
        </button>

      </div>
    </nav>
  </div>
</template>
<style scoped>
.NavigationBar {
  background: linear-gradient(104.08deg, #1b2433 39.98%, #2f4970 96.11%);
}
</style>
