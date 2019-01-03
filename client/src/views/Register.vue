<template>
	<div class="register">
		<div class="uk-container">

			<!-- Header -->
			<h1>Register Page</h1>

			<!-- Form -->
			<div class="uk-width-large uk-margin uk-margin-auto">
				<div class="uk-form-stacked uk-margin-large">
						
						<!-- Email -->
						<div class="uk-margin">
								<label class="uk-form-label" for="email">Email</label>
								<div class="uk-form-controls">
										<input class="uk-input" 
											id="email" 
											name="text" 
											type="text" 
											placeholder="Email"
											v-model="email">
								</div>
						</div>

						<!-- Password -->
						<div class="uk-margin">
								<label class="uk-form-label" for="password">Password</label>
								<div class="uk-form-controls">
										<input class="uk-input" 
										id="password" 
										name="password" 
										type="password" 
										placeholder="Password"
										v-model="password">
								</div>
						</div>

						<div class="uk-margin">
							<button class="uk-button uk-button-default" v-on:click="register">Register</button>
						</div>
			</div>
		</div> <!-- form -->

		</div>
	</div>
</template>

<script>
	//
	// Imports ------------------------------------------------------------------
	//

	import Auth from '@/services/AuthenticationService'


	//
	// Export -------------------------------------------------------------------
	//

	export default {
		name: "Register",

		//
		// Datas
		//

		data() {
			return {
				email: "axlmorenojoven@gmail.com",
				password: "123Mana!"
			}
		},


		//
		//
		//

		mounted() {
			console.log(Auth);
			
		},


		//
		// Custom methods
		//

		methods: {
			async register() {
				const response = await Auth.register({
					email: this.email,
					password: this.password
				});
				console.log(response.data);				
			}
		}
	}
</script>

