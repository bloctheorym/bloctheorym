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
                     <li><n-link to="about" target="_blank">ABOUT</n-link></li>
                     <li><n-link to="our-work" target="_blank">OUR WORK</n-link></li>
                     <li><n-link to="pricing" class="has-text-white">PRICING</n-link></li>
                     <li><n-link to="contact" class="has-text-white">CONTACT</n-link></li>
                     
                     <li><n-link class="button is-small has-text-weight-bold is-black hide" to="pricing" style="background-color: #6063d4;">Learn More</n-link></li>
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
		<section class="section pagewidth">
                <div class="container is-fluid">
                    <div class="columns p-t-xl">
                            <div class="column p-t-lg">
                                    <article> 
                                        <div class="media-content">  
                                            <div class="content p-r-lg">
                                                <img src="../assets/images/about-page.png" alt="about us">
                                            </div>
                                        </div>
                                    </article>
                                </div> 
                        <div class="column">
                            <article> 
                                <div class="media-content">
                                    <div class="content p-t-lg">
                                        <h1 class="title is-size-3 p-t-lg"><span style="color: #6063d4;">About</span> BLOCTHEORYM</h1>
                                        <p class="is-size-5 has-text-black" style="line-height: 1.6rem;">
                                                BLOCTHEORYM is a top design and development platform that provides high-quality development work and enterprise level blockchain integration for businesses. Founded in 2018 BLOCTHEORYM was born from the idea that everybody needs access to forward thinking, seamless, reliable and professional web and blockchain consulting on a consistent basis.
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
                    
                   <!-- .logos list -->
            <section class="section has-background-light cologos">
      <section class="section"> 
            <div class="container">
                    <h1 class="subtitle is-3 center">Driving growth for some of the world’s leading brands.</h1> 
                <div class="columns"> 
                        <div class="column">
                                <article class="media"> 
                                    <div class="media-content">
                                        <div class="content center-column">
                                                <img src="../assets/images/hyperledger-logo.png" alt="hyperledger">
                                        </div>
                                    </div>
                                </article>
                            </div>

                    <div class="column">
                        <article class="media"> 
                            <div class="media-content">
                                <div class="content center-column">
                                        <img src="../assets/images/blokt-logo.png" alt="blokt" style="margin-top: 8px;">
                                </div>
                            </div>
                        </article>
                    </div>
                    <div class="column">
                            <article class="media"> 
                                    <div class="media-content">
                                            <div class="content center-column">
                                                    <img src="../assets/images/Amazon logo.PNG" alt="amazon">
                                    </div>
                                </div>
                            </article>
                        </div>
                    <div class="column">
                            <article class="media"> 
                                    <div class="media-content">
                                            <div class="content center-column">
                                                    <img src="../assets/images/coinbase-a673b0735e63d6ea6513e464a83c41165fca9b99b2216b5de70e5187356dd47d.png" style="margin-top: -6px;">
                                    </div>
                                </div>
                            </article>
                        </div>
                    <div class="column">
                        <article class="media"> 
                                <div class="media-content">
                                        <div class="content center-column">
                                                <img src="../assets/images/icon-logo.png" alt="logos">
                                </div>
                            </div>
                        </article>
                    </div>
                    <div class="column">
                            <article class="media"> 
                                    <div class="media-content">
                                            <div class="content center-column">
                                                    <img src="../assets/images/bloq-logo.png" alt="bloq">
                                    </div>
                                </div>
                            </article>
                        </div>
                    <div class="column">
                        <article class="media"> 
                                <div class="media-content">
                                        <div class="content center-column">
                                                <img src="../assets/images/vechain-logo.png" alt="VeChain">
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
        <!-- /. logos section -->
            </section>
 <!-- /.section -->
 <section class="center has-text-centered m-t-xxl">
        <img src="../assets/images/nem-enter.png" alt="nem" />
 </section>
            <section class="section m-t-xxl"> 
                    <div class="container"> 
                        <div class="columns p-t-xl">
                                <div class="column">
                                        <article> 
                                            <div class="media-content">
                                                <div class="content p-t-lg">
                                                    <h1 class="title is-size-3 p-t-lg">Our <span style="color: #3d27c5;">Purpose</span></h1>
                                                    <p class="is-size-5 has-text-black" style="line-height: 1.6rem;">
                                                            Our purpose goes far beyond Web Design, Development, &amp; Blockchain Tech. We wake up every day to change lives through our consulting services, support and products. Every BLOCTHEORYM experience is guided by our core values.
                                                    </p>  
                                                </div>
                                            </div>
                                        </article>
                                    </div>         
                                <div class="column p-t-lg">
                                        <article> 
                                            <div class="media-content">  
                                                <div class="content">
                                                    <img src="../assets/images/about-page2.png" alt="about us">
                                                </div>
                                            </div>
                                        </article>
                                    </div>  
                        </div>
                    </div>
                </section>
                <!-- /.section -->


                <!-- .section - service - support - scalable -->
		<section class="section bg-1">
                 
            <!-- /.section -->

                <br /><br />
              <!-- .section - security - system - storage -->
                <div class="container">
                    <div class="columns">
                            <div class="column">
                                    <article class="media has-background-white"> 
                                        <div class="media-content p-lg">
                                            <div class="content center-column">
                                                <img src="../assets/images/a1.png" alt="service" style="max-width: 160px; margin: 0 auto;"> 
                                                <h1 class="title is-size-4">Friendly</h1>
                                                <p class="is-size-5 center-column">
                                                        We treat each other and our clients with warmth and authenticity.
                                                        <br /><br />
                                                        <n-link to="pricing">Learn more</n-link>
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                        <div class="column">
                            <article class="media has-background-white"> 
                                <div class="media-content p-lg">
                                    <div class="content center-column">
                                        <img src="../assets/images/a2.png" alt="service" style="max-width: 160px; margin: 0 auto;"> 
                                        <h1 class="title is-size-4">Smart Working</h1>
                                        <p class="is-size-5 center-column">
                                                We are self-starters and seek out the best solution for every circumstance.
                                                <br /><br />
                                                <n-link to="pricing">Learn more</n-link>
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div class="column">
                            <article class="media has-background-white"> 
                                    <div class="media-content p-lg">
                                            <div class="content center-column">
                                                <img src="../assets/images/a3.png" alt="service" style="max-width: 160px; margin: 0 auto;"> 
                                        <h1 class="title is-size-4">Service</h1>
                                        <p class="is-size-5 center-column">
                                                We give back to communities that we are connected and identify with.
                                                <br /><br />
                                                <n-link to="pricing">Learn more</n-link>
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div class="column">
                            <article class="media has-background-white"> 
                                    <div class="media-content p-lg">
                                            <div class="content center-column">
                                                <img src="../assets/images/a4.png" alt="service" style="max-width: 160px; margin: 0 auto;">  
                                        <h1 class="title is-size-4">Truth</h1>
                                        <p class="is-size-5 center-column">
                                                Our actions, conversations and decisions are guided by reality and doing what’s right 
                                                <br /><br />
                                                <n-link to="pricing">Learn more</n-link>
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section> 
 	<!-- .section --> 
        <section class="section has-background-light">
                <div class="single-spaced pagewidth">
                        <h1 class="subtitle is-2 center has-text-black">OUR <span style="color: #3d27c5;"> &nbsp;VISION</span></h1>
                        <br />
                        <h1 class="title is-size-5 center" style="
                        max-width: 850px; margin: 0 auto;">How will a Blockchain Tech company change the lives of millions around the world? On the surface it may seem like woo woo, but we are truly committed to achieving our vision through a three-pronged strategy:
                        </h1> 
                </div> 
        </section>
      <!-- ./section -->
      <section class="section bg-2"> 
                 
      <!-- /.section --> 
          <br /><br />
        <!-- .section our vision 3 -->
          <div class="container">
              <div class="columns">
                      <div class="column">
                              <article class="media"> 
                                  <div class="media-content p-lg">
                                      <div class="content center-column has-text-centered">
                                          <h1 class="title is-size-1 has-text-white">1</h1>
                                          <div class="divline">&nbsp;</div>
                                          <h1 class="title is-size-4 has-text-white">DELIVER</h1> 
                                          <p class="is-size-5 center-column has-text-white">
                                                World-class creative services, products and careers. 
                                          </p>
                                      </div>
                                  </div>
                              </article>
                          </div>
                  <div class="column">
                      <article class="media"> 
                          <div class="media-content p-lg">
                              <div class="content center-column has-text-centered has-text-white"> 
                                  <h1 class="title is-size-1 has-text-white">2</h1>
                                  <div class="divline">&nbsp;</div> 
                                  <h1 class="title is-size-4 has-text-white">CREATE</h1>
                                  <p class="is-size-5 center-column has-text-white">
                                        Original content to inspire, entertain, educate and inform. 
                                  </p>
                              </div>
                          </div>
                      </article>
                  </div>
                  <div class="column">
                      <article class="media"> 
                              <div class="media-content p-lg">
                                      <div class="content center-column has-text-centered">
                                      <h1 class="title is-size-1 has-text-white">3</h1>
                                      <div class="divline">&nbsp;</div> 
                                  <h1 class="title is-size-4 has-text-white">ADVANCE</h1>
                                  <p class="is-size-5 center-column has-text-white">
                                        Teach &amp; Integrate Blockchain Tech around the globe. 
                                  </p>
                              </div>
                          </div>
                      </article>
                  </div> 
              </div>
          </div>
      </section> 
<!-- .section --> 
<section class="section has-background-light">
        <div class="single-spaced">
                <h1 class="subtitle is-2 center has-text-black">TRY BLOCTHEORYM</h1>
                <br />
                <h1 class="subtitle is-2 center has-text-black">100% &nbsp;<strong class="has-text-info"> satisfaction guaranteed</strong></h1> 
                <br />
                <n-link class="button is-large has-text-weight-bold is-black center" style="max-width: 300px; margin: 0 auto;" to="pricing">GET STARTED</n-link>
        </div> 
</section>
</section>
<!-- ./section -->
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