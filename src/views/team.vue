<template>
  <div class="team">
    <h1 class="subheading grey--text">Team</h1>

    <v-container class="my-5">
      <v-layout row wrap >
        <v-flex xs12 sm6 md4 lg3 v-for="team in teams" :key="team.name">
          <v-card flat class="text-xs-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <img :src="team.avatar" alt="">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{ team.name}}</div>
              <div class="grey--text">{{ team.role}}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="grey">
                <v-icon small left>mdi-message</v-icon>
                <span>MESSAGE</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>

    </v-container>
  </div>
</template>

<script>

export default {
  data(){
    return{
      teams:[
        {name: 'Excel', role: 'Web developer', avatar: '/avatar.jpg'},
        {name: 'Sam', role: 'Graphic designer', avatar: '/avatar.jpg'},
        {name: 'Terry', role: 'Web developer', avatar: '/avatar.jpg' },
        {name: 'Golden', role: 'Social media neverick', avatar: '/avatar.jpg'},
        {name: 'Romeo', role: 'Sales guru', avatar: '/avatar.jpg'}
      ]
    }
  }
}
</script>
