<template>
  <div><!-- mobile nav -->
                 <div class="header"> </div>
                 <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu">
                 <label for="openSidebarMenu" class="sidebarIconToggle">
                   <div class="spinner diagonal part-1"></div>
                   <div class="spinner horizontal"></div>
                   <div class="spinner diagonal part-2"></div>
                 </label>
                 <div id="sidebarMenu">
                   <ul class="sidebarMenuInner">
                     <li> <n-link to="/"><img src="../assets/images/bloctheorym-logo-blue-o.png" alt="BLOCTHEORYM"></n-link></li>
                     <li><n-link to="/">HOME</n-link></li>
                     <li><n-link to="about">ABOUT</n-link></li>
                     <li><n-link to="our-work">OUR WORK</n-link></li>
                     <li><n-link to="pricing" class="has-text-white">PRICING</n-link></li>
                     <li><n-link to="contact" class="has-text-white">CONTACT</n-link></li>
                     
                     <li class="hide"><n-link class="button is-small has-text-weight-bold is-black" to="pricing" style="background-color: #6063d4;">Learn More</n-link></li>
                   </ul>
                 </div> 
                <!-- ./end mobile nav -->
 
 

         <!-- .hero-head -->
       <div class="hero-head">
        <div class="columns is-mobile is-marginless heading has-text-weight-bold">
            <div class="column left">
                <figure class="navbar-item-logo image is-marginless">
                    <n-link to="/"><img src="../assets/images/bloctheorym-logo-red-b.png" alt="BLOCTHEORYM"></n-link>
                </figure>
            </div>
            <div class="column center desktop is-desktop-nav">
                <p class="navbar-item has-text-black"><n-link to="/" class="has-text-black">HOME</n-link> </p>
                <p class="navbar-item has-text-black"><n-link to="about" class="has-text-black">ABOUT</n-link> </p>
                <p class="navbar-item has-text-black"><n-link to="our-work" class="has-text-black">OUR WORK</n-link> </p>
                <p class="navbar-item has-text-black"><n-link to="pricing" class="has-text-black">PRICING</n-link> </p>
                <p class="navbar-item has-text-black hide">RESOURCES</p>
                <p class="navbar-item has-text-black hide">DEMO  </p>
            </div>
            <div class="column right hide"> 
                <p class="navbar-item has-text-black desktop"><n-link to="log-in" class="has-text-black hide">LOG IN</n-link>     </p>
                <p class="navbar-item has-text-black desktop"><n-link class="button is-small has-text-weight-bold is-black hide" to="pricing" style="background-color: #6063d4;">Learn More</n-link></p>  
                <figure class="navbar-item image has-text-white center hide">
                        <i class="fas fa-bars" style="width: 1rem; height: 1rem;"></i>
                </figure>
            </div>
        </div>
    </div>
    <!-- /.hero-head -->
        
    
            <!-- .hero-body -->
            
        
            <!-- /.hero -->
          	<!-- .section -->
		<section class="section">
                <div class="container">
                    <div class="columns">
                        <div class="column">
                            <article> 
                                <div class="media-content p-xl">
                                    <div class="content m-t-lg has-text-centered">
                                        <span class="has-text-weight-bold" style="color: #23d160;">OUR PORTFOLIO</span>
                                        <h1 class="title is-size-1 has-text-black has-text-weight-bold">REAL WORK FROM REAL CLIENTS</h1>
                                        <p class="is-size-5">
                                                Check out our client testimonials to hear what our clients have to say about our service.
                                        </p> 
                                    </div>
                                </div>
                            </article>
                        </div> 
                    </div>
                </div>
            </section>
            <!-- /.section --> 
 	<!-- .section -->
<section class="has-text-centered">
    <img src="../assets/images/folio1.jpg" alt="folio" />
</section>
        	<!-- .section -->
            <section class="section">
                    <div class="container">
                        <div class="columns">
                            <div class="column">
                                <article> 
                                    <div class="media-content p-xl">
                                        <div class="content m-t-lg has-text-centered">
                                            <span class="has-text-weight-bold" style="color: #23d160;">TRUSTED BY EXPERTS</span>
                                            <h1 class="title is-size-1 has-text-black has-text-weight-bold">WHAT CUSTOMERS ARE SAYING</h1>
                                            <p class="is-size-5">
                                                    Check out our client testimonials to hear what our clients have to say about our service.
                                            </p> 
                                        </div>
                                    </div>
                                </article>
                            </div> 
                        </div>
                    </div>
                </section>
                <!-- /.section --> 
      
       
        <section class="section has-background-light">
                <div class="single-spaced">
                        <h1 class="subtitle is-2 center has-text-black has-text-weight-bold">TRY BLOCTHEORYM</h1>
                        <br />
                        <h1 class="subtitle is-2 center has-text-black">100% &nbsp;<strong class="has-text-info"> satisfaction guaranteed</strong></h1> 
                        <br />
                        <n-link class="button is-large has-text-weight-bold is-black center" style="max-width: 300px; margin: 0 auto;" to="pricing">GET STARTED</n-link>
                </div>
                <!-- logos -->
                
                <!-- ./logos -->
        </section>
   <Footer />
</div>
</template>
<script>
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Footer
  }
};
</script>