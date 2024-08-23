<template>
    <li>
        <h3>Tshewang</h3>
        <h4>30/hour</h4>
        <base-badge>
            this
        </base-badge>
        <div>
            <base-button mode="outline">Contact</base-button>
            <base-button>View Details</base-button>
        </div>
    </li>
</template>
<script>
    export default {
        props: ['']
    }
</script>
<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>