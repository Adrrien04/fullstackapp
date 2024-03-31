<template>
  <div class="app">
    <header>
      <h1>About SleepHere</h1>
      <p>Your Home Away from Home</p>
    </header>
    <main>
      <section class="about-section">
        <h2>Our Story</h2>
        <p>SleepHere was founded in 2010 with a simple mission: to connect travelers with unique, comfortable, and
          affordable accommodations around the world. Whether you're looking for a cozy mountain cabin, a seaside villa,
          or a trendy city apartment, we've got you covered.</p>
      </section>
      <section class="about-section">
        <h2>Our Team</h2>
        <p>Get to know the passionate team behind SleepHere:</p>
        <ul>
          <li>Adrrien CHANDRAKUMAR - CO-Founder</li>
          <li>Oumou CAMARA - CO-Founder</li>

        </ul>
      </section>
      <section class="about-section">
        <h2>Our Values</h2>
        <p>At SleepHere, we believe in:</p>
        <ul>
          <li>Creating memorable experiences for our hosts</li>
          <li>Supporting local communities</li>
          <li>Ensuring safety for all</li>
          <li>Continuous innovation and improvement</li>
        </ul>
      </section>
    </main>
    <footer>
      <p>© 2023 SleepHere. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
}
</script>



<style scoped>
.app {
  display: block;
  flex-direction: column;
  height: 100vh;
  padding-top: 2%;
  
}
body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
}

header {
  padding: 20px;
  text-align: center;
  background: #f4f4f4;
  color: #333;
  border-bottom: #bbb 1px solid;
}

header h1 {
  margin: 0;
  padding: 0;
}

main {
  padding: 20px;
}

.about-section {
  margin-bottom: 20px;
}

.about-section h2 {
  font-size: 1.5em;
  margin-bottom: 10px;
}

.about-section p,
.about-section ul {
  text-align: justify;
}

.about-section ul {
  padding-left: 20px;
}

footer {
  text-align: center;
  padding: 20px;
  background: #f4f4f4;
  border-top: #bbb 1px solid;
  color: #333;
}
</style>
