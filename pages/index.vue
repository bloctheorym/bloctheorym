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
                     <li> <n-link to="/"><img src="../assets/images/bloctheorym-logo-blue-o.png"></n-link></li>
                     <li><n-link to="/">HOME</n-link></li>
                     <li><n-link to="about" target="_blank">ABOUT</n-link></li>
                     <li><n-link to="our-work" target="_blank">OUR WORK</n-link></li>
                     <li><n-link to="pricing" class="has-text-white">PRICING</n-link></li>
                     <li><n-link to="contact" class="has-text-white">CONTACT</n-link></li>
                     
                     <li><n-link class="button is-small has-text-weight-bold is-black hide" to="pricing" style="background-color: #6063d4;">Learn More</n-link></li>
                   </ul>
                 </div> 
                <!-- ./end mobile nav -->
          <section class="hero is-fullheight">
     <!-- .hero-head -->
       <div class="hero-head">
        <div class="columns is-mobile is-marginless heading">
            <div class="column left">
                <figure class="navbar-item-logo image is-marginless">
                    <n-link to="/"><img src="../assets/images/bloctheorym-logo-green-o.png" alt="BLOCTHEORYM"></n-link>
                </figure>
            </div>
            <div class="column center desktop is-desktop-nav">
                <p class="navbar-item has-text-white has-text-weight-bold"><n-link to="/" class="has-text-white">HOME</n-link> </p>
                <p class="navbar-item has-text-white has-text-weight-bold"><n-link to="about" class="has-text-white">ABOUT</n-link> </p>
                <p class="navbar-item has-text-white has-text-weight-bold"><n-link to="our-work" class="has-text-white">OUR WORK</n-link> </p>
                <p class="navbar-item has-text-white has-text-weight-bold"><n-link to="pricing" class="has-text-white">PRICING</n-link> </p>
                <p class="navbar-item has-text-white hide">RESOURCES</p>
                <p class="navbar-item has-text-white hide">DEMO  </p>
            </div>
            <div class="column right hide"> 
                <p class="navbar-item has-text-white desktop"><n-link to="log-in" class="has-text-white hide">LOG IN</n-link>     </p>
                <p class="navbar-item has-text-white desktop"><n-link class="button is-small has-text-weight-bold is-black hide" to="pricing" style="background-color: #6063d4;">Learn More</n-link></p>  
                <figure class="navbar-item image has-text-white center hide">
                        <i class="fas fa-bars" style="width: 1rem; height: 1rem;"></i>
                </figure>
            </div>
        </div>
    </div>
    <!-- /.hero-head -->
        
        
        <header class="hero-body">
                <div class="single-spaced p-l-lg m-t-xxl pagewidth" style="top: 82px; ">
                    <h1 class="subtitle is-1 has-text-white has-text-weight-bold">Hire a BLOCTHEORYM<br/> Developer Today</h1>
                    <br />
                    <h2 class="title is-5 has-text-white">In a few clicks you’ll have access to a professional UX design &amp; development team ready to jump into your ecosystem.</h2>
                    <n-link class="button is-large  is-blue" to="pricing">See Pricing</n-link>
                    <n-link class="button is-large contactbutton m-l-md is-green" to="contact">Contact Us</n-link>
                </div>
        </header>
            <!-- .hero-body -->
            </section>
            <!-- /.hero -->  


 	<!-- .section -->
		<section class="section">
                <div class="container">
                    <div class="columns">
                        <div class="column">
                            <article> 
                                <div class="media-content p-xl btn-ctr">
                                    <div class="content m-t-lg">
                                        <h1 class="title is-size-3">The ultimate web development and enterprise blockchain tech solution</h1>
                                        <p class="is-size-5">
                                                Connect with a BLOCTHEORYM developer who knows you by name and understands your brand and changing business integration needs. Our intuitive process makes it easy to request and manage your project and scale up as you grow.
                                        </p>
                                        <n-link class="button is-large contactbutton is-green" to="contact">Contact Us</n-link>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div class="column">
                            <article> 
                                <div class="media-content">
                                    <div class="content">
                                        <img src="../assets/images/designs.png" alt="designs">
                                    </div>
                                </div>
                            </article>
                        </div> 
                    </div>
                </div>
            </section>
            <!-- /.section -->
   
   <!-- .logos list -->
            <section class="section has-background-light cologos">
                    <div class="single-spaced">
                            <h1 class="subtitle is-3 center">You're in Good Company</h1>
                            <br />
                            <h2 class="title is-5 center">SOME OF OUR PARTNERS</h2>  
                    </div> 
      <section class="section"> 
            <div class="container">
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
                <!-- .section - service - support - scalable -->
		<section class="section bg-1">
                <div class="container">
                    <div class="columns">
                        <div class="column">
                            <article class="media has-background-white"> 
                                <div class="media-content p-lg">
                                    <div class="content center-column">
                                        <img src="../assets/images/service_icon.png" alt="service" style="max-width: 160px; margin: 0 auto;"> 
                                        <h1 class="title is-size-4">Service</h1>
                                        <p class="is-size-5 center-column">
                                                Add a BLOCKTHEORYM Developer in just a few clicks. 
                                                <br /><br />
                                                <n-link to="service">Learn more</n-link> 
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div class="column">
                            <article class="media has-background-white"> 
                                    <div class="media-content p-lg">
                                            <div class="content center-column">
                                                <img src="../assets/images/support_icon.png" alt="service" style="max-width: 160px; margin: 0 auto;"> 
                                        <h1 class="title is-size-4">Support</h1>
                                        <p class="is-size-5 center-column">
                                                World-class customer support and training. Powered by people.
                                                <br /><br />
                                                <n-link to="support">Learn more</n-link> 
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div class="column">
                            <article class="media has-background-white"> 
                                    <div class="media-content p-lg">
                                            <div class="content center-column">
                                                <img src="../assets/images/scalable.png" alt="service" style="max-width: 160px; margin: 0 auto;">  
                                        <h1 class="title is-size-4">Scalable</h1>
                                        <p class="is-size-5 center-column">
                                                Pay as you grow &amp; add or remove services to fit your changing needs.
                                                <br /><br />
                                                <n-link to="scalable">Learn more</n-link> 
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
           
            <!-- /.section -->

                <br /><br />
              <!-- .section - software - security - system -->
	 
                <div class="container hide">
                    <div class="columns">
                        <div class="column">
                            <article class="media has-background-white"> 
                                <div class="media-content p-lg">
                                    <div class="content center-column">
                                        <img src="../assets/images/security_icon.png" alt="service" style="max-width: 160px; margin: 0 auto;"> 
                                        <h1 class="title is-size-4">Software</h1>
                                        <p class="is-size-5 center-column">
                                                Our custom built software makes creation easier than ever.
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
                                                <img src="../assets/images/system_icon.png" alt="service" style="max-width: 160px; margin: 0 auto;"> 
                                        <h1 class="title is-size-4">Systems</h1>
                                        <p class="is-size-5 center-column">
                                                Automate &amp; integrate BlocTheorym with your favorite applications.
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
                                                <img src="../assets/images/storage_icon.png" alt="service" style="max-width: 160px; margin: 0 auto;">  
                                        <h1 class="title is-size-4">Security</h1>
                                        <p class="is-size-5 center-column">
                                                Your files are safe, secure and easily shared with your team.
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
            <!-- /.section -->

 	<!-- .section -->
     <section class="section">
            <div class="container">
                <div class="columns">
                    <div class="column">
                                <article> 
                                    <div class="media-content">
                                        <div class="content">
                                            <img src="../assets/images/development0.jpeg" alt="development" class="imgx">
                                        </div>
                                    </div>
                                </article>
                    </div> 
                    <div class="column">
                        <article> 
                            <div class="media-content p-xl">
                                <div class="content m-t-xl">
                                    <h1 class="title is-size-3">Development support, 24/7</h1>
                                    <p class="is-size-5">
                                            BLOCTHEORYM is more than a development team, it’s an experience. Our team isn’t made up of contractors, interns, or fly-by-night outfits. We’ve been in this business for years, delighting customers around the globe with our dependable, high-quality service.
                                    </p> 
                                </div>
                            </div>
                        </article>
                    </div>  
                </div>
            </div> 
        </section>
        <!-- end development support section -->
        <section class="section">
            <div class="container">
                <div class="columns">
                    <div class="column">
                        <article> 
                            <div class="media-content p-xl">
                                <div class="content m-t-lg">
                                    <h1 class="title is-size-3">Customize your perfect development solution</h1>
                                    <p class="is-size-5">
                                            Whenever you need, it’s easy to add more to your package. We make it easy to collaborate with your team and share design files. We can build enterprise level custom blockchain tech support at scale, across teams, across applications. 
                                    </p> 
                                </div>
                            </div>
                        </article>
                    </div>
               <div class="column">
                <article> 
                    <div class="media-content">
                        <div class="content">
                            <img src="../assets/images/service3.jpeg" alt="customize your perfect solution" class="imgx">
                        </div>
                    </div>
                </article>
              </div>
             </div>
            </div>
        </section>
        <!-- Powered by people -->
          <section class="section">
            <div class="container">
                <div class="columns">
                    <div class="column">
                                <article> 
                                    <div class="media-content">
                                        <div class="content">
                                            <img src="../assets/images/poweredby.jpeg" alt="Powered By People" class="imgx"> 
                                        </div>
                                    </div>
                                </article>
                    </div>  
                    <div class="column">
                        <article> 
                            <div class="media-content p-xl">
                                <div class="content m-t-xl btn-ctr">
                                    <h1 class="title is-size-3">Powered by people</h1>
                                    <p class="is-size-5">
                                            BLOCTHEORYM is backed by a team of creative, hard-working and helpful team members all over the world. 
                                            Our purpose goes far beyond coding. We wake up every day to change lives through our service, support and products. We believe in giving back to our community and are dedicated to helping others grow personally and professionally through education and inspiration.
                                    </p>
                                    <n-link class="button is-large is-rubyred" to="about">Learn More</n-link >
                                </div>
                            </div>
                        </article>
                    </div>  
                </div>
            </div> 
        </section>
        <!-- powered by people -->
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
