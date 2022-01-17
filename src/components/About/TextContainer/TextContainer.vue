<template>
    <div class="container">
        <div class="section">
          <h4>ABOUT ME</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Exercitationem assumenda quis voluptatibus quae? Quisquam, ea
            nesciunt! Repudiandae, minus! Dignissimos ipsum vero, velit
            provident voluptatem neque doloribus labore quo facilis totam? Lorem
            ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div class="section">
                      <h4>TUTORING</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Exercitationem assumenda quis voluptatibus quae? Quisquam, ea
            nesciunt! Repudiandae, minus! Dignissimos ipsum vero, velit
            provident voluptatem neque doloribus labore quo facilis totam? Lorem
            ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
    </div>
</template>

<script>
    export default {
        name:"TextContainer",
        
    }
</script>

<style scoped>

.container{
    background: #FFFFFF;
    border: 20px solid #657F56;
    border-radius:10px;
 
}

@font-face {
  font-family: montserrat;
  src: url(../../../assets/fonts/Montserrat-Medium.ttf);
}

h4 {
  font-family: montserrat, monospace;
  font-size: 1.5rem;
  letter-spacing: 0.2em;

    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 44px;

    /* identical to box height */
    text-align: center;
    letter-spacing: 0.15em;

    color: #CD7308;
}

p {
  font-family: montserrat;
  font-size: 1rem;
  letter-spacing: 0.1rem;
  font-family: Montserrat;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 29px;
display: flex;
align-items: center;
text-align: center;

color: #000000;
}

</style>