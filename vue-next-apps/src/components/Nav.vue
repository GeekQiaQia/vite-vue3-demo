<template>
  <div>
    <nav>
      <a id="profile" href="/profile">My Profile</a>
      <a v-if="admin" id="admin" href="/admin">Admin</a>
      <ul v-show="shouldShowDropdown" id="user-dropdown">
        <!-- dropdown content -->
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String
  }
})
export default class Nav extends Vue {
      admin=false;
      shouldShowDropdown=false;
  
}
</script>