<template>
  <div>
    <!-- Progress Indicator -->
    <div class="scroll-indicator">
      <div class="progress"></div>
    </div>

    <!-- Card Content -->
    <v-card class="bgg mx-auto" max-width="max" max-height="600px" flat tile>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="text-overline mb-4">
            {{ currentCard.id }}
          </div>
          <v-list-item-title class="text-h1 mb-1">
            {{ currentCard.title }}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ currentCard.description }}
          </v-list-item-subtitle>
        </v-list-item-content>

        <v-img cover :src="currentCard.image" :width="300" :height="400"></v-img>
      </v-list-item>

      <v-card-actions>
        <v-btn outlined rounded text>
          {{ currentCard.buttonText }}
        </v-btn>
      </v-card-actions>

      <!-- Card Navigation -->
      <v-card-actions style="display: flex; justify-content: flex-end">
        <v-btn outlined rounded text @click="prevCard">
          <v-icon>mdi-chevron-left</v-icon> Previous
        </v-btn>
        <v-btn outlined rounded text @click="nextCard">
          <v-icon>mdi-chevron-right</v-icon> Next
        </v-btn>
      </v-card-actions>

      <!-- Dot Indicators -->
      <div class="dot-indicators" style="text-align: center; margin-top: 16px">
        <v-btn
          v-for="(card, index) in cards"
          :key="index"
          icon
          @click="goToCard(index)"
          :class="{ active: currentCardIndex === index }"
        >
          <v-icon>{{
            currentCardIndex === index
              ? "mdi-checkbox-blank-circle"
              : "mdi-circle-outline"
          }}</v-icon>
        </v-btn>
      </div>
    </v-card>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      currentCardIndex: 0,
      interval: null,
      cards: [
        {
          id: 1,
          title: "SHOPPING",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          image: require("../assets/image1.png"),
          buttonText: "Buy Now",
        },
        {
          id: 2,
          title: "ELECTRONICS",
          description: "Laborum debitis ea. Quia!",
          image: require("../assets/image2.png"),
          buttonText: "View More",
        },
        {
          id: 3,
          title: "FASHION",
          description: "Explicabo rem cumque quam officia!",
          image: require("../assets/image3.png"),
          buttonText: "Shop Now",
        },
      ],
    };
  },
  computed: {
    currentCard() {
      return this.cards[this.currentCardIndex];
    },
  },
  mounted() {
    this.autoScroll();
    window.addEventListener("scroll", this.scrollProgress);
  },
  beforeDestroy() {
    clearInterval(this.interval);
    window.removeEventListener("scroll", this.scrollProgress);
  },
  methods: {
    scrollProgress() {
      const progressEL = this.$el.querySelector(".progress");
      const pageHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollTop = document.documentElement.scrollTop;
      const scrollPercentage = (scrollTop / pageHeight) * 100;
      progressEL.style.width = scrollPercentage + "%";
    },
    nextCard() {
      this.currentCardIndex =
        (this.currentCardIndex + 1) % this.cards.length;
    },
    prevCard() {
      this.currentCardIndex =
        (this.currentCardIndex - 1 + this.cards.length) %
        this.cards.length;
    },
    goToCard(index) {
      this.currentCardIndex = index;
      this.resetAutoScroll();
    },
    autoScroll() {
      this.interval = setInterval(() => {
        this.nextCard();
      }, 3000);
    },
    resetAutoScroll() {
      clearInterval(this.interval);
      this.autoScroll();
    },
  },
};
</script>

<style scoped>
.bgg {
  background-color: #ffdbb5;
  border: none;
}
.dot-indicators .v-btn {
  margin: 0 4px;
}
.scroll-indicator {
  width: 100%;
  height: 4px;
  background: #eee;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  visibility: visible;
}
.progress {
  width: 0%;
  height: 4px;
  background: orange;
  transition: width 0.1s ease-out;
}
</style>
