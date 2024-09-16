<template>
 <div>
  <v-row justify="center" class="mb-2">
      <v-col cols="12" class="text-center">
        <h2>Our Concept</h2>
      </v-col>
    </v-row>
  <div class="card-container">
    <v-card
        class="mx-auto card"
        max-width="450"
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
    
          <v-list-item-avatar
            tile
            size="80"
            color="grey"
          ></v-list-item-avatar>
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
        max-width="450"
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
    
          <v-list-item-avatar
            tile
            size="80"
            color="grey"
          ></v-list-item-avatar>
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
        max-width="450"
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
    
          <v-list-item-avatar
            tile
            size="80"
            color="grey"
          ></v-list-item-avatar>
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
 </div>
  </template>
  
  <style scoped>
  h2{
    text-align: center;
  }
  .card-container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
    gap: 16px;
    padding: 20px;
  }
  
  .card {
    position: relative;
  }
  
  .card:nth-child(2) {
    transform: translateY(20px);
  }
  
  .card:nth-child(3) {
    transform: translateY(40px);
  }
  </style>
  
