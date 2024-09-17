<template>
  <v-container>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        label="Title"
        v-model="formData.title"
        :rules="[rules.required]"
        required
      ></v-text-field>

      <!-- Description Input -->
      <v-textarea
        label="Description"
        v-model="formData.description"
        :rules="[rules.required]"
        required
      ></v-textarea>

      <!-- Quantity Input -->
      <v-text-field
        label="Quantity"
        v-model="formData.quantity"
        :rules="[rules.required, rules.number]"
        required
        type="number"
      ></v-text-field>

      <!-- Price Input -->
      <v-text-field
        label="Price"
        v-model="formData.price"
        :rules="[rules.required, rules.number]"
        required
        type="number"
      ></v-text-field>

      <!-- File Upload Input -->
      <v-file-input
        label="Upload Image"
        v-model="formData.image"
        :rules="[rules.required]"
        accept="image/*"
        required
        @change="handleFileChange"
      ></v-file-input>

      <!-- Image Preview -->
      <v-img
        v-if="formData.imageBase64"
        :src="formData.imageBase64"
        alt="Preview Image"
        max-width="300"
        max-height="300"
        class="mt-3"
      ></v-img>

      <!-- Submit Button -->
      <v-btn :disabled="!valid" color="primary" @click="submitForm">
        Submit
      </v-btn>
    </v-form>
  </v-container>
</template>
<script>
/* eslint-disable */

export default {
  data() {
    return {
      // items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      valid: false,
      formData: {
        title: '',
        description: '',
        quantity: null,
        price: null,
        image: null,
        imageBase64: '', 
      },
      rules: {
        required: (value) => !! value || 'Required.',
        number: (value) => !isNaN(value) || 'Must be a number.',
      },
    };
  },
  methods: {
    handleFileChange(file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.formData.imageBase64 = reader.result;
      };
      reader.onerror = (error) => {
        console.log('Error: ', error);
      };
    },
    submitForm() {
      if (this.$refs.form.validate()) {
        const token = localStorage.getItem('token'); 

        const payload = {
          title: this.formData.title,
          description: this.formData.description,
          quantity: this.formData.quantity,
          price: this.formData.price,
          image: this.formData.imageBase64,
        };
        console.log("payload",payload)

        this.axios
          .post('http://localhost:5000/products', payload, {
            headers: {
              Authorization: `Bearer ${token}`, 
            },
          })
          .then((response) => {
            console.log('Success:', response.data);

          })
          .catch((error) => {
            console.error('Error:', error);
          });
      }
    },
  },
};
</script>

<style scoped>

</style>