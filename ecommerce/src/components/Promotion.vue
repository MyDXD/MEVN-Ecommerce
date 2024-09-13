<template>
  <div>
    <v-row justify="center" class="mb-4">
      <v-col cols="12" class="text-center">
        <h2>Our Concept</h2>
      </v-col>
    </v-row>
    
    <v-row>
      <v-col cols="6">
        <div class="card-container">
          <v-card
            class="mx-auto card"
            max-width="500"
            outlined
          >
            <v-list-item three-line>
              <v-list-item-content>
                <div class="text-overline mb-4">
                  OVERLINE
                </div>
                <v-list-item-title class="text-h5 mb-1">
                  Headline 5
                </v-list-item-title>
                <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
              </v-list-item-content>
    
              <v-list-item-avatar>
                <!-- <img :src="../assets/image1.png" alt="" /> -->
              </v-list-item-avatar>
            </v-list-item>
    
            <v-card-actions>
              <v-btn
                outlined
                rounded
                text
              >
                Button
              </v-btn>
            </v-card-actions>
          </v-card>
    
          <v-card
            class="mx-auto card"
            max-width="500"
            outlined
          >
            <v-list-item three-line>
              <v-list-item-content>
                <div class="text-overline mb-4">
                  OVERLINE
                </div>
                <v-list-item-title class="text-h5 mb-1">
                  Headline 5
                </v-list-item-title>
                <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
              </v-list-item-content>
    
              <v-list-item-avatar></v-list-item-avatar>
            </v-list-item>
    
            <v-card-actions>
              <v-btn
                outlined
                rounded
                text
              >
                Button
              </v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </v-col>
      
      <v-col cols="6" class="d-flex align-center justify-end">
        <div class="text-right pr-16">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo provident architecto enim impedit soluta fugit neque reiciendis voluptatum quidem, laborum sint molestias culpa ab natus error? Exercitationem quidem fugit fugiat deserunt, a voluptatum, possimus, asperiores dignissimos corporis vel laborum voluptates? Itaque quod nisi, error voluptatum odit a possimus. Iure obcaecati dolor ipsa reiciendis, voluptatem odit sed labore autem praesentium aut.</p>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.card-container {
  padding-bottom: 12px;
}
</style>
