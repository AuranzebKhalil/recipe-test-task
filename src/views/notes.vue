<template>
  <div class="text-center">
    <v-btn
    class="Notes-btn "
      
      @click="dialog = true"
    >
    
     <img src="../assets/notes.png" alt="">Notes
    </v-btn>

    <v-dialog
      v-model="dialog"
      width="auto"
    >
      <v-card>
        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>

  <div class="text-center">
    <v-btn
    class="Kitchen-btn "
      
      @click="dialog = true"
    >
    
    <img src="../assets/cutlery.png" alt="">Kitchen
    </v-btn>

    <v-dialog
      v-model="dialog"
      width="auto"
    >
      <v-card>
        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>





   <div class="text-center">
    <v-btn
 class="Process-btn"
      
      @click="dialog = true"
    >
    
    <img src="../assets/process.png" alt="">In Process
    </v-btn>

    <v-dialog
      v-model="dialog"
      width="auto"
    >
      <v-card>
        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>









<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>

