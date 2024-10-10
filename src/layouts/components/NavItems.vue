<script setup>
import VerticalNavSectionTitle from '@/@layouts/components/VerticalNavSectionTitle.vue';
import VerticalNavGroup from '@layouts/components/VerticalNavGroup.vue';
import VerticalNavLink from '@layouts/components/VerticalNavLink.vue';
</script>

<template>
  <!-- 👉 Dashboards -->
  <VerticalNavGroup
    :item="{
      title: 'Programa',
      badgeClass: 'bg-error',
      icon: 'ri-home-smile-line',
     
    }"
  >
    
    <VerticalNavLink
      :item="{
        title: 'Crear Programa',
        badgeClass: 'bg-light-primary text-primary',
        to: 'programa',
      }"
    />
   
  </VerticalNavGroup>

  <VerticalNavGroup
  :item="{
    title: 'Competencia',
    badgeClass: 'bg-error',
    icon: 'ri-home-smile-line',
   
  }"
>

<VerticalNavLink
      :item="{
        title: 'Crear Competencias',
        badgeClass: 'bg-light-primary text-primary',
        to: 'competencia',
      }"
    />
</VerticalNavGroup>

<VerticalNavGroup
  :item="{
    title: 'Asociacion',
    badgeClass: 'bg-error',
    icon: 'ri-home-smile-line',
   
  }"
>

<VerticalNavLink
      :item="{
        title: 'Crear asocacion',
        badgeClass: 'bg-light-primary text-primary',
        to: 'programacompetencia',
      }"
    />
</VerticalNavGroup>


  <!-- 👉 Front Pages -->
  <VerticalNavGroup
    :item="{
      title: 'Resultado Aprendizaje',
      icon: 'ri-file-copy-line',
       }"
  >
    <VerticalNavLink
      :item="{
        title: 'Res. Aprendizaje',
        to: 'resultado_aprendizaje',
       
      }"
    />
    
  </VerticalNavGroup>
  <VerticalNavGroup
  :item="{
    title: 'Usuarios',
    badgeClass: 'bg-error',
    icon: 'ri-home-smile-line',
  }"
>
  <VerticalNavLink
    v-if="userRole === 'admin'"
    :item="{
      title: 'Register',
      icon: 'ri-user-add-line',
      to: 'register',
    }"
  />
  <VerticalNavLink
    v-if="userRole === 'admin'"
    :item="{
      title: 'Asignar Programa',
      icon: 'ri-user-add-line',
      to: 'asignar-programa',
    }"
  />
</VerticalNavGroup>

  <!-- 👉 Apps & Pages -->
  <VerticalNavSectionTitle
    :item="{
      heading: 'Apps & Pages',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'Email',
      icon: 'ri-mail-line',
      href: 'https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/demo-1/apps/email',
      target: '_blank',
      badgeContent: 'Pro',
      badgeClass: 'bg-light-primary text-primary',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'Chat',
      icon: 'ri-wechat-line',
      href: 'https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/demo-1/apps/chat',
      target: '_blank',
      badgeContent: 'Pro',
      badgeClass: 'bg-light-primary text-primary',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'Calendar',
      icon: 'ri-calendar-line',
      href: 'https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/demo-1/apps/calendar',
      target: '_blank',
      badgeContent: 'Pro',
      badgeClass: 'bg-light-primary text-primary',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'Kanban',
      icon: 'ri-drag-drop-line',
      href: 'https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/demo-1/apps/kanban',
      target: '_blank',
      badgeContent: 'Pro',
      badgeClass: 'bg-light-primary text-primary',
    }"
  />

  <VerticalNavLink
    :item="{
      title: 'Account Settings',
      icon: 'ri-user-settings-line',
      to: '/account-settings',
    }"
  />

  
  <VerticalNavLink
    :item="{
      title: 'Error',
      icon: 'ri-information-line',
      to: '/no-existence',
    }"
  />

  <!-- 👉 User Interface -->
  <VerticalNavSectionTitle
    :item="{
      heading: 'User Interface',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'Typography',
      icon: 'ri-text',
      to: '/typography',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'Icons',
      icon: 'ri-remixicon-line',
      to: '/icons',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'Cards',
      icon: 'ri-bar-chart-box-line',
      to: '/cards',
    }"
  />

  <!-- 👉 Forms & Tables -->
  <VerticalNavSectionTitle
    :item="{
      heading: 'Forms & Tables',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'Form Layouts',
      icon: 'ri-layout-4-line',
      to: '/form-layouts',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'Form Validation',
      icon: 'ri-checkbox-multiple-line',
      href: 'https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/demo-1/forms/form-validation',
      target: '_blank',
      badgeContent: 'Pro',
      badgeClass: 'bg-light-primary text-primary',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'Form Wizard',
      icon: 'ri-git-commit-line',
      href: 'https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/demo-1/forms/form-wizard-numbered',
      target: '_blank',
      badgeContent: 'Pro',
      badgeClass: 'bg-light-primary text-primary',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'Tables',
      icon: 'ri-table-alt-line',
      to: '/tables',
    }"
  />

  <!-- 👉 Others -->
  <VerticalNavSectionTitle
    :item="{
      heading: 'Others',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'Access Control',
      icon: 'ri-shield-line',
      href: 'https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/demo-1/access-control',
      target: '_blank',
      badgeContent: 'Pro',
      badgeClass: 'bg-light-primary text-primary',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'Documentation',
      icon: 'ri-article-line',
      href: 'https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/documentation/',
      target: '_blank',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'Raise Support',
      href: 'https://github.com/themeselection/materio-vuetify-vuejs-admin-template-free/issues',
      icon: 'ri-lifebuoy-line',
      target: '_blank',
    }"
  />
</template>
<script>
export default {
  computed: {
    userRole() {
      return this.$store.state.user.rol // Obtener el rol desde el store
    },
  },
}
</script>
