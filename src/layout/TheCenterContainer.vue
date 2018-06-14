<template>
	<div class="center-container">
		<slot/>
	</div>
</template>

<script>
/**@summary CenterContainer Component
 * Layout type component that renders should display 
 * main page
 */

export default {
	name: 'CenterContainer',
};
</script>

<style scoped>
.center-container {
	height: 100%;
}
</style>

