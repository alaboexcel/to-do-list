<template>
<nav>

<v-snackbar v-model="snackbar" :timeout="4000" top color="primary">
    <span>Awesome! you added a new project</span>
    <v-btn text color="white" @click="snackbar = false">close</v-btn>
</v-snackbar>

    <v-app-bar app >
        
 <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>        <v-toolbar-title class="text-uppercase grey--text">
            <span class="font-weight-light">Todo</span>
            <span>Ninja</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>

<div class="text-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn
          color="primary"
          dark
          v-on="on"
        >
          <v-icon left>mdi-keyboard_arrow_down</v-icon>
                <span>Menu</span>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="link in links"
          :key="link.title"
          router :to="link.route"
        >
          <v-list-item-title>{{ link.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>

        <v-btn text color="grey">
            <span>Sign Out</span>
            <v-icon right>mdi-exit-to-app</v-icon>
        </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app class="primary">
        <v-layout column align-center>
            <v-flex class="mt-5">
                <v-avatar size="100">
                    <img src="/avatar.jpg" alt="">
                </v-avatar>
                <p class="white--text subheading mt-1">
                    Excellent
                </p>
            </v-flex>
            <v-flex class="mt-4 mb-3">
                <popup @projectAdded="snackbar = true" />
            </v-flex>
        </v-layout>
        <v-list>
            <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                <v-list-item-action>
                    <v-icon class="white--text">{{link.icon}}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title class="white--text">{{link.title}}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
    
</nav>
</template>

<script>
import popup from './popup'
export default {
    components:{popup},
    data(){
        return{
            drawer: false,
            links:[
                { title: 'Dashboard', icon: 'mdi-view-dashboard', route: '/'},
                { title: 'My Projects', icon: 'mdi-folder', route: '/projects' },
                { title: 'Team', icon: 'mdi-account', route: '/team' },
            ],
            snackbar: false
            
        }
    }
}
</script>