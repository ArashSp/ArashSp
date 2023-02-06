<template>
    <div v-for="item in DataArray.sections">
        <div :id="item.NavigationTag" class="mb-5 pb-4"></div>
        <p class="fw-bold display-9 my-5">{{ item.Title }}</p>


        <div v-for="items in item.parts">
            <p class="fw-lighter display-5 lh-base pb-3" v-if="items.type == 'paragraph'">
                {{ items.value }}
            </p>

            <img v-if="items.type == 'image'" :src="items.value" class="mt-3 pb-4" style="max-width: 100%" />

            <div class="BoxEventHub mb-3 py-4 px-5" v-if="items.type == 'quote'">
                <p class="fw-lighter display-5 lh-base">
                    “{{ items.value }}”
                </p>
            </div>
        </div>

        <div v-if="item.Child" :id="item.Child.NavigationTag">
            <p class="fw-light display-10 mt-1">
                {{ item.Child.Title }}
            </p>
            <div v-for="items in item.Child.parts">
                <p class="fw-lighter display-5 lh-base pb-3 py-3"
                    v-if="items.type == 'paragraph' || items.type == 'quote'">
                    {{ items.value }}
                </p>
                <div v-if="items.type == 'List'">
                    <ul v-for="listItem in items.value">
                        <li class="fw-lighter display-5 lh-base pb-3 ms-4">
                            {{ listItem }}
                        </li>
                    </ul>
                </div>
                <img v-if="items.type == 'image'" :src="items.value" class="mt-3 pb-4" style="max-width: 100%" />
            </div>

        </div>
    </div>

</template>
<script>
export default {
    name: "Sections",
    props: ["DataArray"],
}
</script>
<style>
p:empty {
    display: none;
  }
  
  ul:empty {
    display: none;
  }
  
  li:empty {
    display: none;
  }
  
  
.BoxEventHub {
    background: radial-gradient(62.82% 79.28% at 50.85% -12.39%,
            rgba(102, 163, 255, 0.2) 0%,
            rgba(46, 47, 83, 0.2) 100%);
    box-shadow: inset 5px 0px 0px #0061f1;
}
</style>