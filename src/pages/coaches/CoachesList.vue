<template>
    <section>
        filter
    </section>
    <section>
        <base-card>
            <div class="controls"> 
                <base-button mode="outline">Refresh</base-button>
                <base-button link to="/register">Register as Coach</base-button>
            </div>
            <ul>
                <coach-item>
                    
                </coach-item>
            </ul>
        </base-card>
    </section>
</template>
<script>
    import CoachItem from '@/layouts/coaches/CoachItem.vue';
    export default {
        data(){
            
        },
        components: {
            CoachItem,
        }
    }
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.controls {
  display: flex;
  justify-content: space-between;
}
</style>