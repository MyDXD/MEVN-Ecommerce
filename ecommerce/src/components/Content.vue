<template>
  <div>
    <v-slide-group
      v-model="currentCardIndex"
      show-arrows
      class="mx-4"
    >
      <v-slide-item
        v-for="(card, index) in cards"
        :key="index"
      >
        <v-card
          class="mx-2"
          max-width="344"
        >
          <v-card-text>
            <div>{{ card.id }}</div>
            <img :src="card.image" alt="" />
            <div class="text--primary">
              {{ card.title }}
            </div>
            <div class="text--primary">
              {{ card.description }}
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn
              text
              color="teal accent-4"
              @click="revealCard(index)"
            >
              Learn More
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <v-card
              v-if="reveal === index"
              class="transition-fast-in-fast-out v-card--reveal"
              style="height: 100%;"
            >
              <v-card-text class="pb-0">
                <p class="text-h4 text--primary">
                  Origin
                </p>
                <p>late 16th century (as a noun denoting a place where alms were distributed): from medieval Latin eleemosynarius, from late Latin eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’ </p>
              </v-card-text>
              <v-card-actions class="pt-0">
                <v-btn
                  text
                  color="teal accent-4"
                  @click="reveal = null"
                >
                  Close
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-expand-transition>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentCardIndex: 0,
      reveal: null,
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
        },
        {
          id: 4,
          title: 'FASHION',
          description: 'Explicabo rem cumque quam officia!',
          image: require('../assets/image3.png'),
          buttonText: 'Shop Now'
        },
        {
          id: 5,
          title: 'FASHION',
          description: 'Explicabo rem cumque quam officia!',
          image: require('../assets/image3.png'),
          buttonText: 'Shop Now'
        },
        {
          id: 6,
          title: 'FASHION',
          description: 'Explicabo rem cumque quam officia!',
          image: require('../assets/image3.png'),
          buttonText: 'Shop Now'
        },
        {
          id: 7,
          title: 'FASHION',
          description: 'Explicabo rem cumque quam officia!',
          image: require('../assets/image3.png'),
          buttonText: 'Shop Now'
        },
        {
          id: 8,
          title: 'FASHION',
          description: 'Explicabo rem cumque quam officia!',
          image: require('../assets/image3.png'),
          buttonText: 'Shop Now'
        },
        {
          id: 9,
          title: 'FASHION',
          description: 'Explicabo rem cumque quam officia!',
          image: require('../assets/image3.png'),
          buttonText: 'Shop Now'
        },
        {
          id: 10,
          title: 'FASHION',
          description: 'Explicabo rem cumque quam officia!',
          image: require('../assets/image3.png'),
          buttonText: 'Shop Now'
        },
        {
          id: 11,
          title: 'FASHION',
          description: 'Explicabo rem cumque quam officia!',
          image: require('../assets/image3.png'),
          buttonText: 'Shop Now'
        },
        {
          id: 12,
          title: 'FASHION',
          description: 'Explicabo rem cumque quam officia!',
          image: require('../assets/image3.png'),
          buttonText: 'Shop Now'
        },
        {
          id: 13,
          title: 'FASHION',
          description: 'Explicabo rem cumque quam officia!',
          image: require('../assets/image3.png'),
          buttonText: 'Shop Now'
        },
        {
          id: 14,
          title: 'FASHION',
          description: 'Explicabo rem cumque quam officia!',
          image: require('../assets/image3.png'),
          buttonText: 'Shop Now'
        },
        {
          id: 15,
          title: 'FASHION',
          description: 'Explicabo rem cumque quam officia!',
          image: require('../assets/image3.png'),
          buttonText: 'Shop Now'
        },
        {
          id: 16,
          title: 'FASHION',
          description: 'Explicabo rem cumque quam officia!',
          image: require('../assets/image3.png'),
          buttonText: 'Shop Now'
        }
        // สามารถเพิ่มการ์ดเพิ่มเติมที่นี่
      ]
    }
  },
  methods: {
    revealCard (index) {
      this.reveal = index
    }
  }
}
</script>

<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>
