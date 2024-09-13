<template>
    <v-card class="bgg mx-auto" max-width="max" max-height="600px" >
      <v-list-item three-line>
        <v-list-item-content>
          <div class="text-overline mb-4">
            {{ currentCard.id }}
          </div>
          <v-list-item-title class="text-h1 mb-1">
            {{ currentCard.title }}
          </v-list-item-title>
          <v-list-item-subtitle>{{ currentCard.description }}</v-list-item-subtitle>
        </v-list-item-content>
  
        <v-list-item-avatar tile size="400" color="grey">
          <img :src="currentCard.image" alt="" />
        </v-list-item-avatar>
      </v-list-item>
  
      <v-card-actions>
        <v-btn outlined rounded text>
          {{ currentCard.buttonText }}
        </v-btn>
      </v-card-actions>
  
      <div style="display: flex; justify-content: flex-end">
        <v-btn outlined rounded text @click="prevCard">
          <v-icon>mdi-chevron-left</v-icon> Previous
        </v-btn>
  
        <v-btn outlined rounded text @click="nextCard">
          <v-icon>mdi-chevron-right</v-icon> Next
        </v-btn>
      </div>
  
      <!-- Dot Indicators -->
      <div class="dot-indicators" style="text-align: center; margin-top: 16px;">
        <v-btn
          v-for="(card, index) in cards"
          :key="index"
          icon
          @click="goToCard(index)"
          :class="{ active: currentCardIndex === index }"
        >
          <v-icon>{{ currentCardIndex === index ? 'mdi-checkbox-blank-circle' : 'mdi-circle-outline' }}</v-icon>
        </v-btn>
      </div>
    </v-card>
  </template>
  
<script>
export default {
  data () {
    return {
      currentCardIndex: 0,
      interval: null,
      cards: [
        {
          id: 1,
          title: 'SHOPPING',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          image: require('../assets/image1.png'),
          buttonText: 'Buy Now'
        },
        {
          id: 2,
          title: 'ELECTRONICS',
          description: 'Laborum debitis ea. Quia!',
          image: require('../assets/image2.png'),
          buttonText: 'View More'
        },
        {
          id: 3,
          title: 'FASHION',
          description: 'Explicabo rem cumque quam officia!',
          image: require('../assets/image3.png'),
          buttonText: 'Shop Now'
        }
      ]
    }
  },
  computed: {
    currentCard () {
      return this.cards[this.currentCardIndex]
    }
  },
  methods: {
    nextCard () {
      if (this.currentCardIndex < this.cards.length - 1) {
        this.currentCardIndex++
      } else {
        this.currentCardIndex = 0 
      }
    },
    prevCard () {
      if (this.currentCardIndex > 0) {
        this.currentCardIndex--
      } else {
        this.currentCardIndex = this.cards.length - 1 
      }
    },
    goToCard (index) {
      this.currentCardIndex = index
      this.resetAutoScroll()
    },
    autoScroll () {
      this.interval = setInterval(() => {
        this.nextCard()
      }, 3000)
    },
    resetAutoScroll () {
      clearInterval(this.interval)
      this.autoScroll() 
    }
  },
  mounted () {
    this.autoScroll()
  },
  beforeDestroy () {
    clearInterval(this.interval) 
  }
}
</script>
  
  <style scoped>
  .dot-indicators .v-btn {
    margin: 0 4px;
  }
  v-card{
    border: none;
  }
  /* .bgg{
    border: none;
    background-color: #FFDBB5;
  } */
  </style>
  
