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
                     <li> <n-link to="/"><img src="../assets/images/bloctheorym-logo6.png"></n-link></li>
                     <li><n-link to="about">ABOUT</n-link></li>
                     <li><n-link to="our-work">OUR WORK</n-link></li>
                     <li><n-link to="pricing" class="has-text-white">PRICING</n-link></li>
                     <li><n-link to="contact" class="has-text-white">CONTACT</n-link></li>
                     
                     <li><n-link class="button is-small has-text-weight-bold is-black" to="pricing" style="background-color: #6063d4;">Learn More</n-link></li>
                   </ul>
                 </div>  
                <!-- ./end mobile nav -->
 
        <!-- .hero-head -->
        <div class="hero-head">
                <figure class="navbar-item-logo image is-marginless mobile-logo">
                        <n-link to="/"><img src="../assets/images/bloctheorym-logo-blk.png"></n-link> 
                    </figure>
            <div class="columns is-mobile is-marginless heading has-text-weight-bold">
                <div class="column left">
                    <figure class="navbar-item-logo image is-marginless desktop-logo">
                        <n-link to="/"><img src="../assets/images/bloctheorym-logo-blk.png"></n-link>
                    </figure>
                </div>
                <div class="column center desktop">
                    <p class="navbar-item has-text-black"><n-link to="about" class="has-text-black">ABOUT</n-link> </p>
                    <p class="navbar-item has-text-black"><n-link to="our-work" class="has-text-black">OUR WORK</n-link> </p>
                    <p class="navbar-item has-text-black"><n-link to="pricing" class="has-text-black">PRICING</n-link> </p>
                    <p class="navbar-item has-text-black hide">RESOURCES</p>
                    <p class="navbar-item has-text-black hide">DEMO  </p>
                </div>
                <div class="column right"> 
                    <p class="navbar-item has-text-black desktop"><n-link to="log-in" class="has-text-black">LOG IN</n-link>     </p>
                    <p class="navbar-item has-text-black desktop"><n-link class="button is-small has-text-weight-bold is-black" to="pricing" style="background-color: #6063d4;">Learn More</n-link></p>  
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
              <div class="column">
                    <article> 
                        <div class="media-content">
                            <div class="content has-text-centered m-t-lg" style="margin-bottom: -161px;">
                                <img src="../assets/images/pricing-img.png" alt="pricing">
                            </div>
                        </div>
                    </article>
                </div> 
              <section class="section has-background-light has-text-centered m-t-xl">
		<section class="section">
                <div class="container m-t-xl">
                        <h1 class="title is-size-3">Web Design & Development.<br />Enterprise blockchain tech integration. <br /><br />However you want it </h1>
                    <div class="columns">
                        <div class="column">
                            <article> 
                                <div class="media-content ">
                                    <div class="content m-t-lg has-text-centered"> 
                                            <n-link class="button is-large has-text-weight-bold is-success" to="contact">Contact Us for a Quote</n-link>
                                        <p class="is-size-5 m-t-xl">
                                                Need a custom solution? We’ll help you build your design dream team. Contact sales to get started.
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </div>
                        </div>
                                </div>
                    </section>
                </section> 
     
            <!-- /.section -->
            <section class="section has-background-light">
                    <div class="single-spaced">
                            <h1 class="subtitle is-3 center has-text-weight-bold">How does it work?</h1>
                            <br /> 
                    </div> 
                    <section class="section">
                            <div class="container">
                                <div class="columns">
                                    <div class="column">
                                        <article class="media has-background-white"> 
                                            <div class="media-content p-lg">
                                                <div class="content center-column has-text-centered">
                                                    <img src="../assets/images/tellus.png" alt="Tell us what you need" style="max-width: 160px; margin: 0 auto;"> 
                                                    <h1 class="title is-size-4">Tell us what you need</h1>
                                                    <p class="is-size-5 center-column">
                                                            Submit a request through our custom software or via email. 
                                                    </p>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                    <div class="column">
                                        <article class="media has-background-white"> 
                                                <div class="media-content p-lg">
                                                        <div class="content center-column has-text-centered">
                                                            <img src="../assets/images/designer-work.png" alt="your designer gets to work" style="max-width: 160px; margin: 0 auto;"> 
                                                    <h1 class="title is-size-4">Your designer gets to work</h1>
                                                    <p class="is-size-5 center-column">
                                                            Our team will review your request and then begin working on it.
                                                    </p>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                    <div class="column">
                                        <article class="media has-background-white"> 
                                                <div class="media-content p-lg">
                                                        <div class="content center-column has-text-centered">
                                                            <img src="../assets/images/project-launch.png" alt="launch project" style="max-width: 160px; margin: 0 auto;">  
                                                    <h1 class="title is-size-4">Launch your amazing Project</h1>
                                                    <p class="is-size-5 center-column">
                                                            Here we go! Reply if any additional consultation is needed!
                                                    </p>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div>
                            <div class="content has-text-centered m-t-xl"> 
                                    <n-link class="button is-large has-text-weight-bold is-success" to="contact">Sign up now</n-link> 
                            </div>
                        <!-- /.section -->
                        </section>
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
             <!-- /.section -->

                
 </section>
 	  </section>

        <section class="section has-background-light">
                <div class="single-spaced">
                        <h1 class="subtitle is-2 center has-text-black">Have more questions?</h1>
                        <br />
                        <h1 class="subtitle is-4 center has-text-black">Visit our help center or <n-link to="contact">&nbsp;contact us.</n-link>We’re always happy to help.</h1> 
                        <br />
                        
                </div>
                <!-- logos -->
                
                <!-- ./logos -->
        </section>
     
       <!-- footer-->
       <div style="height: 20px;" class="has-background-black"> </div>
       <section class="section has-background-black" style="border-top: 3px solid #fff;">
               <div class="container is-black">
                   <div class="columns">
                       <div class="column p-md">
                              <h1 class="subtitle is-1 has-text-white has-text-weight-bold">
                               BLOC<br/>
                               THEORYM
                              </h1>
                              <div class="has-text-white is-size-5">
                                   BlocTheorym is the world’s #1 enterprise blockchain tech web consulting service. Our purpose: to change lives with technology.
                                  </div>
                              <div class="has-text-white is-size-6 m-t-md">© 2019 BlocTheorym. All Rights Reserved.</div>
                       </div> 
                       <div class="column p-md">
                          <h2 class="subtitle is-4 has-text-white has-text-weight-bold">LEARN</h2>
                          <p class="has-text-white is-size-5">
                               <n-link to="about" class="has-text-white">About Us</n-link><br/> 
                               <n-link to="contact" class="has-text-white">Become A Partner</n-link><br/> 
                               <n-link to="contact" class="has-text-white">Careers</n-link></p>
                       </div>  
                       <div class="column p-md">
                          <h2 class="subtitle is-4 has-text-white has-text-weight-bold">LEGAL</h2> 
                          <p class="has-text-white is-size-5">
                           <n-link to="terms" class="has-text-white">Terms & Conditions</n-link><br/>
                           <n-link to="privacy" class="has-text-white">Privacy Policy</n-link><br/>
                           <n-link to="privacy" class="has-text-white">Cookie Policy</n-link></p>
                       </div>  
                       <div class="column p-md">
                          <h2 class="subtitle is-4 has-text-white has-text-weight-bold">CONTACT US</h2>
                          <p class="has-text-white is-size-5">
                               <n-link to="contact" class="has-text-white">Send us a message</n-link><br />
                               More Questions?<br />
                               (800) 123-4567</p>
                       </div>  
                   </div>
               </div> 
           </section>  
</div>
</template>