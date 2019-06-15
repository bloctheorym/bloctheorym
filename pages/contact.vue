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
        <div class="columns is-mobile is-marginless heading has-text-weight-bold">
            <div class="column left">
                <figure class="navbar-item-logo image is-marginless">
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
		<section class="section">
                <div class="container is-fluid">
                    <div class="columns p-t-xl center"> 
                        <div class="column">
                            <article> 
                                <div class="media-content">
                                    <div class="content p-t-lg has-text-centered">
                                        <h1 class="title is-size-3 p-t-lg"><span style="color: #6063d4;">CONTACT US</span></h1>
                                        <p class="is-size-5 has-text-black has-text-weight-bold" style="line-height: 1.6rem;">
                                                
                                        </p> 
                                          	<!-- email section -->
                                       <section style="max-width: 600px; margin: 0 auto;">
                                      
                                        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeF2mjqiPleUZqLr8wco6lqwhraMN_UCs1M_DhoSDqN77gwzw/viewform?embedded=true" width="100%" height="795" frameborder="0" marginheight="0" marginwidth="0" style="height: 795px !important;">Loading...</iframe>

                                    </section>
                                </div>
                                    </div>
                            </article>
 
                    </div>
                </div> </div>
        </section> 
</div>
</template>
